var graph3d;
layout.registerComponent( 'graphComponent', function(container, componentState){
    container.getElement().html('<div class="" id="graph">TEST</div>');
    container.on('open', function() {
        var data = new vis.DataSet();
        var counter = 0;
        var steps = 20;
        var axisMax = 100;
        var axisStep = axisMax / steps;
        for (var x = -axisMax; x < axisMax; x+=axisStep) {
            for (var y = -axisMax; y < axisMax; y+=axisStep) {
                var value = Math.sin(x) + Math.tan(x * y);
                data.add({id:counter++,x:x,y:y,z:value,style:value});
            }
        }
        var options = {
            width:  '100%',
            height: '100%',
            style: 'surface',
            showPerspective: true,
            showGrid: true,
            showShadow: false,
            keepAspectRatio: true,
            verticalRatio: 0.5
        };
        var element = $('#graph')[0];
        graph3d = new vis.Graph3d(element, data, options);
    });
    container.on('show', function() {
        graph3d.height = $('#graph').height();
        graph3d.width = $('#graph').width();
        graph3d.redraw();
    });
    container.on('resize', function() {
        graph3d.height = $('#graph').height();
        graph3d.width = $('#graph').width();
        graph3d.redraw();
    });
});