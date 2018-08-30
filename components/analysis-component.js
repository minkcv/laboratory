layout.registerComponent( 'analysisComponent', function(container, componentState){
    container.getElement().html(`
    <div class='analysis'>
        <pre>Node           </pre><pre id='node-name'></pre><br/>
        <pre>Complexity     </pre><pre id='node-complexity'></pre><br/>
        <pre>Order          </pre><pre id='node-order'>0.0</pre><pre></pre><br/>
        <pre>Passable       </pre><pre id='node-passable'></pre>
    </div>
    `);
});