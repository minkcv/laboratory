layout.registerComponent('welcomeComponent', function(container, componentState){
    container.getElement().html(`
    <div id='welcome'>
        <h1><em>Objective Research Laboratories</em></h1>
        <p>System Control Platform 4</p><hr/>
        <pre>This Device: 2b32031b2b52</pre>
        <h3>Module Status</h3>
        <table class='status-list'>
            <tr>
                <td><pre>Location Module</pre></td>
                <td><pre style='color: green;'>OK</pre></td>
            </tr>
            <tr>
                <td><pre>Discovery Module</pre></td>
                <td><pre style='color: red;'>OFFLINE</pre></td>
            </tr>
            <tr>
                <td><pre>Transport Module</pre></td>
                <td><pre style='color: red;'>OFFLINE</pre></td>
            </tr>
        </table>
        <h3>Other Devices:</h3>
        <table class='status-list'>
            <tr>
                <th><pre>Device</pre></th>
                <th><pre>Last Seen</pre></th>
                <th><pre>Location</pre></th>
            </tr>
            <tr>
                <td><pre>9fd2bdcd05e7</pre></td>
                <td><pre>8/28/2018, 9:11:15 AM</pre></td>
                <td><pre>Unknown</pre></td>
            </tr>
            <tr>
                <td><pre>831ee5ebf24b</pre></td>
                <td><pre>8/28/2018, 9:11:15 AM</pre></td>
                <td><pre>Unknown</pre></td>
            </tr>
        </table>
    </div>
    `)
})