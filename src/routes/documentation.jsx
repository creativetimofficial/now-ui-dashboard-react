import Tutorial from "documentation/Sections/Tutorial.jsx";
import RoutingSystem from "documentation/Sections/RoutingSystem.jsx";
import Alerts from "documentation/Sections/Alerts.jsx";
import Breadcrumb from "documentation/Sections/Breadcrumb.jsx";
import Buttons from "documentation/Sections/Buttons.jsx";
import CardElements from "documentation/Sections/CardElements.jsx";
import Cards from "documentation/Sections/Cards.jsx";
import Charts from "documentation/Sections/Charts.jsx";
import CheckboxRadio from "documentation/Sections/CheckboxRadio.jsx";
import Dropdown from "documentation/Sections/Dropdown.jsx";
import Footers from "documentation/Sections/Footers.jsx";
import FormInputs from "documentation/Sections/FormInputs.jsx";
import GoogleMaps from "documentation/Sections/GoogleMaps.jsx";
import Icons from "documentation/Sections/Icons.jsx";
import Navigation from "documentation/Sections/Navigation.jsx";
import Navs from "documentation/Sections/Navs.jsx";
import Notifications from "documentation/Sections/Notifications.jsx";
import PerfectScrollbar from "documentation/Sections/PerfectScrollbar.jsx";
import Sidebar from "documentation/Sections/Sidebar.jsx";
import Stats from "documentation/Sections/Stats.jsx";
import Switch from "documentation/Sections/Switch.jsx";
import Tables from "documentation/Sections/Tables.jsx";
import Tasks from "documentation/Sections/Tasks.jsx";
import Textarea from "documentation/Sections/Textarea.jsx";
import Tooltips from "documentation/Sections/Tooltips.jsx";
import Typography from "documentation/Sections/Typography.jsx";
import Variables from "documentation/Sections/Variables.jsx";

var componentsRoutes = [
    {
        name: 'Getting started', path: "/documentation/tutorial", routes: [
            { path: "/documentation/tutorial", component:  Tutorial, name: "Tutorial" },
            { path: "/documentation/routing-system", component:  RoutingSystem, name: "Routing System" },
            { path: "/documentation/variables", component:  Variables, name: "Variables" },
        ]
    },
    {
        name: 'Components', path: "/documentation/accordion" , routes: [
            { path: "/documentation/alerts", component:  Alerts, name: "Alerts" },
            { path: "/documentation/breadcrumb", component:  Breadcrumb, name: "Breadcrumb" },
            { path: "/documentation/buttons", component:  Buttons, name: "Buttons" },
            { path: "/documentation/cards", component:  Cards, name: "Cards" },
            { path: "/documentation/card-elements", component:  CardElements, name: "Card Elements" },
            { path: "/documentation/checkbox-radio-switch", component:  CheckboxRadio, name: "Checkbox Radio" },
            { path: "/documentation/dropdown", component:  Dropdown, name: "Dropdown" },
            { path: "/documentation/footers", component:  Footers, name: "Footers" },
            { path: "/documentation/form-inputs", component:  FormInputs, name: "Form Inputs" },
            { path: "/documentation/navbars", component:  Navigation, name: "Navbars" },
            { path: "/documentation/navs", component:  Navs, name: "Navs" },
            { path: "/documentation/icons", component:  Icons, name: "Nucleo Icons" },
            { path: "/documentation/sidebar", component:  Sidebar, name: "Sidebar" },
            { path: "/documentation/stats", component:  Stats, name: "Stats" },
            { path: "/documentation/tables", component:  Tables, name: "Tables" },
            { path: "/documentation/tasks", component:  Tasks, name: "Tasks" },
            { path: "/documentation/textarea", component:  Textarea, name: "Textarea" },
            { path: "/documentation/tooltips", component:  Tooltips, name: "Tooltips" },
            { path: "/documentation/typography", component:  Typography, name: "Typography" },
        ]
    },
    {
        name: 'Plugins', path: '/documentation/charts', routes: [
            { path: "/documentation/charts", component:  Charts, name: "Charts" },
            { path: "/documentation/google-maps", component:  GoogleMaps, name: "GoogleMaps" },
            { path: "/documentation/notifications", component:  Notifications, name: "Notifications" },
            { path: "/documentation/perfect-scrollbar", component:  PerfectScrollbar, name: "PerfectScrollbar" },
            { path: "/documentation/switch", component: Switch, name: "Switch" },
        ]
    },
    { redirect: true, path: "/documentation", pathTo: "/documentation/tutorial" }
];

export default componentsRoutes;
