import ButtonsSection from 'containers/Documentation/sections/ButtonsSection.jsx';
import CardSection from 'containers/Documentation/sections/CardSection.jsx';
import ChartsSection from 'containers/Documentation/sections/ChartsSection.jsx';
import CheckboxSection from 'containers/Documentation/sections/CheckboxSection.jsx';
import DropdownSection from 'containers/Documentation/sections/DropdownSection.jsx';
import TutorialSection from 'containers/Documentation/sections/TutorialSection.jsx';
import IconsSection from 'containers/Documentation/sections/IconsSection.jsx';
import MapSection from 'containers/Documentation/sections/MapSection.jsx';
import NavbarsSection from 'containers/Documentation/sections/NavbarsSection.jsx';
import NotificationsSection from 'containers/Documentation/sections/NotificationsSection.jsx';
import RadioSection from 'containers/Documentation/sections/RadioSection.jsx';
import SidebarSection from 'containers/Documentation/sections/SidebarSection.jsx';
import TableSection from 'containers/Documentation/sections/TableSection.jsx';
import TooltipSection from 'containers/Documentation/sections/TooltipSection.jsx';

const docRoutes = [
    { path: "/documentation/tutorial", component: TutorialSection},
    { path: "/documentation/buttons", component: ButtonsSection},
    { path: "/documentation/cards", component: CardSection},
    { path: "/documentation/charts", component: ChartsSection},
    { path: "/documentation/checkboxes", component: CheckboxSection},
    { path: "/documentation/dropdowns", component: DropdownSection},
    { path: "/documentation/icons", component: IconsSection},
    { path: "/documentation/maps", component: MapSection},
    { path: "/documentation/navbars", component: NavbarsSection},
    { path: "/documentation/notifications", component: NotificationsSection},
    { path: "/documentation/radios", component: RadioSection},
    { path: "/documentation/sidebars", component: SidebarSection},
    { path: "/documentation/tables", component: TableSection},
    { path: "/documentation/tooltips", component: TooltipSection},
    { redirect: true, path: "/documentation", to: "/documentation/tutorial"}
];

export default docRoutes;
