<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ontology Definition: Aircraft Engine Identifier</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            color: #000;
            min-height: 100vh;
        }

        .top-band {
            background-color: #B7A99A;
            height: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10px;
            color: black;
            font-size: 12px;
            width: 100%;
            box-sizing: border-box;
        }

        .main-content {
            padding: 20px;
            max-width: 1600px;
            margin: 0 auto;
        }

        h1 {
            font-size: 2em;
            color: #333;
            margin-bottom: 10px;
            font-weight: 600;
        }

        h2 {
            font-size: 1.5em;
            color: #005A9C;
            border-bottom: 2px solid #005A9C;
            padding-bottom: 5px;
            margin-top: 30px;
            margin-bottom: 15px;
        }

        h3 {
            font-size: 1.2em;
            color: #333;
            margin-top: 20px;
            margin-bottom: 10px;
        }

        /* Class Definition Section */
        .class-definition {
            background: white;
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            margin: 20px 0;
        }

        .definition-row {
            margin: 15px 0;
            line-height: 1.6;
        }

        .definition-row strong {
            color: #005A9C;
            display: inline-block;
            min-width: 150px;
        }

        /* Hierarchy Tree */
        .hierarchy-tree {
            list-style: none;
            padding-left: 0;
            margin: 20px 0;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .hierarchy-tree li {
            position: relative;
            padding: 5px 0 5px 25px;
            line-height: 1.6;
        }

        .hierarchy-tree li::before {
            content: '';
            position: absolute;
            left: 8px;
            top: 12px;
            width: 8px;
            height: 8px;
            background-color: #DAA520;
            border-radius: 50%;
            border: 1px solid #B8860B;
        }

        .hierarchy-tree li.current-class::before {
            background-color: #005A9C;
            border-color: #003366;
        }

        .hierarchy-tree li.current-class {
            font-weight: bold;
            color: #005A9C;
        }

        .hierarchy-tree ul {
            list-style: none;
            padding-left: 25px;
        }

        /* Ontology Canvas */
        .canvas-container {
            background: white;
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            margin: 30px 0;
        }

        .canvas-wrapper {
            border: 2px solid #000;
            overflow: hidden;
        }

        /* Top section with headers */
        .canvas-top-section {
            display: flex;
            border-bottom: 2px solid #000;
        }

        .canvas-top-left {
            flex: 2;
            border-right: 2px solid #000;
            padding: 10px;
            text-align: center;
            font-weight: 600;
            background: white;
        }

        .canvas-top-right {
            flex: 1;
            padding: 10px;
            text-align: center;
            font-weight: 600;
            background: white;
        }

        /* Main content grid */
        .canvas-main-grid {
            display: grid;
            grid-template-columns: 12% 12% 40% 24% 12%;
            min-height: 550px;
        }

        .canvas-cell {
            border-right: 2px solid #000;
            position: relative;
            padding: 15px 8px;
            display: flex;
            flex-direction: column;
        }

        .canvas-cell:last-child {
            border-right: none;
        }

        .canvas-cell-header {
            font-weight: 600;
            font-size: 0.85em;
            text-align: center;
            margin-bottom: 5px;
        }

        .canvas-cell-subtext {
            font-size: 0.75em;
            text-align: center;
            margin-bottom: 15px;
            line-height: 1.3;
        }

        /* Qualities/Functions/Roles column with subdivisions */
        .qfr-grid {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .qfr-section {
            flex: 1;
            border-bottom: 1px solid #000;
            padding: 8px;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .qfr-section:last-child {
            border-bottom: none;
        }

        .qfr-title {
            font-weight: 600;
            font-size: 0.8em;
            margin-bottom: 3px;
        }

        .qfr-subtitle {
            font-size: 0.7em;
            line-height: 1.2;
        }

        /* Information Things column with subdivisions */
        .info-grid {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .info-section {
            border-bottom: 1px solid #000;
            padding: 10px;
            display: flex;
            flex-direction: column;
        }

        .info-section:last-child {
            border-bottom: none;
            flex: 1;
        }

        .info-section:nth-child(1),
        .info-section:nth-child(2) {
            min-height: 120px;
        }

        .info-section:nth-child(3) {
            flex: 1;
            justify-content: flex-start;
        }

        .info-title {
            font-weight: 600;
            font-size: 0.8em;
            margin-bottom: 3px;
        }

        .info-subtitle {
            font-size: 0.7em;
            line-height: 1.2;
            margin-bottom: 10px;
        }

        /* Highlighted boxes */
        .highlight-box {
            background: #FFD700;
            border: 2px solid #000;
            border-radius: 5px;
            padding: 10px;
            font-weight: bold;
            text-align: center;
            font-size: 0.85em;
            margin: 10px auto;
            max-width: 180px;
        }

        /* Arrows and labels */
        .relationship-arrow {
            color: #005A9C;
            font-size: 1.3em;
            text-align: center;
            margin: 8px 0;
        }

        .relationship-label {
            color: #005A9C;
            font-size: 0.75em;
            font-style: italic;
            text-align: center;
            margin: 5px 0;
        }

        /* Filters Section */
        .filters-section {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            margin: 20px 0;
            display: flex;
            gap: 20px;
            align-items: end;
            flex-wrap: wrap;
        }

        .filter-group {
            flex: 1;
            min-width: 200px;
        }

        .filter-group label {
            display: block;
            font-weight: 600;
            margin-bottom: 5px;
            color: #333;
            font-size: 0.9em;
        }

        .filter-group select {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid #ccc;
            border-radius: 4px;
            font-size: 0.95em;
            background: white;
        }

        .filter-button {
            padding: 10px 20px;
            background: #005A9C;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 0.95em;
            font-weight: 600;
        }

        .filter-button:hover {
            background: #003d6b;
        }

        /* Data Sources Table */
        .data-table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            margin: 20px 0;
        }

        .data-table thead {
            background: #005A9C;
            color: white;
        }

        .data-table th {
            padding: 12px;
            text-align: left;
            border: 1px solid #ddd;
            font-weight: 600;
        }

        .data-table td {
            padding: 10px;
            border: 1px solid #ddd;
        }

        .data-table tbody tr:nth-child(even) {
            background: #f9f9f9;
        }

        .data-table tbody tr:hover {
            background: #e8f4f8;
        }

        .column-highlight {
            font-family: 'Courier New', monospace;
            background: #FFD700;
            font-weight: 600;
        }

        .info-box {
            background: #e8f4f8;
            border-left: 4px solid #005A9C;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
        }

        .note-box {
            margin-top: 40px;
            padding: 20px;
            background: #f9f9f9;
            border-radius: 8px;
            text-align: center;
            color: #666;
        }
    </style>
</head>
<body>

    <div class="top-band">
        <span class="top-band-text">US and Non-US Persons</span>
        <span class="top-band-text"><b>Technical Data/Information STRICTLY PROHIBITED</b></span>
        <span class="top-band-text">US and Non-US Persons</span>
    </div>

    <div class="main-content">
        <h1>Ontology Definition: Aircraft Engine Identifier</h1>

        <h2>Class Definition</h2>
        <div class="class-definition">
            <h3>Aircraft Engine Identifier</h3>
            
            <div class="definition-row">
                <strong>Definition:</strong> 
                <span>An identifier that uniquely designates a specific aircraft engine instance. This identifier serves as the primary means of tracking, referencing, and managing individual engine assets throughout their lifecycle.</span>
            </div>

            <div class="definition-row">
                <strong>Subclass of:</strong> 
                <span>Identifier</span>
            </div>

            <div class="definition-row">
                <strong>Domain:</strong> 
                <span>Aviation, Aerospace Manufacturing, Maintenance Operations</span>
            </div>

            <div class="definition-row">
                <strong>Designates:</strong> 
                <span>Aircraft Engine (Material Thing)</span>
            </div>

            <div class="definition-row">
                <strong>SKOS Examples:</strong> 
                <span>E1234 (engine serial number); E2847 (asset serial); Engine_ID E2004 in maintenance logs; JCN-100001 linked engine identifier</span>
            </div>

            <div class="definition-row">
                <strong>Rationale:</strong> 
                <span>Aircraft engines are critical, high-value assets requiring precise identification across multiple systems including defect tracking, maintenance operations, and service records. A standardized identifier enables data integration and lifecycle management across organizational boundaries.</span>
            </div>
        </div>

        <h2>Ontological Hierarchy</h2>
        <ul class="hierarchy-tree">
            <li>owl:Thing
                <ul>
                    <li>entity
                        <ul>
                            <li>continuant
                                <ul>
                                    <li>GenericallyDependentContinuant
                                        <ul>
                                            <li>InformationContentEntity
                                                <ul>
                                                    <li>DescriptiveInformation</li>
                                                    <li>PrescriptiveInformation</li>
                                                    <li>Identifier
                                                        <ul>
                                                            <li class="current-class">Aircraft Engine Identifier</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>

        <h2>Ontology Canvas - Ontology Modeling Scope</h2>
        <div class="canvas-container">
            <div class="canvas-wrapper">
                <!-- Top headers -->
                <div class="canvas-top-section">
                    <div class="canvas-top-left">Things That Exist</div>
                    <div class="canvas-top-right">Things That Happen</div>
                </div>

                <!-- Main grid -->
                <div class="canvas-main-grid">
                    <!-- Material Things -->
                    <div class="canvas-cell">
                        <div class="canvas-cell-header">Material Things</div>
                        <div class="canvas-cell-subtext">(e.g., aircraft engine)</div>
                        <div style="flex: 1; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                            <div class="highlight-box">Aircraft Engine</div>
                            <div class="relationship-label">uniquely identify</div>
                            <div class="relationship-arrow">↑</div>
                        </div>
                    </div>

                    <!-- Qualities, Functions, Roles -->
                    <div class="canvas-cell">
                        <div class="canvas-cell-header">Qualities, Functions, Roles</div>
                        <div class="canvas-cell-subtext">(Entities tied to things)</div>
                        <div class="qfr-grid">
                            <div class="qfr-section">
                                <div class="qfr-title">Qualities</div>
                                <div class="qfr-subtitle">(e.g., mass, temperature)</div>
                            </div>
                            <div class="qfr-section">
                                <div class="qfr-title">Functions</div>
                                <div class="qfr-subtitle">(e.g., generating thrust function)</div>
                            </div>
                            <div class="qfr-section">
                                <div class="qfr-title">Roles</div>
                                <div class="qfr-subtitle">(e.g., supplier role, primary pump role)</div>
                            </div>
                        </div>
                    </div>

                    <!-- Information Things -->
                    <div class="canvas-cell">
                        <div class="canvas-cell-header">Information Things</div>
                        <div class="canvas-cell-subtext">(Data that describes, prescribes, designates things)</div>
                        <div class="info-grid">
                            <div class="info-section">
                                <div class="info-title">Descriptive Data</div>
                                <div class="info-subtitle">(Data that describes things - e.g., measurements, reports)</div>
                            </div>
                            <div class="info-section">
                                <div class="info-title">Prescriptive Data</div>
                                <div class="info-subtitle">(Data that prescribes things - e.g., designs, requirements, plans)</div>
                            </div>
                            <div class="info-section">
                                <div class="info-title">Identifiers</div>
                                <div class="info-subtitle">(Data that designates things - e.g., names, serial numbers)</div>
                                <div style="margin-top: 20px; display: flex; align-items: center; justify-content: center;">
                                    <div style="text-align: center;">
                                        <div class="highlight-box" style="margin: 0;">Aircraft Engine Identifier</div>
                                    </div>
                                    <div style="margin-left: 10px;">
                                        <div class="relationship-arrow" style="margin: 0;">←</div>
                                        <div class="relationship-label" style="margin: 0; white-space: nowrap;">uniquely identify</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Processes -->
                    <div class="canvas-cell">
                        <div class="canvas-cell-header">Processes</div>
                        <div class="canvas-cell-subtext">(e.g., inspection)</div>
                    </div>

                    <!-- Time Periods -->
                    <div class="canvas-cell">
                        <div class="canvas-cell-header">Time Periods</div>
                        <div class="canvas-cell-subtext">(e.g., work shift)</div>
                    </div>
                </div>
            </div>
        </div>

        <h2>Data Sources - All Column Mappings</h2>
        <div class="info-box">
            <strong>Purpose:</strong> This section identifies all database columns across enterprise systems that contain instances of Aircraft Engine Identifier, enabling data reusability and consistent interpretation.
        </div>

        <!-- Filters -->
        <div class="filters-section">
            <div class="filter-group">
                <label for="businessUnit">Business Unit</label>
                <select id="businessUnit">
                    <option value="">All Business Units</option>
                    <option value="PW">Pratt & Whitney (PW)</option>
                    <option value="Collins">Collins Aerospace</option>
                    <option value="EDX">Engine Digital Experience (EDX)</option>
                </select>
            </div>
            
            <div class="filter-group">
                <label for="team">Team</label>
                <select id="team">
                    <option value="">All Teams</option>
                    <option value="maintenance">Maintenance Engineering</option>
                    <option value="assets">Asset Management</option>
                    <option value="operations">Operations</option>
                    <option value="quality">Quality Assurance</option>
                </select>
            </div>
            
            <div class="filter-group">
                <label for="location">Location / Platform</label>
                <select id="location">
                    <option value="">All Platforms</option>
                    <option value="hawkeye">Hawkeye</option>
                    <option value="axon">Axon</option>
                    <option value="databricks">Databricks Workspace</option>
                    <option value="snowflake">Snowflake</option>
                    <option value="datalake">Data Lake</option>
                    <option value="aws">AWS S3</option>
                    <option value="azure">Azure Data Lake</option>
                </select>
            </div>
            
            <button class="filter-button" onclick="applyFilters()">Apply Filters</button>
            <button class="filter-button" style="background: #666;" onclick="clearFilters()">Clear</button>
        </div>

        <!-- Data Sources Table -->
        <table class="data-table">
            <thead>
                <tr>
                    <th>Business Unit</th>
                    <th>Team</th>
                    <th>Location / Platform</th>
                    <th>Database</th>
                    <th>Table</th>
                    <th>Column</th>
                </tr>
            </thead>
            <tbody id="dataTableBody">
                <tr>
                    <td>PW</td>
                    <td>Maintenance Engineering</td>
                    <td>Hawkeye</td>
                    <td style="font-weight: 600;">MaintDB_East</td>
                    <td>ENGINE_DEFECTS</td>
                    <td class="column-highlight">ENGINE_SN</td>
                </tr>
                <tr>
                    <td>Collins</td>
                    <td>Operations</td>
                    <td>Axon</td>
                    <td style="font-weight: 600;">WorkOrderDB</td>
                    <td>MAINTENANCE_LOG</td>
                    <td class="column-highlight">Engine_ID</td>
                </tr>
                <tr>
                    <td>EDX</td>
                    <td>Asset Management</td>
                    <td>Databricks Workspace</td>
                    <td style="font-weight: 600;">AssetTracker_DB</td>
                    <td>SERVICE_RECORDS</td>
                    <td class="column-highlight">Asset_Serial</td>
                </tr>
            </tbody>
        </table>
        
        <p style="margin-top: 15px; color: #666; font-size: 0.9em; text-align: center;">
            <em>Additional mappings can be added as new data sources are identified</em>
        </p>

        <h2>Relationships to Other Data</h2>
        <div class="class-definition">
            <h3>How Aircraft Engine Identifier Connects to Other Data Elements</h3>
            
            <div class="definition-row">
                <strong>designates →</strong> 
                <span>Aircraft Engine (the physical material object)</span>
            </div>

            <div class="definition-row">
                <strong>referenced in →</strong> 
                <span>Defect Records, Work Orders, Service Tickets, Maintenance Logs</span>
            </div>
        </div>

        <div class="note-box">
            <p><strong>Note:</strong> This ontology definition is subject to iterative refinement. Feedback from domain experts and stakeholders is essential for continuous improvement.</p>
        </div>

    </div>

    <script>
        function applyFilters() {
            const businessUnit = document.getElementById('businessUnit').value;
            const team = document.getElementById('team').value;
            const location = document.getElementById('location').value;
            
            const rows = document.querySelectorAll('#dataTableBody tr');
            
            rows.forEach(row => {
                const cells = row.getElementsByTagName('td');
                const rowBU = cells[0].textContent;
                const rowTeam = cells[1].textContent;
                const rowLocation = cells[2].textContent;
                
                let show = true;
                
                if (businessUnit && !rowBU.includes(businessUnit)) show = false;
                if (team && rowTeam.toLowerCase().includes(team)) show = true;
                if (location && !rowLocation.toLowerCase().includes(location)) show = false;
                
                row.style.display = show ? '' : 'none';
            });
        }
        
        function clearFilters() {
            document.getElementById('businessUnit').value = '';
            document.getElementById('team').value = '';
            document.getElementById('location').value = '';
            
            const rows = document.querySelectorAll('#dataTableBody tr');
            rows.forEach(row => row.style.display = '');
        }
    </script>

</body>
</html>
