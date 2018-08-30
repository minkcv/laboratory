var superstructure = {
    div: null,
    width: null,
    height: null,
    currentNodeId: 0,
    lineMat: null,
    camera: null,
    controls: null
}
superstructure.init = function() {
    this.div = document.getElementById('three-superstructure');
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer({alpha: true});
    this.resize(100, 100);
    this.lineMat = new THREE.LineBasicMaterial({color: 0xFFFFFF});
}

superstructure.resize = function(width, height) {
    this.width = width;
    this.height = height;
    this.renderer.setSize(this.width, this.height);
    if (this.div.firstChild)
        this.div.removeChild(this.div.firstChild);
    this.div.appendChild(this.renderer.domElement);
    var scale = 20;
    this.camera = new THREE.OrthographicCamera(
        this.width / -scale, this.width / scale, 
        this.height / scale, this.height / -scale, -8000, 8000);
    this.camera.position.set( 100, 100, 100 );
    this.scene.add(this.camera);
    this.controls = new THREE.OrbitControls( this.camera, this.div );
    this.controls.autoRotate = true;
    this.controls.enableKeys = false;
    this.controls.screenSpacePanning = true;
    this.controls.dollyOut(3);
    this.controls.update();
}

superstructure.generate = function(seed, iterations) {
    this.currentNodeId = 1;
    var graph = [];
    var startNode = this.createNode(seed);
    var startLayer = [startNode];
    graph.push(startLayer);
    for (var i = 0; i < iterations; i++) {
        this.advance(graph);
    }
    return graph;
}

superstructure.createNode = function(data) {
    var node = {};
    node.data = data;
    node.id = this.currentNodeId;
    node.next = [];
    node.prev = [];
    this.currentNodeId++;
    return node;
}

superstructure.advance = function(graph) {
    var currentLayer = graph[graph.length - 1];
    var newLayer = [];
    currentLayer.forEach(function(node) {
        var nextStates = superstructure.algorithm(node.data);
        nextStates.forEach(function (data) {
            var existing = newLayer.find(n => n.data == data);
            if (existing) {
                node.next.push(existing.id);
                existing.prev.push(node.id)
            }
            else {
                var newNode = superstructure.createNode(data);
                newNode.prev.push(node.id);
                node.next.push(newNode.id);
                newLayer.push(newNode);
            }
        });
    });
    graph.push(newLayer);
}

superstructure.algorithm = function(data) {
    var nextStates = [];
    switch(data)
    {
        case 0:
            nextStates.push(2);
            nextStates.push(3);
            nextStates.push(Math.floor(Math.random() * 10));
            break;
        case 1:
            nextStates.push(4);
            break;
        case 2:
            nextStates.push(Math.floor(Math.random() * 10));
            nextStates.push(1);
            break;
        case 3:
            nextStates.push(1);
            break;
        case 4:
            nextStates.push(Math.floor(Math.random() * 10));
            break;
        default:
            nextStates.push(1);
    }
    if (data > 10)
        nextStates.push(3);
    return nextStates;
}

superstructure.createScene = function(seed, subseed) {
    this.clearScene();
    var light = new THREE.DirectionalLight(0xffffff, 1);
    light.target.position.set(-0.5, 0, -0.8);
    this.scene.add(light);
    this.scene.add(light.target);
    var light2 = new THREE.DirectionalLight(0xffffff, 1);
    light2.target.position.set(0.5, 0, 0.8);
    this.scene.add(light2);
    this.scene.add(light2.target);
    var subseeds = subseed.split('-');
    var iterations = 100;
    iterations = parseInt(iterations);
    var graph = this.generate(parseInt(seed, 16), iterations);
    var ySpacing = 20;
    var ids = [];
    for (var i in graph) {
        var y = i * ySpacing;
        var numNodes = graph[i].length;
        var xSpacing = 10 * numNodes;
        var angle = (2 * Math.PI) / numNodes;
        for (var j in graph[i]) {
            var node = graph[i][j];
            var id = node.id;
            var radius = 5;
            var detail = parseInt(subseeds[1], 16) % 4;
            var boxGeom = new THREE.TetrahedronGeometry(radius, detail);
            var wgeom = new THREE.WireframeGeometry(boxGeom);
            var lines = new THREE.LineSegments(wgeom);
            lines.material.depthTest = false;
            lines.material.opacity = 0.8;
            lines.material.transparent = true;
            var color = {r: 1, g: 1, b: 1};
            if (node.prev.length > node.next.length)
                color = {r: 0.8, g: 0.2, b: 0.1};
            else if (node.prev.length < node.next.length)
                color = {r: 0.7, g: 0.2, b: 0.9};
            else if (node.prev.length == node.next.length)
                color = {r: 0.1, g: 0.5, b: 0.9};
            
            lines.material.color = color;
            lines.rotateY(angle * j);
            if (graph[i].length > 1)
                lines.translateX(xSpacing);
            lines.translateY(-y);
            lines.name = id;
            lines.prev = node.prev;
            lines.next = node.next;
            ids.push(id);
            this.scene.add(lines);
        }
    }

    for (var i in ids) {
        var box = this.scene.getObjectByName(ids[i]);
        if(box === undefined)
            continue;
        for (var p in box.prev) {
            var prevBox = this.scene.getObjectByName(box.prev[p]);
            if (prevBox === undefined)
                continue;
            var lineGeom = new THREE.Geometry();
            lineGeom.vertices.push(box.position);
            lineGeom.vertices.push(prevBox.position);
            var line = new THREE.Line(lineGeom, this.lineMat);
            this.scene.add(line);
        }
        for (var n in box.next) {
            var nextBox = this.scene.getObjectByName(box.next[n]);
            if (nextBox === undefined)
                continue;
            var lineGeom = new THREE.Geometry();
            lineGeom.vertices.push(box.position);
            lineGeom.vertices.push(nextBox.position);
            var line = new THREE.Line(lineGeom, this.lineMat);
            this.scene.add(line);
        }
    }
}

superstructure.render = function() {
    requestAnimationFrame( superstructure.render );
    superstructure.controls.update();
    superstructure.renderer.render( superstructure.scene, superstructure.camera );
}
superstructure.clearScene = function() {
    while(this.scene.children.length > 0) {
        this.scene.remove(this.scene.children[0]);
    }
}

layout.registerComponent('superstructureComponent', function(container, componentState){
    container.getElement().html(`<pre id='superstructure-name'></pre><div id='three-superstructure'></div>`);
    container.on('open', function() {
        superstructure.init();
        superstructure.render();
    });
    container.on('resize', function(){
        superstructure.resize(container.width, container.height);
    });
    container.on('show', function(){
        superstructure.resize(container.width, container.height);
    });
});