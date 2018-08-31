var timeline;

layout.registerComponent( 'timelineComponent', function(container, componentState){
    container.getElement().html('<div id="timeline"></div>');
    container.on('open', function() {
        var div = $('#timeline')[0];
        var items = new vis.DataSet([
            {id: 1, content: 'Phase A', start: '3013-04-20', end: '3013-06-09', className: 'timeline-item', group: 1},
            {id: 2, content: 'Phase B', start: '3013-07-14', end: '3013-08-09', className: 'timeline-item', group: 1},
            {id: 3, content: 'Phase F', start: '3013-06-18', end: '3013-07-20', className: 'timeline-item', group: 2},
            {id: 4, content: 'Phase C', start: '3013-07-16', end: '3013-08-19', className: 'timeline-item', group: 3},
            {id: 5, content: 'Phase E', start: '3013-09-09', end: '3013-10-30', className: 'timeline-item', group: 1},
            {id: 6, content: 'Phase D', start: '3013-09-27', end: '3013-11-19', className: 'timeline-item', group: 3},
            {id: 'A', content: 'Operation Window', start: '3013-01-01', end: '3013-01-01', className: 'timeline-range', type: 'background'}
        ]);
        var groups = new vis.DataSet([
            {id: 1, content: 'TL1'},
            {id: 2, content: 'TL2'},
            {id: 3, content: 'TL3'}
        ])
        var options = {
            height: '100px',
            min: new Date(2946, 0, 1),
            max: new Date(3147, 0, 1),
            start: new Date(3013, 0, 1),
            end: new Date(3014, 0, 1)
        };
        timeline = new vis.Timeline(div, items, groups, options);
        timeline.options.height = $('#timeline').height();
        timeline.redraw();
    });
    container.on('show', function(){
        timeline.options.height = $('#timeline').height();
        timeline.redraw();
    });
    container.on('resize', function() {
        window.setTimeout(function(){
            timeline.options.height = $('#timeline').height();
            timeline.redraw();
        }, 300);
    });
});