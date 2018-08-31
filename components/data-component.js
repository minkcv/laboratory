layout.registerComponent( 'dataComponent', function(container, componentState){
    // This is probably the absolute worst code I have ever written. 8/29/18
    var data = [
        ['AAAAAA', 'BBBBBB', 'CCCCCC'],
        ['a', 'a', 'c'],
        ['a', 'a', 'c'],
        ['a', 'a', 'c'],
        ['a', 'a', 'c']
    ];
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