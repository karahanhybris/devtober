using{karahan.devtober as dbcore} from '../db/core';


service AdminService {
    entity MaintenanceItem as projection on dbcore.MaintenanceItem;     

}