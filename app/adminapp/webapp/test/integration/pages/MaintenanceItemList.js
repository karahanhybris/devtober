sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'karahan.devtober.ui.adminapp',
            componentId: 'MaintenanceItemList',
            entitySet: 'MaintenanceItem'
        },
        CustomPageDefinitions
    );
});