layout.registerComponent( 'testComponent', function(container, componentState){
    container.getElement().html('<div class="">TEST</div>');
});

layout.init();

$(function() {
    $('#code-file').html(codeFiles[0]);
    $('#code-file').each(function(i, block) {
        hljs.highlightBlock(block);
    });
    var node = {name: '1148-4289-8414', parent: {name: '388fb138'}};
    logInfo('Selected internal node ' + node.name);
    logInfo('Computing substructure');
    logInfo('Finished');
    logInfo('Node conforms to expected substructure');
    substructure.createScene(node.name);
    superstructure.createScene(node.parent.name, node.name);
    $('#substructure-name').html(node.name);
    $('#superstructure-name').html(node.parent.name + ' - ' + node.name);
    var nodeInfo = node.name.split('-');
    var complexity = parseInt(nodeInfo[0], 16) % 4;
    var order = parseInt(nodeInfo[1], 16) % 4;
    var passable = parseInt(nodeInfo[2], 16) % 2 == 0 ? 'YES' : 'NO';
    $('#node-name').html(node.name);
    $('#node-complexity').html(complexity);
    $('#node-order').html(order);
    $('#node-passable').html(passable);
    superstructure.controls.panUp(-250);
    superstructure.camera.zoom = 0.2;
    superstructure.controls.dollyOut(1);
});