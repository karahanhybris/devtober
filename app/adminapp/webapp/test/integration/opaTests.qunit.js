sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'karahan/devtober/ui/adminapp/test/integration/FirstJourney',
		'karahan/devtober/ui/adminapp/test/integration/pages/MaintenanceItemList',
		'karahan/devtober/ui/adminapp/test/integration/pages/MaintenanceItemObjectPage'
    ],
    function(JourneyRunner, opaJourney, MaintenanceItemList, MaintenanceItemObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('karahan/devtober/ui/adminapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheMaintenanceItemList: MaintenanceItemList,
					onTheMaintenanceItemObjectPage: MaintenanceItemObjectPage
                }
            },
            opaJourney.run
        );
    }
);