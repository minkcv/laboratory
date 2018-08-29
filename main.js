layout.registerComponent( 'testComponent', function(container, componentState){
    container.getElement().html('<div class="">TEST</div>');
});

layout.init();

$(function(){
    logInfo('Interface connected');
    logInfo('Location Module ok');
    logInfo('Loaded internal system list from cache');
    logInfo('Loaded external system list from cache');
    logError('Discovery Module offline');
    logError('Transport Module offline');
})