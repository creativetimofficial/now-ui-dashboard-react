/*!

=========================================================
* Now UI Dashboard React - v1.5.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// getting started
import Tutorial from "layouts/Documentation/Sections/Tutorial.js";
import RoutingSystem from "layouts/Documentation/Sections/RoutingSystem.js";
import Variables from "layouts/Documentation/Sections/Variables.js";
import BuildTools from "layouts/Documentation/Sections/BuildTools.js";
// components
import Alerts from "layouts/Documentation/Sections/Alerts.js";
import Breadcrumb from "layouts/Documentation/Sections/Breadcrumb.js";
import Buttons from "layouts/Documentation/Sections/Buttons.js";
import Cards from "layouts/Documentation/Sections/Cards.js";
import Dropdown from "layouts/Documentation/Sections/Dropdown.js";
import Footers from "layouts/Documentation/Sections/Footers.js";
import Icons from "layouts/Documentation/Sections/Icons.js";
import Navigation from "layouts/Documentation/Sections/Navigation.js";
import Navs from "layouts/Documentation/Sections/Navs.js";
import Notifications from "layouts/Documentation/Sections/Notifications.js";
import Sidebar from "layouts/Documentation/Sections/Sidebar.js";
import Tables from "layouts/Documentation/Sections/Tables.js";
import Tooltips from "layouts/Documentation/Sections/Tooltips.js";
import Typography from "layouts/Documentation/Sections/Typography.js";
// plugins
import Charts from "layouts/Documentation/Sections/Charts.js";
import GoogleMaps from "layouts/Documentation/Sections/GoogleMaps.js";
import PerfectScrollbar from "layouts/Documentation/Sections/PerfectScrollbar.js";
import Switch from "layouts/Documentation/Sections/Switch.js";

var componentsRoutes = [
  {
    name: "Getting started",
    path: "/documentation/tutorial",
    routes: [
      {
        path: "/documentation/tutorial",
        component: Tutorial,
        name: "Tutorial",
      },
      {
        path: "/documentation/routing-system",
        component: RoutingSystem,
        name: "Routing System",
      },
      {
        path: "/documentation/variables",
        component: Variables,
        name: "Variables",
      },
      {
        path: "/documentation/build-tools",
        component: BuildTools,
        name: "Build Tools",
      },
    ],
  },
  {
    name: "Components",
    path: "/documentation/accordion",
    routes: [
      { path: "/documentation/alerts", component: Alerts, name: "Alerts" },
      {
        path: "/documentation/breadcrumb",
        component: Breadcrumb,
        name: "Breadcrumb",
      },
      { path: "/documentation/buttons", component: Buttons, name: "Buttons" },
      { path: "/documentation/cards", component: Cards, name: "Cards" },
      {
        path: "/documentation/dropdown",
        component: Dropdown,
        name: "Dropdown",
      },
      { path: "/documentation/footers", component: Footers, name: "Footers" },
      {
        path: "/documentation/navbars",
        component: Navigation,
        name: "Navbars",
      },
      { path: "/documentation/navs", component: Navs, name: "Navs" },
      { path: "/documentation/icons", component: Icons, name: "Nucleo Icons" },
      { path: "/documentation/sidebar", component: Sidebar, name: "Sidebar" },
      { path: "/documentation/tables", component: Tables, name: "Tables" },
      {
        path: "/documentation/tooltips",
        component: Tooltips,
        name: "Tooltips",
      },
      {
        path: "/documentation/typography",
        component: Typography,
        name: "Typography",
      },
    ],
  },
  {
    name: "Plugins",
    path: "/documentation/charts",
    routes: [
      { path: "/documentation/charts", component: Charts, name: "Charts" },
      {
        path: "/documentation/google-maps",
        component: GoogleMaps,
        name: "GoogleMaps",
      },
      {
        path: "/documentation/notifications",
        component: Notifications,
        name: "Notifications",
      },
      {
        path: "/documentation/perfect-scrollbar",
        component: PerfectScrollbar,
        name: "PerfectScrollbar",
      },
      { path: "/documentation/switch", component: Switch, name: "Switch" },
    ],
  },
  { redirect: true, path: "/documentation", pathTo: "/documentation/tutorial" },
];

export default componentsRoutes;
