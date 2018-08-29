layout.registerComponent( 'consoleComponent', function(container, componentState){
    container.getElement().html(`
    <div class='console'>
        <div id='console-out'></div>
        <pre id='console-in-line'>> <input type='text' id='console-in' onkeypress='consoleKeyPress(event)'></pre>
    </div>
    `);
});

function consoleKeyPress(event){
    var key = event.keyCode || event.which;
    if (key == 13) {
        var timeStamp = (new Date().getHours() < 9 ? '0' : '') + new Date().getHours() + ':' + (new Date().getMinutes() < 9 ? '0' : '') + new Date().getMinutes();
        var out = $('<pre></pre>').text('[' + timeStamp + '] ' + $('#console-in').val());
        $('#console-out').append(out);
        $('#console-in').val('');
        var consoleOut = $('#console-out')[0];
        consoleOut.scrollTop = consoleOut.scrollHeight;
    }
}