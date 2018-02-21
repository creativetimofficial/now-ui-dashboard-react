import Dashboard from 'layouts/Dashboard/Dashboard.jsx';
import Documentation from 'documentation/Components.jsx';

var indexRoutes = [
  { path: "/documentation", name: "Documentation", component: Documentation },
  { path: "/", name: "Home", component: Dashboard }
];

export default indexRoutes;
