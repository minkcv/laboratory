var substructure = {
    div: null,
    width: null,
    height: null,
    lines: null,
}
substructure.init = function() {
    this.div = document.getElementById('three-substructure');
    this.width = this.div.clientWidth;
    this.height = this.div.clientHeight;
    this.renderer = new THREE.WebGLRenderer({ alpha: true});
    this.renderer.setSize(this.width, this.height);
    this.div.appendChild(this.renderer.domElement);
    this.scene = new THREE.Scene();
    var scale = 20;
    this.camera = new THREE.OrthographicCamera(
        this.width / -scale, this.width / scale, 
        this.height / scale, this.height / -scale, 0, 100);
    this.scene.add(this.camera);
    this.camera.translateZ(20);
}

substructure.createScene = function(seed) {
    this.clearScene();
    var seeds = seed.split('-');
    var radius = 5
    var detail = parseInt(seeds[1], 16) % 4;
    var color = parseInt(seeds[2], 16);
    var boxGeom = new THREE.TetrahedronGeometry(radius, detail);
    var wgeom = new THREE.WireframeGeometry(boxGeom);
    var lines = new THREE.LineSegments(wgeom);
    lines.material.color = {r: 1, g: 1, b: 1};
    lines.material.depthTest = false;
    lines.material.opacity = 0.5;
    lines.material.transparent = true;
    this.lines = lines;
    this.scene.add(this.lines);
}

substructure.render = function() {
    requestAnimationFrame( substructure.render );
    if (substructure.lines) {
        substructure.lines.rotateX(0.003);
        substructure.lines.rotateY(0.002);
        substructure.renderer.render( substructure.scene, substructure.camera );
    }
}
substructure.clearScene = function() {
    while(this.scene.children.length > 0) {
        this.scene.remove(this.scene.children[0]);
    }
}

layout.registerComponent( 'substructureComponent', function(container, componentState){
    container.getElement().html(`<pre id='substructure-name'></pre><div id='three-substructure'></div>`);
    container.on('open', function(){
        substructure.init();
        substructure.render();
    });
});
