<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>BFO/IOF Aligned Knowledge Graph</title>
    <script type="text/javascript" src="https://unpkg.com/vis-network/standalone/umd/vis-network.min.js"></script>
    
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Arial, sans-serif;
            background-color: #f0f2f5;
            overflow: hidden;
        }

        #mynetwork {
            width: 100vw;
            height: 100vh;
            background-color: #ffffff;
        }

        /* LEGEND */
        .legend {
            position: absolute;
            top: 20px;
            left: 20px;
            background: rgba(255, 255, 255, 0.95);
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            border: 1px solid #dcdcdc;
            z-index: 100;
            width: 260px;
        }

        .legend h3 {
            margin: 0 0 10px 0;
            font-size: 14px;
            color: #333;
            border-bottom: 2px solid #555;
            padding-bottom: 5px;
            text-transform: uppercase;
        }

        .legend-item {
            display: flex;
            align-items: center;
            margin-bottom: 8px;
            font-size: 13px;
            color: #444;
        }

        .shape { display: inline-block; margin-right: 10px; }
        .box { width: 14px; height: 14px; border-radius: 2px; border: 1px solid #333; }
        .dot { width: 14px; height: 14px; border-radius: 50%; border: 1px solid #333; }
        .line { width: 25px; height: 0; border-top: 2px solid #888; margin-right: 5px; }
        .dashed { border-style: dashed; }

    </style>
</head>
<body>

    <div class="legend">
        <h3>BFO / IOF Legend</h3>
        
        <div class="legend-item">
            <span class="shape box" style="background: #FFA500;"></span>
            <span><strong>Ontology Class</strong> (Universal)</span>
        </div>
        
        <div class="legend-item">
            <span class="shape dot" style="background: #8A2BE2;"></span>
            <span><strong>Data Instance</strong> (Particular)</span>
        </div>
        
        <div class="legend-item" style="margin-top: 10px; font-style: italic; color: #666;">
            All data (Materials, Issues, Costs, Specs) are Purple. Check the link to the Class to see what they are.
        </div>

        <div class="legend-item" style="margin-top: 10px; border-top: 1px solid #eee; padding-top: 8px;">
            <span class="shape line dashed"></span>
            <span><strong>rdf:type</strong> (Instance of)</span>
        </div>
        <div class="legend-item">
            <span class="shape line" style="border-color: #333;"></span>
            <span><strong>obo:RO</strong> (Relationship)</span>
        </div>
    </div>

    <div id="mynetwork"></div>

    <script type="text/javascript">
        
        // --- CONSTANTS ---
        const C_CLASS = '#FFA500';   // Orange for BFO Classes
        const C_INST  = '#8A2BE2';   // Purple for ALL Instances
        
        // --- DATASET ---
        const nodesArray = [
            
            // --- 1. ONTOLOGY (BFO & IOF CLASSES) ---
            // Independent Continuant: The object itself
            {id: 'BFO:MaterialEntity', label: 'BFO:Material\nEntity', shape: 'box', color: C_CLASS, font:{bold:true}},
            
            // Role: The role played by an agent (Supplier)
            {id: 'BFO:Role', label: 'BFO:Role\n(Supplier)', shape: 'box', color: C_CLASS},
            
            // Specifically Dependent Continuant: Qualities (Hardness, Color)
            {id: 'BFO:Quality', label: 'BFO:Quality\n(Property)', shape: 'box', color: C_CLASS},
            
            // Occurrent: Processes
            {id: 'IOF:PlannedProcess', label: 'IOF:Planned\nProcess', shape: 'box', color: C_CLASS},
            
            // Generically Dependent Continuant: Information (Specs, Costs)
            {id: 'IOF:InfoContent', label: 'IOF:Information\nContent Entity', shape: 'box', color: C_CLASS},


            // --- 2. INSTANCES (ALL PURPLE) ---
            
            // Materials
            {id: 'mat_7075', label: 'Batch: 7075-T6', shape: 'dot', color: C_INST, size: 25},
            {id: 'mat_ti64', label: 'Batch: Ti-6Al-4V', shape: 'dot', color: C_INST, size: 25},

            // Organizations/Roles (modeled as the bearer of the supplier role)
            {id: 'org_alcoa', label: 'Alcoa Inc.', shape: 'dot', color: C_INST, size: 20},
            {id: 'org_kaiser', label: 'Kaiser Al.', shape: 'dot', color: C_INST, size: 20},

            // Processes (Testing/Manufacturing)
            {id: 'proc_test_01', label: 'Hardness Test\n#8842', shape: 'dot', color: C_INST, size: 15},
            
            // Qualities (The actual physical attributes found)
            {id: 'qual_hard_low', label: 'Meas. Hardness\n140 HB (Low)', shape: 'dot', color: C_INST, size: 18},
            {id: 'qual_surf_r',   label: 'Meas. Roughness\n85 Ra', shape: 'dot', color: C_INST, size: 18},

            // Information (Specs, Costs)
            {id: 'spec_ams', label: 'Spec:\nAMS-QQ-A-250', shape: 'dot', color: C_INST, size: 16},
            {id: 'data_cost1', label: 'Cost Data:\n$8.50/kg', shape: 'dot', color: C_INST, size: 16}
        ];

        const edgesArray = [
            // --- RDF:TYPE LINKS (Instance -> Class) ---
            // Grey dashed lines defining "What is this?"
            {from: 'mat_7075', to: 'BFO:MaterialEntity', dashes:true, color:'#bbbbbb'},
            {from: 'mat_ti64', to: 'BFO:MaterialEntity', dashes:true, color:'#bbbbbb'},
            
            {from: 'org_alcoa', to: 'BFO:Role', dashes:true, color:'#bbbbbb', label:'bearer_of'},
            {from: 'org_kaiser', to: 'BFO:Role', dashes:true, color:'#bbbbbb', label:'bearer_of'},
            
            {from: 'qual_hard_low', to: 'BFO:Quality', dashes:true, color:'#bbbbbb'},
            {from: 'qual_surf_r', to: 'BFO:Quality', dashes:true, color:'#bbbbbb'},
            
            {from: 'proc_test_01', to: 'IOF:PlannedProcess', dashes:true, color:'#bbbbbb'},
            
            {from: 'spec_ams', to: 'IOF:InfoContent', dashes:true, color:'#bbbbbb'},
            {from: 'data_cost1', to: 'IOF:InfoContent', dashes:true, color:'#bbbbbb'},


            // --- DOMAIN RELATIONSHIPS (RO/BFO/IOF Properties) ---
            
            // Material -> Role (Supplier)
            // "Material is specified input of the supply process" or simplified:
            {from: 'mat_7075', to: 'org_alcoa', label: 'iof:supplied_by', arrows:'to', color:'#444'},
            {from: 'mat_ti64', to: 'org_kaiser', label: 'iof:supplied_by', arrows:'to', color:'#444'},

            // Material -> Quality (The "Issue" is a quality borne by the material)
            {from: 'mat_7075', to: 'qual_hard_low', label: 'bfo:bearer_of', arrows:'to', color:'#444', width: 2},
            {from: 'mat_7075', to: 'qual_surf_r', label: 'bfo:bearer_of', arrows:'to', color:'#444', width: 2},

            // Material -> Cost
            {from: 'mat_7075', to: 'data_cost1', label: 'iof:has_representation', arrows:'to', color:'#444'},

            // Process -> Material (Testing)
            {from: 'proc_test_01', to: 'mat_7075', label: 'iof:has_input', arrows:'to', color:'#444'},
            {from: 'proc_test_01', to: 'qual_hard_low', label: 'iof:has_output', arrows:'to', color:'#444'},

            // Quality -> Spec (Validation)
            // The measured quality violates the specification
            {from: 'qual_hard_low', to: 'spec_ams', label: 'iof:violates', arrows:'to', color:'#444', dashes:[5,5]}
        ];

        // --- SETUP ---
        var container = document.getElementById('mynetwork');
        var data = {
            nodes: new vis.DataSet(nodesArray),
            edges: new vis.DataSet(edgesArray)
        };
        
        var options = {
            nodes: {
                borderWidth: 2,
                shadow: true,
                font: { color: '#333', size: 14 }
            },
            edges: {
                width: 1.5,
                color: { inherit: false },
                font: { align: 'middle', size: 11, strokeWidth: 2, strokeColor: '#ffffff' },
                smooth: { type: 'dynamic' }
            },
            physics: {
                enabled: true,
                barnesHut: {
                    gravitationalConstant: -5000,
                    centralGravity: 0.1,
                    springLength: 200,
                    springConstant: 0.05
                },
                stabilization: { iterations: 1000 }
            }
        };

        var network = new vis.Network(container, data, options);

    </script>
</body>
</html>

