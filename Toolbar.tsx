<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vector Database 3D - Realistic Scale</title>
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
        }
        
        #canvas-container {
            width: 100vw;
            height: 100vh;
            position: relative;
        }
        
        #vector-canvas {
            width: 100%;
            height: 100%;
            cursor: grab;
            display: block;
        }
        
        #vector-canvas:active {
            cursor: grabbing;
        }
        
        .controls-panel {
            position: absolute;
            top: 20px;
            left: 20px;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(10px);
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: white;
            min-width: 280px;
            max-height: 90vh;
            overflow-y: auto;
        }
        
        .controls-panel h2 {
            font-size: 1.3em;
            margin-bottom: 15px;
            color: #667eea;
            border-bottom: 2px solid #667eea;
            padding-bottom: 8px;
        }
        
        .control-group {
            margin-bottom: 20px;
        }
        
        .control-group h3 {
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
            color: #4fc3f7;
            font-weight: bold;
        }
        
        .cluster-item {
            display: flex;
            align-items: center;
            margin: 10px 0;
            padding: 10px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .cluster-item:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateX(5px);
        }
        
        .cluster-color {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            margin-right: 12px;
            box-shadow: 0 0 10px currentColor;
        }
        
        .cluster-info {
            flex: 1;
        }
        
        .cluster-name {
            font-weight: bold;
            font-size: 0.9em;
        }
        
        .cluster-count {
            font-size: 0.8em;
            color: #888;
        }
        
        .button {
            width: 100%;
            padding: 10px;
            margin: 8px 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
        }
        
        .button:active {
            transform: translateY(0);
        }
        
        .button.secondary {
            background: rgba(255, 255, 255, 0.1);
        }
        
        .toggle-button {
            padding: 8px 12px;
            margin: 5px 0;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 6px;
            color: white;
            font-size: 0.85em;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .toggle-button.active {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-color: #667eea;
        }
        
        .info-panel {
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(10px);
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: white;
            max-width: 320px;
        }
        
        .info-panel h3 {
            color: #4caf50;
            margin-bottom: 12px;
            font-size: 1.1em;
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
        
        .controls-hint {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(10px);
            padding: 15px 25px;
            border-radius: 25px;
            color: white;
            font-size: 0.9em;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .query-indicator {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 235, 59, 0.1);
            border: 2px solid #ffeb3b;
            padding: 20px 30px;
            border-radius: 12px;
            color: #ffeb3b;
            font-weight: bold;
            font-size: 1.2em;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.5s;
        }
        
        .query-indicator.active {
            opacity: 1;
        }
        
        .slider-container {
            margin: 15px 0;
        }
        
        .slider-label {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            font-size: 0.9em;
            color: #bbb;
        }
        
        input[type="range"] {
            width: 100%;
            height: 6px;
            border-radius: 3px;
            background: rgba(255, 255, 255, 0.1);
            outline: none;
            -webkit-appearance: none;
        }
        
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #667eea;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
        }
        
        input[type="range"]::-moz-range-thumb {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #667eea;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
            border: none;
        }
        
        .loading {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
            font-size: 1.5em;
            z-index: 1000;
        }
    </style>
</head>
<body>
    <div id="canvas-container">
        <canvas id="vector-canvas"></canvas>
        
        <div class="controls-panel">
            <h2>Vector Database</h2>
            
            <div class="control-group">
                <h3>Statistics</h3>
                <div class="stat-item">
                    <span class="stat-label">Total Vectors</span>
                    <span class="stat-value" id="total-vectors">0</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Visible Vectors</span>
                    <span class="stat-value" id="visible-vectors">0</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Dimensions</span>
                    <span class="stat-value">768</span>
                </div>
                <div class="stat-item">
                    <span class="stat-label">Clusters</span>
                    <span class="stat-value" id="total-clusters">0</span>
                </div>
            </div>
            
            <div class="control-group">
                <h3>Material Clusters</h3>
                <div id="clusters-list"></div>
            </div>
            
            <div class="control-group">
                <h3>View Controls</h3>
                <div class="slider-container">
                    <div class="slider-label">
                        <span>Point Size</span>
                        <span id="point-size-value">0.03</span>
                    </div>
                    <input type="range" id="point-size" min="0.01" max="0.1" step="0.01" value="0.03">
                </div>
                
                <div class="slider-container">
                    <div class="slider-label">
                        <span>Point Density</span>
                        <span id="density-value">100%</span>
                    </div>
                    <input type="range" id="density" min="10" max="100" step="10" value="100">
                </div>
                
                <button class="button" onclick="simulateQuery()">🔍 Simulate Query</button>
                <button class="button secondary" onclick="resetView()">🔄 Reset View</button>
                <button class="button secondary" onclick="toggleRotation()">⏯️ <span id="rotation-text">Pause Rotation</span></button>
            </div>
        </div>
        
        <div class="info-panel">
            <h3>💡 Realistic Scale</h3>
            <p>
                This visualization shows <span class="highlight" id="sample-count">2,000</span> vectors 
                representing a sample of a much larger database.
            </p>
            <p>
                In production, vector databases can contain <span class="highlight">millions to billions</span> 
                of vectors, all indexed for fast similarity search.
            </p>
            <p>
                Each cluster represents documents about specific materials (7075-T6, Ti-6Al-4V, etc.) 
                from multiple data sources.
            </p>
        </div>
        
        <div class="controls-hint">
            🖱️ Drag to Rotate | Scroll to Zoom | Click Clusters to Highlight
        </div>
        
        <div class="query-indicator" id="query-indicator">
            🔍 Finding Similar Vectors...
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script>
        // Configuration
        const config = {
            totalVectors: 2000,
            visibleVectors: 2000,
            autoRotate: true,
            pointSize: 0.03
        };
        
        // Scene setup
        const container = document.getElementById('canvas-container');
        const canvas = document.getElementById('vector-canvas');
        
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x0a0a0a);
        scene.fog = new THREE.FogExp2(0x0a0a0a, 0.015);
        
        // Camera
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.set(25, 20, 25);
        camera.lookAt(0, 0, 0);
        
        // Renderer
        const renderer = new THREE.WebGLRenderer({ 
            canvas: canvas, 
            antialias: true 
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        
        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
        scene.add(ambientLight);
        
        const pointLight1 = new THREE.PointLight(0x667eea, 1, 100);
        pointLight1.position.set(20, 20, 20);
        scene.add(pointLight1);
        
        const pointLight2 = new THREE.PointLight(0x4fc3f7, 0.8, 100);
        pointLight2.position.set(-20, -20, -20);
        scene.add(pointLight2);
        
        // Grid
        const gridHelper = new THREE.GridHelper(50, 50, 0x333333, 0x1a1a1a);
        scene.add(gridHelper);
        
        // Material clusters configuration
        const clusters = [
            { 
                name: '7075-T6 Aluminum',
                center: { x: 8, y: 3, z: 5 },
                spread: 4,
                color: 0xff6b6b,
                count: 500
            },
            { 
                name: 'Ti-6Al-4V Titanium',
                center: { x: -6, y: 5, z: -8 },
                spread: 3.5,
                color: 0x4ecdc4,
                count: 450
            },
            { 
                name: '17-4 PH Stainless',
                center: { x: 5, y: -4, z: -6 },
                spread: 3,
                color: 0xffd93d,
                count: 350
            },
            { 
                name: 'Inconel 718',
                center: { x: -8, y: -3, z: 7 },
                spread: 3.5,
                color: 0x6BCF7F,
                count: 400
            },
            { 
                name: '2024-T3 Aluminum',
                center: { x: 0, y: 8, z: 0 },
                spread: 3,
                color: 0xB794F4,
                count: 300
            }
        ];
        
        let allPoints = [];
        let pointsMesh;
        let queryPoint = null;
        let connectionLines = [];
        
        // Generate points for all clusters
        function generateVectorPoints() {
            const positions = [];
            const colors = [];
            const clusterIds = [];
            
            clusters.forEach((cluster, clusterIndex) => {
                for (let i = 0; i < cluster.count; i++) {
                    // Gaussian distribution around cluster center
                    const x = cluster.center.x + (Math.random() - 0.5) * 2 * cluster.spread * Math.sqrt(-2 * Math.log(Math.random()));
                    const y = cluster.center.y + (Math.random() - 0.5) * 2 * cluster.spread * Math.sqrt(-2 * Math.log(Math.random()));
                    const z = cluster.center.z + (Math.random() - 0.5) * 2 * cluster.spread * Math.sqrt(-2 * Math.log(Math.random()));
                    
                    positions.push(x, y, z);
                    
                    const color = new THREE.Color(cluster.color);
                    colors.push(color.r, color.g, color.b);
                    
                    clusterIds.push(clusterIndex);
                    
                    allPoints.push({ x, y, z, color: cluster.color, cluster: clusterIndex });
                }
            });
            
            return { positions, colors, clusterIds };
        }
        
        // Create points mesh
        function createPointsMesh() {
            const { positions, colors } = generateVectorPoints();
            
            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
            geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
            
            const material = new THREE.PointsMaterial({
                size: config.pointSize,
                vertexColors: true,
                transparent: true,
                opacity: 0.8,
                sizeAttenuation: true,
                blending: THREE.AdditiveBlending
            });
            
            pointsMesh = new THREE.Points(geometry, material);
            scene.add(pointsMesh);
            
            // Update UI
            document.getElementById('total-vectors').textContent = allPoints.length.toLocaleString();
            document.getElementById('visible-vectors').textContent = allPoints.length.toLocaleString();
            document.getElementById('total-clusters').textContent = clusters.length;
            document.getElementById('sample-count').textContent = allPoints.length.toLocaleString();
            
            // Create cluster list
            const clustersList = document.getElementById('clusters-list');
            clustersList.innerHTML = '';
            clusters.forEach((cluster, index) => {
                const div = document.createElement('div');
                div.className = 'cluster-item';
                div.innerHTML = `
                    <div class="cluster-color" style="background-color: #${cluster.color.toString(16).padStart(6, '0')}"></div>
                    <div class="cluster-info">
                        <div class="cluster-name">${cluster.name}</div>
                        <div class="cluster-count">${cluster.count.toLocaleString()} vectors</div>
                    </div>
                `;
                div.onclick = () => highlightCluster(index);
                clustersList.appendChild(div);
            });
        }
        
        // Highlight cluster
        function highlightCluster(clusterIndex) {
            const colors = pointsMesh.geometry.attributes.color.array;
            
            allPoints.forEach((point, index) => {
                const baseIndex = index * 3;
                const color = new THREE.Color(point.color);
                
                if (point.cluster === clusterIndex) {
                    colors[baseIndex] = color.r;
                    colors[baseIndex + 1] = color.g;
                    colors[baseIndex + 2] = color.b;
                } else {
                    colors[baseIndex] = color.r * 0.2;
                    colors[baseIndex + 1] = color.g * 0.2;
                    colors[baseIndex + 2] = color.b * 0.2;
                }
            });
            
            pointsMesh.geometry.attributes.color.needsUpdate = true;
            
            // Reset after 3 seconds
            setTimeout(() => {
                allPoints.forEach((point, index) => {
                    const baseIndex = index * 3;
                    const color = new THREE.Color(point.color);
                    colors[baseIndex] = color.r;
                    colors[baseIndex + 1] = color.g;
                    colors[baseIndex + 2] = color.b;
                });
                pointsMesh.geometry.attributes.color.needsUpdate = true;
            }, 3000);
        }
        
        // Simulate query
        function simulateQuery() {
            // Remove old query point and lines
            if (queryPoint) {
                scene.remove(queryPoint);
            }
            connectionLines.forEach(line => scene.remove(line));
            connectionLines = [];
            
            // Create query point near first cluster
            const cluster = clusters[0];
            const qx = cluster.center.x + (Math.random() - 0.5) * 2;
            const qy = cluster.center.y + (Math.random() - 0.5) * 2;
            const qz = cluster.center.z + (Math.random() - 0.5) * 2;
            
            const queryGeometry = new THREE.SphereGeometry(0.3, 32, 32);
            const queryMaterial = new THREE.MeshPhongMaterial({
                color: 0xffeb3b,
                emissive: 0xffeb3b,
                emissiveIntensity: 0.5,
                transparent: true,
                opacity: 0.9
            });
            queryPoint = new THREE.Mesh(queryGeometry, queryMaterial);
            queryPoint.position.set(qx, qy, qz);
            scene.add(queryPoint);
            
            // Show indicator
            const indicator = document.getElementById('query-indicator');
            indicator.classList.add('active');
            
            // Find nearest points
            const distances = allPoints.map((point, index) => ({
                index,
                distance: Math.sqrt(
                    Math.pow(point.x - qx, 2) +
                    Math.pow(point.y - qy, 2) +
                    Math.pow(point.z - qz, 2)
                )
            }));
            
            distances.sort((a, b) => a.distance - b.distance);
            
            // Draw lines to top 10 nearest
            for (let i = 0; i < 10; i++) {
                const point = allPoints[distances[i].index];
                const points = [
                    new THREE.Vector3(qx, qy, qz),
                    new THREE.Vector3(point.x, point.y, point.z)
                ];
                
                const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
                const lineMaterial = new THREE.LineBasicMaterial({
                    color: 0xffeb3b,
                    transparent: true,
                    opacity: 0.6 - (i * 0.05)
                });
                
                const line = new THREE.Line(lineGeometry, lineMaterial);
                scene.add(line);
                connectionLines.push(line);
            }
            
            // Hide indicator after 2 seconds
            setTimeout(() => {
                indicator.classList.remove('active');
            }, 2000);
        }
        
        // Reset view
        function resetView() {
            camera.position.set(25, 20, 25);
            camera.lookAt(0, 0, 0);
            
            if (queryPoint) {
                scene.remove(queryPoint);
                queryPoint = null;
            }
            connectionLines.forEach(line => scene.remove(line));
            connectionLines = [];
        }
        
        // Toggle rotation
        function toggleRotation() {
            config.autoRotate = !config.autoRotate;
            document.getElementById('rotation-text').textContent = 
                config.autoRotate ? 'Pause Rotation' : 'Resume Rotation';
        }
        
        // Point size control
        document.getElementById('point-size').addEventListener('input', (e) => {
            const value = parseFloat(e.target.value);
            config.pointSize = value;
            pointsMesh.material.size = value;
            document.getElementById('point-size-value').textContent = value.toFixed(2);
        });
        
        // Density control
        document.getElementById('density').addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            const opacity = value / 100;
            pointsMesh.material.opacity = opacity * 0.8;
            document.getElementById('density-value').textContent = value + '%';
        });
        
        // Mouse interaction
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
                camera.position.y -= deltaY * 0.1;
                camera.lookAt(scene.position);
                
                previousMousePosition = { x: e.clientX, y: e.clientY };
            }
        });
        
        canvas.addEventListener('mouseup', () => {
            isDragging = false;
        });
        
        canvas.addEventListener('wheel', (e) => {
            e.preventDefault();
            const zoomSpeed = 0.1;
            const direction = e.deltaY > 0 ? 1 : -1;
            
            camera.position.multiplyScalar(1 + direction * zoomSpeed);
            
            const distance = camera.position.length();
            if (distance < 10) {
                camera.position.setLength(10);
            } else if (distance > 100) {
                camera.position.setLength(100);
            }
        });
        
        // Animation loop
        let time = 0;
        function animate() {
            requestAnimationFrame(animate);
            
            time += 0.003;
            
            // Auto rotation
            if (config.autoRotate && !isDragging) {
                const radius = Math.sqrt(
                    camera.position.x ** 2 + 
                    camera.position.z ** 2
                );
                const angle = Math.atan2(camera.position.z, camera.position.x);
                const newAngle = angle + 0.002;
                
                camera.position.x = radius * Math.cos(newAngle);
                camera.position.z = radius * Math.sin(newAngle);
                camera.lookAt(scene.position);
            }
            
            // Subtle point animation
            if (pointsMesh) {
                pointsMesh.rotation.y = Math.sin(time * 0.5) * 0.02;
            }
            
            // Animate query point
            if (queryPoint) {
                queryPoint.rotation.y += 0.02;
                queryPoint.scale.setScalar(1 + Math.sin(time * 3) * 0.1);
            }
            
            renderer.render(scene, camera);
        }
        
        // Handle resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
        
        // Initialize
        createPointsMesh();
        animate();
    </script>
</body>
</html>
