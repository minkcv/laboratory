var config = {
    settings: {
        showPopoutIcon: false,
        showMaximiseIcon: false,
        showCloseIcon: false
    },
    content: [{
        type: 'row',
        content:[{
            type: 'column',
            width: 20,
            content:[{
                type: 'component',
                componentName: 'treeComponent',
                componentState: { view: 'internal', id: '0' },
                isClosable: false,
                title: 'Internal System'
            },{
                type: 'component',
                height: 20,
                componentName: 'treeComponent',
                componentState: { view: 'external', id: '1' },
                isClosable: false,
                title: 'External System'
            },{
                type: 'component',
                height: 20,
                componentName: 'treeComponent',
                componentState: { view: 'code', id: '2' },
                isClosable: false,
                title: 'Code System'
            },{
                type: 'stack',
                height: 20,
                content: [{
                    type: 'component',
                    componentName: 'statusComponent',
                    componentState: {  },
                    isClosable: false,
                    title: 'Status'
                },{
                    type: 'component',
                    componentName: 'logComponent',
                    componentState: { type: 'diagnostic' },
                    isClosable: false,
                    title: 'Diagnostic Report'
                }]
            }]
        },{
            type: 'column',
            content:[{
                type: 'stack', 
                content: [{
                    type: 'component',
                    componentName: 'welcomeComponent',
                    componentState: {  },
                    isClosable: false,
                    title: 'Welcome'
                },{
                    type: 'component',
                    componentName: 'logComponent',
                    componentState: { type: 'info' },
                    isClosable: false,
                    title: 'Log - Info'
                },{
                    type: 'component',
                    componentName: 'logComponent',
                    componentState: { type: 'warning' },
                    isClosable: false,
                    title: 'Log - Warning'
                },{
                    type: 'component',
                    componentName: 'logComponent',
                    componentState: { type: 'error' },
                    isClosable: false,
                    title: 'Log - Error'
                },{
                    type: 'component',
                    componentName: 'dataComponent',
                    componentState: {  },
                    isClosable: false,
                    title: 'Hardware Data'
                },{
                    type: 'component',
                    componentName: 'codeComponent',
                    componentState: {  },
                    isClosable: false,
                    title: 'Code Viewer'
                },{
                    type: 'component',
                    componentName: 'barComponent',
                    componentState: {  },
                    isClosable: false,
                    title: 'System Resources'
                },{
                    type: 'component',
                    componentName: 'graphComponent',
                    componentState: {  },
                    isClosable: false,
                    title: 'Interference Graph'
                }]
            },{
                type: 'stack',
                height: 18,
                content:[{
                    type: 'component',
                    componentName: 'consoleComponent',
                    componentState: {  },
                    isClosable: false,
                    title: 'Console'
                },{
                    type: 'component',
                    componentName: 'timelineComponent',
                    componentState: {  },
                    isClosable: false,
                    title: 'Timeline'
                }]
            }]
        },{
            type: 'column',
            width: 20,
            content:[{
                type: 'stack',
                content:[{
                    type: 'component',
                    componentName: 'superstructureComponent',
                    componentState: {  },
                    isClosable: false,
                    title: 'Superstructure'
                }]
            },{
                type: 'stack',
                height: 30,
                content: [{
                    type: 'component',
                    componentName: 'substructureComponent',
                    componentState: {  },
                    isClosable: false,
                    title: 'Substructure'
                },{
                    type: 'component',
                    componentName: 'analysisComponent',
                    componentState: {  },
                    isClosable: false,
                    title: 'Analysis'
                }]
            }]
        }]
    }]
};
var layout = new GoldenLayout(config);
