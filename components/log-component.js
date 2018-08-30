function logInfo(message) {
    log(message, $('#info-log'));
}
function logError(message) {
    log(message, $('#error-log'));
}
function log(message, log) {
    var timeStamp = (new Date().getHours() < 9 ? '0' : '') + new Date().getHours() + ':' + (new Date().getMinutes() < 9 ? '0' : '') + new Date().getMinutes();
    var pre = $('<pre></pre>').text('[' + timeStamp + '] ' + message);
    log.append(pre);
    log[0].scrollTop = log[0].scrollHeight;
}

layout.registerComponent( 'logComponent', function(container, componentState){
    if (componentState.type == 'info') {
        container.getElement().html('<div class="log" id="info-log"></div>');
    }
    else if (componentState.type == 'error') {
        container.getElement().html('<div class="log" id="error-log"></div>');
    }
    else if (componentState.type == 'warning') {
        container.getElement().html('<div class="log" id="warning-log"></div>');
    }
});