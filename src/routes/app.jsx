import Dashboard from 'views/Dashboard/Dashboard.jsx';
import Icons from 'views/Icons/Icons.jsx';
import Maps from 'views/Maps/Maps.jsx';
import Notifications from 'views/Notifications/Notifications.jsx';
import Table from 'views/Table/Table.jsx';
import Typography from 'views/Typography/Typography.jsx';
import User from 'views/User/User.jsx';

const appRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "design_app" , component: Dashboard },
    { path: "/user", name: "User Profile", icon: "users_single-02" , component: User },
    { path: "/table", name: "Table List", icon: "text_align-center" , component: Table },
    { path: "/typography", name: "Pages", icon: "files_paper" , component: Typography },
    { path: "/icons", name: "Icons", icon: "objects_diamond" , component: Icons },
    { path: "/maps", name: "Maps", icon: "location_pin" , component: Maps },
    { path: "/notifications", name: "Notifications", icon: "ui-1_bell-53" , component: Notifications },
    { redirect: true, path: "/", to:"/dashboard", name: "Home", icon: "" , component: Dashboard }
];

export default appRoutes;
