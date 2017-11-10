import ButtonsSection from 'containers/Documentation/sections/ButtonsSection.jsx';
import CardSection from 'containers/Documentation/sections/CardSection.jsx';
import ChartsSection from 'containers/Documentation/sections/ChartsSection.jsx';
import CheckboxSection from 'containers/Documentation/sections/CheckboxSection.jsx';
import DropdownSection from 'containers/Documentation/sections/DropdownSection.jsx';
import FooterSection from 'containers/Documentation/sections/FooterSection.jsx';
import FormInputsSection from 'containers/Documentation/sections/FormInputsSection.jsx'
import TutorialSection from 'containers/Documentation/sections/TutorialSection.jsx';
import IconsSection from 'containers/Documentation/sections/IconsSection.jsx';
import MapSection from 'containers/Documentation/sections/MapSection.jsx';
import NavbarsSection from 'containers/Documentation/sections/NavbarsSection.jsx';
import NotificationsSection from 'containers/Documentation/sections/NotificationsSection.jsx';
import RadioSection from 'containers/Documentation/sections/RadioSection.jsx';
import SidebarSection from 'containers/Documentation/sections/SidebarSection.jsx';
import TableSection from 'containers/Documentation/sections/TableSection.jsx';
import TasksSection from 'containers/Documentation/sections/TasksSection.jsx';
import TooltipSection from 'containers/Documentation/sections/TooltipSection.jsx';

const docRoutes = [
    { path: "/documentation/tutorial", name: "Tutorial", component: TutorialSection},
    { path: "/documentation/buttons", name: "Buttons", component: ButtonsSection},
    { path: "/documentation/cards", name: "Card", component: CardSection},
    { path: "/documentation/charts", name: "Charts", component: ChartsSection},
    { path: "/documentation/checkboxes", name: "Checkboxes", component: CheckboxSection},
    { path: "/documentation/dropdowns", name: "Dropdowns", component: DropdownSection},
    { path: "/documentation/footers", name: "Footers", component: FooterSection},
    { path: "/documentation/form-inputs", name: "Form Inputs", component: FormInputsSection},
    { path: "/documentation/icons", name: "Icons", component: IconsSection},
    { path: "/documentation/maps", name: "Maps", component: MapSection},
    { path: "/documentation/navbars", name: "Navbars", component: NavbarsSection},
    { path: "/documentation/notifications", name: "Notifications", component: NotificationsSection},
    { path: "/documentation/radios", name: "Radios", component: RadioSection},
    { path: "/documentation/sidebars", name: "Sidebar", component: SidebarSection},
    { path: "/documentation/tables", name: "Tables", component: TableSection},
    { path: "/documentation/tasks", name: "Tasks", component: TasksSection},
    { path: "/documentation/tooltips", name: "Tooltips", component: TooltipSection},
    { redirect: true, path: "/documentation", to: "/documentation/tutorial"}
];

export default docRoutes;
