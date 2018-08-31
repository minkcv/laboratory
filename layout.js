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
                height: 30,
                componentName: 'treeComponent',
                componentState: { view: 'external', id: '1' },
                isClosable: false,
                title: 'External System'
            },{
                type: 'component',
                height: 20,
                componentName: 'statusComponent',
                componentState: {  },
                isClosable: false,
                title: 'Status'
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
                }]
            },{
                type: 'stack',
                height: 15,
                content:[{
                    type: 'component',
                    componentName: 'consoleComponent',
                    componentState: { label: 'A' },
                    isClosable: false,
                    title: 'Console'
                },{
                    type: 'component',
                    componentName: 'testComponent',
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
