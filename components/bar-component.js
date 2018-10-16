layout.registerComponent( 'barComponent', function(container, componentState){
    var bars = [
        'Non Volatile Storage Disk Clusters',
        ['Disk Cluster 1', 46, 34, 20],
        ['Disk Cluster 2', 38, 20, 08],
        ['Disk Cluster 3', 22, 40, 16],
        ['Disk Cluster 4', 40, 54, 10],
        ['Disk Cluster 5', 62, 20, 08],
        ['Disk Cluster 6', 52, 34, 20],
        ['Disk Cluster 7', 44, 50, 12],
        ['Disk Cluster 8', 26, 28, 14],
        ['Disk Cluster 9', 82, 44, 20],
        'Low Level Volatile Cache For Disk Clusters',
        ['Low Level Cache 1', 42, 10, 12],
        ['Low Level Cache 2', 50, 12, 14],
        ['Low Level Cache 3', 10, 08, 08],
        ['Low Level Cache 4', 22, 10, 04],
        'Error Correcting X Architecture Memory Banks',
        ['ECXA Memory Bank 1', 22, 10, 04],
        ['ECXA Memory Bank 2', 22, 10, 04],
        ['ECXA Memory Bank 3', 20, 12, 04],
        ['ECXA Memory Bank 4', 20, 10, 06],
        ['ECXA Memory Bank 5', 22, 10, 04],
        ['ECXA Memory Bank 6', 22, 10, 04],
        'ActiveCool 6060 Redundant Network SOC Groups',
        ['Network SOC Group 1', 40, 0, 0],
        ['Network SOC Group 2', 40, 0, 0],
        ['Network SOC Group 3', 40, 0, 0],
    ];
    var id = 0;
    var html = '';
    for (var i = 0; i < bars.length; i++) {
        if (!Array.isArray(bars[i])) {
            html += '<h2>' + bars[i] + '</h2>';
            continue;
        }
        var bar = `<pre>` + bars[i][0] + `</pre><div class="progress">`;
        var total = bars[i][1] + bars[i][2] + bars[i][3];
        for (var j = 1; j < bars[i].length; j++) {
            var type = 'bar-info';
            var desc = 'Stable';
            if (j == 2) {
                type = 'bar-warning';
                desc = 'Unstable'
            }
            if (j == 3) {
                type = 'bar-danger';
                desc = 'Critical'
            }
            var percent = (bars[i][j] / total) * 100;
            bar += `
                <div id='bar` + id++ + `' class="progress-bar ` + type + `" role="progressbar" style="width:` + percent + `%" desc="` + desc + `" ></div>`;
        }
        bar += `</div>`;
        html += bar;
    }
    container.getElement().html('<div class="bars log">' + html + '</div>');
    updateBars();
});

function updateBars() {
    setTimeout(updateBars, 1000);
    var id = 0;
    var elt = document.getElementById('bar' + id);
    var percent = 100;
    while (elt != null) {
        var width = Math.random() * 100;
        if (width < 20 || width > 80)
            width = 20;
        if (width > percent || id % 3 == 2)
            width = percent;
        elt.style.width = width + '%';
        elt.innerHTML = Math.floor(width) + ' ' +  elt.getAttribute('desc');
        percent -= width;
        id++;
        elt = document.getElementById('bar' + id);
        if (id % 3 == 0)
            percent = 100;
    }
}