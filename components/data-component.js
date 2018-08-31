layout.registerComponent( 'dataComponent', function(container, componentState){
    // This is probably the absolute worst code I have ever written. 8/29/18
    var data = [
        ['ID', 'RPC', 'ADDRESS', 'OFFSET', 'SIZE', 'SCATTER LAMBDA', 'STATE PREDICTION']
    ];

    var nRows = 300;
    for (var i = 0; i < nRows; i++) {
        var row = [];
        row.push(getDataID());
        row.push(getDataRPC());
        row.push(getDataAddress());
        row.push(getDataOffset());
        row.push(getDataSize());
        row.push(getDataScatterLambda());
        if (row[2] == '<pre class="nullptr">0x00000000</pre>')
            row.push('-');
        else
            row.push(getDataStatePrediction());
        data.push(row);
    }
    
    var html = `
        <div id='data-component'>
            <table class='data-table'>
    `;
    html +=`
                <thead>
                    <tr>
    `;
    for (var i = 0; i < data[0].length; i++) {
        html +=`
                        <th><pre>` + data[0][i] + `</pre></th>
        `;
    }
    html +=`
                    </tr>
                </thead>
                <tbody>
    `;
    for (var i = 1; i < data.length; i++) {
        html += `   <tr>`
        for (var j = 0; j < data[i].length; j++) {
            html +=`
                        <td><pre>` + data[i][j] + `</pre></td>
            `;
        }
        html += `   </tr>`
    }
    html += `
                </tbody>
            </table>
        </div>
    `;
    container.getElement().html(html);
});

function getDataID() {
    var id = Math.floor(Math.random() * 10000000).toString();
    return id.padStart(8, '0');
}

function getDataRPC() {
    var rpc1 = Math.floor(Math.random() * 10000).toString();
    var rpc2 = Math.floor(Math.random() * 1000).toString();
    return rpc1.padStart(4, '0') + '-' + rpc2.padStart(4, '0');
}

function getDataAddress() {
    var addr = Math.floor(Math.random() * 10000000).toString(16);
    if (Math.random() < 0.3) {
        return '<pre class="nullptr">0x00000000</pre>';
    }
    return '0x' + addr.padStart(8, '0');
}

function getDataOffset() {
    var offset = Math.floor(Math.random() * 10000000).toString(16);
    return '0x' + offset.padStart(8, '0');
}

function getDataSize() {
    var size = Math.floor(Math.random() * 10000000).toString(16);
    return size.padStart(8, '0');
}

function getDataScatterLambda() {
    var sl = Math.random() * 100;
    sl = Math.round(sl * 10000) / 10000;
    if (sl > 50)
        return "<pre class='green-lambda'>" + sl.toString().padEnd(8, '0') + "</pre>";
    return sl.toString().padEnd(8, '0');
}

function getDataStatePrediction() {
    var s1 = Math.floor(Math.random() * 10);
    var s2 = Math.floor(Math.random() * 10);
    var s3 = Math.floor(Math.random() * 10);
    return s1 + ' > ' + s2 + ' > ' + s3;
}