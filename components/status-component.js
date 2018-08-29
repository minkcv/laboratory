layout.registerComponent( 'statusComponent', function(container, componentState){
    container.getElement().html(`
    <div class="status">
        <pre>Junction       </pre><pre id='junction'>NONE</pre><br/>
        <pre>Distance       </pre><pre id='distance'>0.0</pre><pre>qK</pre><br/>
        <pre>Orientation    </pre><pre id='orientation'>PARALLEL</pre>
    </div>
    `);
});