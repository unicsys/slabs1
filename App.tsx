import React, { useState } from 'react';
import styled from 'styled-components';
import { DiagramCanvas } from './components/DiagramCanvas';
import { Toolbar, ToolType } from './components/Toolbar';

const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const CanvasContainer = styled.div`
  flex: 1;
  background: #f5f5f5;
`;

const App: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<ToolType>('select');

  return (
    <AppContainer>
      <Toolbar selectedTool={selectedTool} onToolSelect={setSelectedTool} />
      <CanvasContainer>
        <DiagramCanvas selectedTool={selectedTool} />
      </CanvasContainer>
    </AppContainer>
  );
};

}
}

"""
CSV Augmentation Script - Enhanced RefDes Parsing with Confidence Tracking
Extracts all RefDes from description field into a single clean column
Handles operator variability and validates against DefQty
"""
import csv
import re
from typing import List, Tuple


def parse_refdes_from_description(description: str, primary_refdes: str, expected_qty: int) -> Tuple[List[str], str, str]:
    """
    Parse reference designators from description field with confidence tracking.
    
    Args:
        description: Description text like "REPLACE R29, 128,134,130..."
        primary_refdes: Primary RefDes from RefDesigDescription column
        expected_qty: Expected number from DefQty column
    
    Returns:
        (list_of_refdes, confidence_level, discrepancy_note)
        
    Confidence Levels:
        HIGH: Count matches exactly, clear parsing
        MEDIUM: Count matches but parsing had ambiguity, OR close match
        LOW: Significant discrepancy or unclear parsing
    """
    
    # Handle empty/missing description
    if not description or not isinstance(description, str) or description.strip() == '':
        if expected_qty == 1:
            return [primary_refdes.upper()], "HIGH", "No description - using primary RefDes"
        else:
            # Expected multiple but no description - this is a problem
            refdes_list = [primary_refdes.upper()]
            for i in range(1, expected_qty):
                refdes_list.append(f"UNKNOWN_{i:02d}")
            return refdes_list, "LOW", f"Missing description for DefQty={expected_qty}, filled with UNKNOWN"
    
    # Preprocessing: Clean up common operator variations
    cleaned = description.upper()  # Normalize case
    
    # Remove common action words
    action_words = ['REPLACE', 'REMOVE', 'INSTALL', 'REPAIR', 'FIX', 'CHECK', 'TEST', 'FOUND']
    for word in action_words:
        cleaned = cleaned.replace(word, ' ')
    
    # Normalize separators: "AND", "and" -> comma
    cleaned = re.sub(r'\s+AND\s+', ',', cleaned)
    
    # Handle "ITS" or other descriptive text after RefDes
    cleaned = re.sub(r'\s+(ITS|THE|A|AN)\s+.*$', '', cleaned)
    
    # Clean up: remove spaces within numbers (e.g., "14 1" -> "141")
    cleaned = re.sub(r'(\d)\s+(\d)', r'\1\2', cleaned)
    
    # Remove extra whitespace
    cleaned = ' '.join(cleaned.split())
    
    # Find all alphanumeric patterns that could be RefDes
    # Patterns: R29, 128, P1, U6, K1, T2, etc.
    matches = re.findall(r'[A-Z]?\d+', cleaned)
    
    # Track parsing clarity
    parsing_notes = []
    
    if not matches:
        # No matches found - this is concerning
        return [primary_refdes.upper()], "LOW", f"No RefDes found in description: '{description[:50]}...'"
    
    # Normalize the matches
    refdes_list = []
    prefix_from_primary = primary_refdes[0].upper() if primary_refdes and primary_refdes[0].isalpha() else 'R'
    
    for match in matches:
        match_upper = match.upper()
        
        # If starts with letter, use as-is
        if match_upper[0].isalpha():
            refdes_list.append(match_upper)
        else:
            # Number only - add prefix from primary RefDes
            inferred_refdes = f"{prefix_from_primary}{match}"
            refdes_list.append(inferred_refdes)
            parsing_notes.append(f"Inferred prefix for {match}")
    
    # Remove duplicates while preserving order
    original_count = len(refdes_list)
    refdes_list = list(dict.fromkeys(refdes_list))
    if original_count != len(refdes_list):
        parsing_notes.append(f"Removed {original_count - len(refdes_list)} duplicates")
    
    # Ensure primary RefDes is in the list if not already
    primary_upper = primary_refdes.upper()
    if primary_upper not in refdes_list:
        # Check if primary is mentioned anywhere in description
        if primary_upper in description.upper():
            refdes_list.insert(0, primary_upper)
        else:
            # Primary not in description - unusual but add anyway
            refdes_list.insert(0, primary_upper)
            parsing_notes.append(f"Primary RefDes {primary_upper} not in description")
    
    # Validate against expected quantity
    found_count = len(refdes_list)
    
    # Determine confidence level and handle discrepancies
    if found_count == expected_qty:
        # Perfect match
        if parsing_notes:
            confidence = "MEDIUM"
            note = f"Count matches ({found_count}); " + "; ".join(parsing_notes)
        else:
            confidence = "HIGH"
            note = f"Count matches exactly ({found_count})"
    
    elif abs(found_count - expected_qty) <= 1:
        # Off by one - common operator error
        if found_count < expected_qty:
            # Fill with unknown
            num_unknowns = expected_qty - found_count
            for i in range(1, num_unknowns + 1):
                refdes_list.append(f"UNKNOWN_{i:02d}")
            confidence = "MEDIUM"
            note = f"Expected {expected_qty}, found {found_count}, filled with UNKNOWN"
        else:
            # Truncate to expected
            refdes_list = refdes_list[:expected_qty]
            confidence = "MEDIUM"
            note = f"Expected {expected_qty}, found {found_count}, truncated to match"
    
    elif found_count < expected_qty:
        # Significant undercounting
        num_unknowns = expected_qty - found_count
        for i in range(1, num_unknowns + 1):
            refdes_list.append(f"UNKNOWN_{i:02d}")
        confidence = "LOW"
        note = f"Expected {expected_qty}, only found {found_count} - filled {num_unknowns} with UNKNOWN"
    
    else:
        # Significant overcounting - truncate
        refdes_list = refdes_list[:expected_qty]
        confidence = "LOW"
        note = f"Expected {expected_qty}, found {found_count}, truncated to match (check description)"
    
    return refdes_list, confidence, note


def augment_csv(input_file: str, output_file: str):
    """
    Augment CSV with parsed RefDes in a single clean column.
    
    New columns added:
    - CleanRefDesList: Pipe-separated list of all RefDes (e.g., "R29|R128|R134")
    - ParsedRefDesCount: Number of RefDes found
    - ConfidenceLevel: HIGH/MEDIUM/LOW
    - DiscrepancyNote: Validation status and notes
    """
    
    print("="*100)
    print("CSV AUGMENTATION - Enhanced Reference Designator Parsing with Confidence Tracking")
    print("="*100)
    
    # Read input CSV
    with open(input_file, 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f)
        rows = list(reader)
        fieldnames = reader.fieldnames
    
    print(f"\n✓ Read {len(rows)} rows from {input_file}")
    print(f"✓ Original columns: {len(fieldnames)}")
    
    # Add new column names
    new_columns = [
        'CleanRefDesList',      # Single column with pipe-separated RefDes
        'ParsedRefDesCount',    # Count of RefDes found
        'ConfidenceLevel',      # HIGH/MEDIUM/LOW
        'DiscrepancyNote'       # Explanation of any issues
    ]
    
    augmented_fieldnames = list(fieldnames) + new_columns
    
    print(f"✓ New columns added: {len(new_columns)}")
    print(f"  - CleanRefDesList: Pipe-separated list (e.g., 'R29|R128|R134')")
    print(f"  - ParsedRefDesCount: Number of RefDes extracted")
    print(f"  - ConfidenceLevel: HIGH/MEDIUM/LOW")
    print(f"  - DiscrepancyNote: Validation status")
    print(f"✓ Total columns: {len(augmented_fieldnames)}")
    
    # Process each row
    augmented_rows = []
    
    # Statistics
    stats = {
        'HIGH': 0,
        'MEDIUM': 0,
        'LOW': 0,
        'total_refdes': 0
    }
    
    print("\n" + "-"*100)
    print("Processing rows...")
    print("-"*100)
    
    for idx, row in enumerate(rows, 1):
        # Extract data
        description = row.get('Defect Description/In struction', '')
        primary_refdes = row.get('RefDesigDescription', '')
        defqty = int(row.get('DefQty', 1))
        
        # Parse RefDes with confidence tracking
        refdes_list, confidence, note = parse_refdes_from_description(
            description, primary_refdes, defqty
        )
        
        # Add new fields
        row['CleanRefDesList'] = '|'.join(refdes_list)  # Use pipe separator for clean CSV
        row['ParsedRefDesCount'] = str(len(refdes_list))
        row['ConfidenceLevel'] = confidence
        row['DiscrepancyNote'] = note
        
        augmented_rows.append(row)
        
        # Update statistics
        stats[confidence] += 1
        stats['total_refdes'] += len(refdes_list)
        
        # Print details
        print(f"\n{'─'*100}")
        print(f"Row {idx}: Serial {row.get('1stLevelSerial', 'N/A')} | DefCode: {row.get('DefCode', 'N/A')}")
        print(f"{'─'*100}")
        print(f"  Primary RefDes:  {primary_refdes}")
        print(f"  Expected Qty:    {defqty}")
        print(f"  Description:     {description[:70]}{'...' if len(description) > 70 else ''}")
        print(f"  ───────────────────────────────────────────────────────────────────────────")
        print(f"  ✓ Parsed RefDes: {' | '.join(refdes_list)}")
        print(f"  ✓ Count:         {len(refdes_list)}")
        print(f"  ✓ Confidence:    {confidence}")
        print(f"  ✓ Note:          {note}")
    
    # Write augmented CSV
    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=augmented_fieldnames)
        writer.writeheader()
        writer.writerows(augmented_rows)
    
    print("\n" + "="*100)
    print(f"✓ Augmented CSV saved to: {output_file}")
    print(f"✓ Rows processed: {len(augmented_rows)}")
    print(f"✓ Total columns: {len(augmented_fieldnames)} (added {len(new_columns)})")
    print("="*100)
    
    # Summary statistics
    print("\n" + "="*100)
    print("CONFIDENCE LEVEL SUMMARY")
    print("="*100)
    
    total_rows = len(augmented_rows)
    print(f"  HIGH Confidence:     {stats['HIGH']:3d} rows ({stats['HIGH']/total_rows*100:5.1f}%)")
    print(f"  MEDIUM Confidence:   {stats['MEDIUM']:3d} rows ({stats['MEDIUM']/total_rows*100:5.1f}%)")
    print(f"  LOW Confidence:      {stats['LOW']:3d} rows ({stats['LOW']/total_rows*100:5.1f}%)")
    print(f"  {'─'*50}")
    print(f"  Total:               {total_rows:3d} rows")
    print(f"  Total RefDes:        {stats['total_refdes']:3d}")
    print(f"  Avg RefDes/Row:      {stats['total_refdes']/total_rows:.1f}")
    
    # Show rows needing review
    low_confidence_rows = [r for r in augmented_rows if r['ConfidenceLevel'] == 'LOW']
    if low_confidence_rows:
        print("\n" + "="*100)
        print(f"⚠️  {len(low_confidence_rows)} ROWS NEED REVIEW (LOW Confidence)")
        print("="*100)
        for row in low_confidence_rows:
            serial = row.get('1stLevelSerial', 'N/A')
            note = row['DiscrepancyNote']
            print(f"  • Serial {serial}: {note}")
    
    print("\n" + "="*100)
    print("Augmentation Complete!")
    print("="*100)


def main():
    """Main execution."""
    input_file = "exampleSAPTable.csv"
    output_file = "exampleSAPTable_AUGMENTED.csv"
    
    augment_csv(input_file, output_file)
    
    print("\n" + "="*100)
    print("NEXT STEPS")
    print("="*100)
    print("1. Review rows with LOW confidence in the output CSV")
    print("2. Check DiscrepancyNote column for specific issues")
    print("3. Use CleanRefDesList column in your knowledge graph mapping")
    print("4. Filter by ConfidenceLevel if you want to process only HIGH confidence data first")
    print("\nColumn Format:")
    print("  CleanRefDesList: Uses pipe (|) separator for easy parsing")
    print("  Example: 'R29|R128|R134|R130|R132|R143|R144|R139|R141|R147'")
    print("="*100)


if __name__ == "__main__":
    main()

