function logInfo(message) {
    log(message, $('#info-log'));
}
function logError(message) {
    log(message, $('#error-log'));
}
function logWarning(message) {
    log(message, $('#warning-log'));
}
function logDiagnostic(message) {
    log(message, $('#diagnostic-report'));
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
        container.on('open', function () {
            logInfo('Interface connected');
            logInfo('Location Module ok');
            logInfo('Loaded internal system list from cache');
            logInfo('Loaded external system list from cache');
        });
    }
    else if (componentState.type == 'error') {
        container.getElement().html('<div class="log" id="error-log"></div>');
        container.on('open', function () {
            logError('Discovery Module offline');
            logError('Transport Module offline');
        });
    }
    else if (componentState.type == 'warning') {
        container.getElement().html('<div class="log" id="warning-log"></div>');
    }
    else if (componentState.type == 'diagnostic') {
        container.getElement().html('<div class="log" id="diagnostic-report"></div>');
        container.on('open', function() {
            logDelayed();
        });
    }
});

var diag = `BEGIN DIAGNOSTIC REPORT
Device ID:        2b32031b2b52
Hardware ID: 00:0a:95:9d:68:1
Language: English
System Model: MKULTRA-7B48-R663
Featrues:                  012
Pre Boot Verification:    Enabled
Integrated RAMDAC:        Enabled
Full Device Display:      Enabled
Begin Local Submodule List:
    CMDR.sys
    MDVR.sys
    LNDR.sys
    HWND.sys
End Local Submodule List
Begin Multimode Co-Processor List
    Particle Superstructure Processor
        5329be5e-39a8-4067-8544-1c0a68d02cc3
        91be3372-4ff8-472a-b521-65e7a98996d1
        e4a3192e-bb58-4cf9-b288-03f4b0f00766
        f93c9244-350a-49c9-90ec-4b86220d21da
    Particle Substructure Processor
        dce4b616-0a7d-47b9-9425-bdfc5af90119
        b362cb9f-6d7c-4745-a503-871868a95745
        83fe938d-88c6-41a7-ad06-aa70ec800260
        8969e8f6-af3f-411e-8637-ffd983b9ebd6
    Cross System Hash Translator
        24dad22f-6f26-4fe9-8c05-d1df05914480
        0aaad18f-2fe7-436c-a5b4-bee85b1fd0c7
        78215564-4fdf-428e-a2be-5f8d731debd2
End Multimode Co-Processor List
END DIAGNOSTIC REPORT`;

var diagIndex = 0;
var diagLines = diag.split('\n');
var diagTimeout;
function logDelayed() {
    if (diagIndex >= diagLines.length)
        clearTimeout(diagTimeout)
    else {
        diagTimeout = setTimeout(logDelayed, 500);
        logDiagnostic(diagLines[diagIndex]);
        diagIndex++;
    }
}
