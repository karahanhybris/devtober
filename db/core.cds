using {cuid,managed} from '@sap/cds/common';

namespace karahan.devtober;



entity MaintenanceItem:cuid,managed{
    s4Id:String(50);
    problemDescription:String(5000);
}