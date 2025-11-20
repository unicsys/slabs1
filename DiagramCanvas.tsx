<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Knowledge Graph Visualization</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: #0a0a0a;
            overflow: hidden;
            color: white;
        }
        
        #canvas-container {
            width: 100vw;
            height: 100vh;
            position: relative;
        }
        
        #graph-canvas {
            width: 100%;
            height: 100%;
            cursor: grab;
            display: block;
        }
        
        #graph-canvas:active {
            cursor: grabbing;
        }
        
        .controls-panel {
            position: absolute;
            top: 20px;
            left: 20px;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.1);
            min-width: 300px;
            max-height: 90vh;
            overflow-y: auto;
        }
        
        .controls-panel h2 {
            font-size: 1.4em;
            margin-bottom: 15px;
            color: #4caf50;
            border-bottom: 2px solid #4caf50;
            padding-bottom: 8px;
        }
        
        .control-section {
            margin-bottom: 20px;
        }
        
        .control-section h3 {
            font-size: 1em;
            margin-bottom: 10px;
            color: #aaa;
            text-transform: uppercase;
            font-weight: 500;
            letter-spacing: 1px;
        }
        
        .stat-item {
            display: flex;
            justify-content: space-between;
            margin: 8px 0;
            padding: 8px 12px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 6px;
            font-size: 0.9em;
        }
        
        .stat-label {
            color: #bbb;
        }
        
        .stat-value {
            color: #4caf50;
            font-weight: bold;
        }
        
        .legend-item {
            display: flex;
            align-items: center;
            margin: 10px 0;
            padding: 10px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 6px;
        }
        
        .legend-color {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            margin-right: 12px;
            box-shadow: 0 0 10px currentColor;
        }
        
        .legend-label {
            flex: 1;
            font-size: 0.9em;
        }
        
        .button {
            width: 100%;
            padding: 10px;
            margin: 8px 0;
            background: linear-gradient(135deg, #4caf50 0%, #45a049 100%);
            border: none;
            border-radius: 6px;
            color: white;
            font-size: 0.9em;
            cursor: pointer;
            transition: all 0.3s;
            font-weight: 600;
        }
        
        .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
        }
        
        .button.secondary {
            background: rgba(255, 255, 255, 0.1);
        }
        
        .info-panel {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.1);
            max-width: 350px;
        }
        
        .info-panel h3 {
            color: #4caf50;
            margin-bottom: 12px;
            font-size: 1.2em;
        }
        
        .info-panel p {
            font-size: 0.9em;
            line-height: 1.6;
            color: #ccc;
            margin-bottom: 10px;
        }
        
        .info-panel .highlight {
            color: #4fc3f7;
            font-weight: bold;
        }
        
        .query-panel {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            padding: 20px 30px;
            border-radius: 12px;
            border: 2px solid #4caf50;
            max-width: 600px;
        }
        
        .query-panel h4 {
            color: #4caf50;
            margin-bottom: 10px;
            font-size: 1.1em;
        }
        
        .query-panel p {
            color: #ccc;
            font-size: 0.95em;
            line-height: 1.5;
        }
        
        .query-path {
            margin-top: 10px;
            padding: 10px;
            background: rgba(76, 175, 80, 0.1);
            border-radius: 6px;
            font-family: 'Courier New', monospace;
            font-size: 0.85em;
            color: #4caf50;
        }
        
        .node-tooltip {
            position: absolute;
            background: rgba(0, 0, 0, 0.95);
            padding: 12px 16px;
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.2);
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s;
            z-index: 1000;
            max-width: 300px;
        }
        
        .node-tooltip.visible {
            opacity: 1;
        }
        
        .node-tooltip h5 {
            color: #4caf50;
            margin-bottom: 8px;
            font-size: 1em;
        }
        
        .node-tooltip p {
            color: #ccc;
            font-size: 0.85em;
            line-height: 1.4;
            margin: 4px 0;
        }
        
        .relationship-badge {
            display: inline-block;
            background: rgba(76, 175, 80, 0.2);
            border: 1px solid #4caf50;
            color: #4caf50;
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 0.75em;
            margin: 2px;
        }
        
        .controls-hint {
            position: absolute;
            bottom: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.9);
            backdrop-filter: blur(10px);
            padding: 12px 20px;
            border-radius: 20px;
            font-size: 0.85em;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
    </style>
</head>
<body>
    <div id="canvas-container">
        <canvas id="graph-canvas"></canvas>
        
        <div class="controls-panel">
            <h2>🕸️ Knowledge Graph</h2>
            
            <div class="control-section">
                <h3>Graph Statistics</h3>
                <div class="stat-item">
                    <span class="stat-label">Total Nodes</span>
                    <span class="stat-value" id="total-nodes">0</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Total Relationships</span>
                    <span class="stat-value" id="total-relationships">0</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Node Types</span>
                    <span class="stat-value" id="node-types">0</span>
                </div>
            </div>
            
            <div class="control-section">
                <h3>Node Types</h3>
                <div class="legend-item">
                    <div class="legend-color" style="background-color: #ff6b6b;"></div>
                    <span class="legend-label">Material</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background-color: #4ecdc4;"></div>
                    <span class="legend-label">Supplier</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background-color: #ffd93d;"></div>
                    <span class="legend-label">Quality Issue</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background-color: #b794f4;"></div>
                    <span class="legend-label">Cost Data</span>
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background-color: #95e1d3;"></div>
                    <span class="legend-label">Specification</span>
                </div>
            </div>
            
            <div class="control-section">
                <h3>Actions</h3>
                <button class="button" onclick="showQueryPath()">🔍 Show Query Path</button>
                <button class="button secondary" onclick="highlightMaterial('7075-T6')">Highlight 7075-T6</button>
                <button class="button secondary" onclick="highlightMaterial('Ti-6Al-4V')">Highlight Ti-6Al-4V</button>
                <button class="button secondary" onclick="resetView()">🔄 Reset View</button>
            </div>
        </div>
        
        <div class="info-panel">
            <h3>💡 Knowledge Graph Approach</h3>
            <p>
                <span class="highlight">Explicit Relationships:</span> Every connection between entities 
                is stored as a typed relationship (e.g., hasSupplier, hasQualityIssue).
            </p>
            <p>
                <span class="highlight">Graph Traversal:</span> Queries follow specific relationship paths 
                to find connected information.
            </p>
            <p>
                <span class="highlight">Structured Knowledge:</span> The ontology defines what types of 
                entities exist and how they can be related.
            </p>
        </div>
        
        <div class="node-tooltip" id="tooltip"></div>
        
        <div class="controls-hint">
            🖱️ Drag to Pan | Scroll to Zoom | Hover Nodes for Details
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        // Knowledge Graph Data Structure
        const knowledgeGraph = {
            nodes: [
                // Materials
                { id: 'mat_7075', type: 'Material', label: '7075-T6', color: 0xff6b6b, x: 0, y: 2, z: 0, 
                  properties: { name: '7075-T6 Aluminum Alloy', category: 'Aluminum', grade: 'T6' }},
                { id: 'mat_ti64', type: 'Material', label: 'Ti-6Al-4V', color: 0xff6b6b, x: 0, y: -2, z: 0,
                  properties: { name: 'Ti-6Al-4V Titanium', category: 'Titanium', grade: 'Grade 5' }},
                
                // Suppliers
                { id: 'sup_alcoa', type: 'Supplier', label: 'Alcoa Inc.', color: 0x4ecdc4, x: -6, y: 3, z: 2,
                  properties: { name: 'Alcoa Inc.', location: 'USA', leadTime: '4-6 weeks' }},
                { id: 'sup_kaiser', type: 'Supplier', label: 'Kaiser Al.', color: 0x4ecdc4, x: -6, y: 1, z: -2,
                  properties: { name: 'Kaiser Aluminum', location: 'USA', leadTime: '3-4 weeks' }},
                
                // Quality Issues
                { id: 'qi_hardness', type: 'QualityIssue', label: 'Hardness Issue', color: 0xffd93d, x: 6, y: 3, z: 2,
                  properties: { type: 'Hardness', measured: '168 HB', spec: '150-165 HB', status: 'Out of Spec' }},
                { id: 'qi_surface', type: 'QualityIssue', label: 'Surface Finish', color: 0xffd93d, x: 6, y: 1, z: -2,
                  properties: { type: 'Surface Roughness', measured: '85 Ra', spec: '≤63 Ra', status: 'Out of Spec' }},
                { id: 'qi_dimension', type: 'QualityIssue', label: 'Dimensional', color: 0xffd93d, x: 6, y: -1, z: 2,
                  properties: { type: 'Diameter', measured: '25.8mm', spec: '25.0±0.5mm', status: 'Out of Tolerance' }},
                
                // Cost Data
                { id: 'cost_7075', type: 'CostData', label: '7075 Cost', color: 0xb794f4, x: -3, y: -3, z: 3,
                  properties: { unitCost: '$8.50/kg', moq: '500 kg', trend: '+12% YoY' }},
                { id: 'cost_ti64', type: 'CostData', label: 'Ti Cost', color: 0xb794f4, x: 3, y: -3, z: 3,
                  properties: { unitCost: '$45.00/kg', moq: '100 kg', trend: '+8% YoY' }},
                
                // Specifications
                { id: 'spec_hardness', type: 'Specification', label: 'Hardness Spec', color: 0x95e1d3, x: 3, y: 4, z: -3,
                  properties: { parameter: 'Brinell Hardness', requirement: '150-165 HB', standard: 'AMS-QQ-A-250' }},
                { id: 'spec_surface', type: 'Specification', label: 'Surface Spec', color: 0x95e1d3, x: 5, y: 2, z: -4,
                  properties: { parameter: 'Surface Roughness', requirement: '≤63 Ra', standard: 'MIL-STD-45662' }},
            ],
            
            relationships: [
                // Material -> Supplier
                { from: 'mat_7075', to: 'sup_alcoa', type: 'SUPPLIED_BY', label: 'supplied by' },
                { from: 'mat_7075', to: 'sup_kaiser', type: 'SUPPLIED_BY', label: 'supplied by' },
                { from: 'mat_ti64', to: 'sup_alcoa', type: 'SUPPLIED_BY', label: 'supplied by' },
                
                // Material -> Quality Issue
                { from: 'mat_7075', to: 'qi_hardness', type: 'HAS_QUALITY_ISSUE', label: 'has quality issue' },
                { from: 'mat_7075', to: 'qi_surface', type: 'HAS_QUALITY_ISSUE', label: 'has quality issue' },
                { from: 'mat_ti64', to: 'qi_dimension', type: 'HAS_QUALITY_ISSUE', label: 'has quality issue' },
                
                // Material -> Cost
                { from: 'mat_7075', to: 'cost_7075', type: 'HAS_COST', label: 'has cost' },
                { from: 'mat_ti64', to: 'cost_ti64', type: 'HAS_COST', label: 'has cost' },
                
                // Quality Issue -> Specification
                { from: 'qi_hardness', to: 'spec_hardness', type: 'VIOLATES_SPEC', label: 'violates' },
                { from: 'qi_surface', to: 'spec_surface', type: 'VIOLATES_SPEC', label: 'violates' },
                
                // Supplier -> Cost (indirect relationship)
                { from: 'sup_alcoa', to: 'cost_7075', type: 'OFFERS_PRICE', label: 'offers price' },
                { from: 'sup_kaiser', to: 'cost_7075', type: 'OFFERS_PRICE', label: 'offers price' },
            ]
        };
        
        // Scene setup
        const container = document.getElementById('canvas-container');
        const canvas = document.getElementById('graph-canvas');
        
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a0a);
        
        // Camera
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.set(0, 5, 15);
        camera.lookAt(0, 0, 0);
        
        // Renderer
        const renderer = new THREE.WebGLRenderer({ 
            canvas: canvas, 
            antialias: true 
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        
        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        
        const pointLight1 = new THREE.PointLight(0xffffff, 0.8);
        pointLight1.position.set(10, 10, 10);
        scene.add(pointLight1);
        
        const pointLight2 = new THREE.PointLight(0x4caf50, 0.6);
        pointLight2.position.set(-10, -10, -10);
        scene.add(pointLight2);
        
        // Create graph visualization
        const nodeMeshes = new Map();
        const edgeMeshes = [];
        const labelSprites = new Map();
        
        // Create nodes
        knowledgeGraph.nodes.forEach(node => {
            // Node sphere
            const geometry = new THREE.SphereGeometry(0.4, 32, 32);
            const material = new THREE.MeshPhongMaterial({
                color: node.color,
                emissive: node.color,
                emissiveIntensity: 0.3,
                shininess: 100
            });
            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.set(node.x, node.y, node.z);
            mesh.userData = node;
            scene.add(mesh);
            nodeMeshes.set(node.id, mesh);
            
            // Glow
            const glowGeometry = new THREE.SphereGeometry(0.6, 32, 32);
            const glowMaterial = new THREE.MeshBasicMaterial({
                color: node.color,
                transparent: true,
                opacity: 0.2
            });
            const glow = new THREE.Mesh(glowGeometry, glowMaterial);
            glow.position.copy(mesh.position);
            scene.add(glow);
            
            // Label
            const canvas2d = document.createElement('canvas');
            const context = canvas2d.getContext('2d');
            canvas2d.width = 256;
            canvas2d.height = 64;
            context.fillStyle = '#ffffff';
            context.font = 'Bold 20px Arial';
            context.textAlign = 'center';
            context.fillText(node.label, 128, 36);
            
            const texture = new THREE.CanvasTexture(canvas2d);
            const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
            const sprite = new THREE.Sprite(spriteMaterial);
            sprite.position.set(node.x, node.y + 0.8, node.z);
            sprite.scale.set(2, 0.5, 1);
            scene.add(sprite);
            labelSprites.set(node.id, sprite);
        });
        
        // Create edges
        knowledgeGraph.relationships.forEach(rel => {
            const fromNode = knowledgeGraph.nodes.find(n => n.id === rel.from);
            const toNode = knowledgeGraph.nodes.find(n => n.id === rel.to);
            
            if (fromNode && toNode) {
                // Create curved line
                const start = new THREE.Vector3(fromNode.x, fromNode.y, fromNode.z);
                const end = new THREE.Vector3(toNode.x, toNode.y, toNode.z);
                const mid = new THREE.Vector3().lerpVectors(start, end, 0.5);
                mid.y += 0.5; // Curve upward
                
                const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
                const points = curve.getPoints(50);
                const geometry = new THREE.BufferGeometry().setFromPoints(points);
                
                const material = new THREE.LineBasicMaterial({
                    color: 0x4caf50,
                    transparent: true,
                    opacity: 0.6,
                    linewidth: 2
                });
                
                const line = new THREE.Line(geometry, material);
                line.userData = rel;
                scene.add(line);
                edgeMeshes.push(line);
                
                // Arrow at end
                const direction = new THREE.Vector3().subVectors(end, mid).normalize();
                const arrowGeometry = new THREE.ConeGeometry(0.1, 0.3, 8);
                const arrowMaterial = new THREE.MeshBasicMaterial({ color: 0x4caf50 });
                const arrow = new THREE.Mesh(arrowGeometry, arrowMaterial);
                arrow.position.copy(end);
                arrow.quaternion.setFromUnitVectors(
                    new THREE.Vector3(0, 1, 0),
                    direction
                );
                scene.add(arrow);
                
                // Edge label
                const edgeCanvas = document.createElement('canvas');
                const edgeContext = edgeCanvas.getContext('2d');
                edgeCanvas.width = 256;
                edgeCanvas.height = 64;
                edgeContext.fillStyle = '#4caf50';
                edgeContext.font = 'Bold 16px Arial';
                edgeContext.textAlign = 'center';
                edgeContext.fillText(rel.label, 128, 36);
                
                const edgeTexture = new THREE.CanvasTexture(edgeCanvas);
                const edgeSpriteMaterial = new THREE.SpriteMaterial({ map: edgeTexture });
                const edgeSprite = new THREE.Sprite(edgeSpriteMaterial);
                edgeSprite.position.copy(mid);
                edgeSprite.scale.set(1.5, 0.4, 1);
                scene.add(edgeSprite);
            }
        });
        
        // Update stats
        document.getElementById('total-nodes').textContent = knowledgeGraph.nodes.length;
        document.getElementById('total-relationships').textContent = knowledgeGraph.relationships.length;
        const nodeTypes = new Set(knowledgeGraph.nodes.map(n => n.type));
        document.getElementById('node-types').textContent = nodeTypes.size;
        
        // Mouse interaction for tooltips
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        const tooltip = document.getElementById('tooltip');
        
        canvas.addEventListener('mousemove', (event) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(Array.from(nodeMeshes.values()));
            
            if (intersects.length > 0) {
                const node = intersects[0].object.userData;
                tooltip.innerHTML = `
                    <h5>${node.label}</h5>
                    <p><strong>Type:</strong> ${node.type}</p>
                    ${Object.entries(node.properties).map(([key, value]) => 
                        `<p><strong>${key}:</strong> ${value}</p>`
                    ).join('')}
                `;
                tooltip.style.left = event.clientX + 20 + 'px';
                tooltip.style.top = event.clientY + 20 + 'px';
                tooltip.classList.add('visible');
            } else {
                tooltip.classList.remove('visible');
            }
        });
        
        // Show query path
        function showQueryPath() {
            // Reset all colors
            nodeMeshes.forEach(mesh => {
                const originalColor = new THREE.Color(mesh.userData.color);
                mesh.material.color.copy(originalColor);
                mesh.material.emissive.copy(originalColor);
                mesh.material.emissiveIntensity = 0.3;
            });
            
            edgeMeshes.forEach(line => {
                line.material.color.set(0x4caf50);
                line.material.opacity = 0.6;
            });
            
            // Query: Find suppliers and costs for 7075-T6
            const path = ['mat_7075', 'sup_alcoa', 'cost_7075'];
            
            // Highlight path
            path.forEach(nodeId => {
                const mesh = nodeMeshes.get(nodeId);
                if (mesh) {
                    mesh.material.emissiveIntensity = 0.8;
                    mesh.material.color.set(0xffeb3b);
                }
            });
            
            // Highlight edges in path
            edgeMeshes.forEach(line => {
                const rel = line.userData;
                if ((rel.from === 'mat_7075' && rel.to === 'sup_alcoa') ||
                    (rel.from === 'sup_alcoa' && rel.to === 'cost_7075')) {
                    line.material.color.set(0xffeb3b);
                    line.material.opacity = 1;
                }
            });
            
            // Show query panel
            const queryPanel = document.createElement('div');
            queryPanel.className = 'query-panel';
            queryPanel.innerHTML = `
                <h4>🔍 Query Path Visualization</h4>
                <p>Query: "Find suppliers and costs for 7075-T6 aluminum"</p>
                <div class="query-path">
                    Material[7075-T6] → SUPPLIED_BY → Supplier[Alcoa] → OFFERS_PRICE → Cost[$8.50/kg]
                </div>
            `;
            document.body.appendChild(queryPanel);
            
            setTimeout(() => {
                queryPanel.remove();
                resetView();
            }, 5000);
        }
        
        // Highlight material
        function highlightMaterial(materialLabel) {
            // Reset all
            nodeMeshes.forEach(mesh => {
                const originalColor = new THREE.Color(mesh.userData.color);
                mesh.material.color.copy(originalColor);
                mesh.material.emissive.copy(originalColor);
                mesh.material.emissiveIntensity = 0.3;
            });
            
            edgeMeshes.forEach(line => {
                line.material.opacity = 0.2;
            });
            
            // Find material node
            const materialNode = knowledgeGraph.nodes.find(n => n.label === materialLabel);
            if (!materialNode) return;
            
            // Highlight material
            const materialMesh = nodeMeshes.get(materialNode.id);
            materialMesh.material.emissiveIntensity = 0.8;
            
            // Highlight connected nodes and edges
            knowledgeGraph.relationships.forEach(rel => {
                if (rel.from === materialNode.id) {
                    const targetMesh = nodeMeshes.get(rel.to);
                    if (targetMesh) {
                        targetMesh.material.emissiveIntensity = 0.6;
                    }
                    
                    // Highlight edge
                    const edge = edgeMeshes.find(e => e.userData.from === rel.from && e.userData.to === rel.to);
                    if (edge) {
                        edge.material.opacity = 1;
                    }
                }
            });
        }
        
        // Reset view
        function resetView() {
            nodeMeshes.forEach(mesh => {
                const originalColor = new THREE.Color(mesh.userData.color);
                mesh.material.color.copy(originalColor);
                mesh.material.emissive.copy(originalColor);
                mesh.material.emissiveIntensity = 0.3;
            });
            
            edgeMeshes.forEach(line => {
                line.material.color.set(0x4caf50);
                line.material.opacity = 0.6;
            });
            
            camera.position.set(0, 5, 15);
            camera.lookAt(0, 0, 0);
        }
        
        // Camera controls
        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };
        
        canvas.addEventListener('mousedown', (e) => {
            isDragging = true;
            previousMousePosition = { x: e.clientX, y: e.clientY };
        });
        
        canvas.addEventListener('mousemove', (e) => {
            if (isDragging) {
                const deltaX = e.clientX - previousMousePosition.x;
                const deltaY = e.clientY - previousMousePosition.y;
                
                const radius = Math.sqrt(
                    camera.position.x ** 2 + 
                    camera.position.z ** 2
                );
                const angle = Math.atan2(camera.position.z, camera.position.x);
                const newAngle = angle + deltaX * 0.005;
                
                camera.position.x = radius * Math.cos(newAngle);
                camera.position.z = radius * Math.sin(newAngle);
                camera.position.y -= deltaY * 0.05;
                camera.lookAt(scene.position);
                
                previousMousePosition = { x: e.clientX, y: e.clientY };
            }
        });
        
        canvas.addEventListener('mouseup', () => {
            isDragging = false;
        });
        
        canvas.addEventListener('wheel', (e) => {
            e.preventDefault();
            camera.position.multiplyScalar(e.deltaY > 0 ? 1.1 : 0.9);
            const distance = camera.position.length();
            if (distance < 5) camera.position.setLength(5);
            if (distance > 50) camera.position.setLength(50);
        });
        
        // Animation
        let time = 0;
        function animate() {
            requestAnimationFrame(animate);
            
            time += 0.01;
            
            // Subtle node pulse
            nodeMeshes.forEach(mesh => {
                mesh.rotation.y += 0.01;
                const scale = 1 + Math.sin(time + mesh.position.x) * 0.05;
                mesh.scale.setScalar(scale);
            });
            
            // Labels face camera
            labelSprites.forEach(sprite => {
                sprite.lookAt(camera.position);
            });
            
            renderer.render(scene, camera);
        }
        
        animate();
        
        // Handle resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    </script>
</body>
</html>


