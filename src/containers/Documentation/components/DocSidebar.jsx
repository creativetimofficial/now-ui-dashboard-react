import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class DocSidebar extends React.Component{
    render(){
        return (
            <Nav vertical>
                <NavItem><Link to="/documentation/tutorial" className="nav-link">Tutorial</Link></NavItem>
                <NavItem><Link to="/documentation/buttons" className="nav-link">Buttons</Link></NavItem>
                <NavItem><Link to="/documentation/cards" className="nav-link">Card</Link></NavItem>
                <NavItem><Link to="/documentation/charts" className="nav-link">Charts</Link></NavItem>
                <NavItem><Link to="/documentation/checkboxes" className="nav-link">Checkbox</Link></NavItem>
                <NavItem><Link to="/documentation/dropdowns" className="nav-link">Dropdown</Link></NavItem>
                <NavItem><Link to="/documentation/icons" className="nav-link">Icons</Link></NavItem>
                <NavItem><Link to="/documentation/maps" className="nav-link">Map</Link></NavItem>
                <NavItem><Link to="/documentation/navbars" className="nav-link">Navbars</Link></NavItem>
                <NavItem><Link to="/documentation/notifications" className="nav-link">Notifications</Link></NavItem>
                <NavItem><Link to="/documentation/radios" className="nav-link">Radio</Link></NavItem>
                <NavItem><Link to="/documentation/sidebars" className="nav-link">Sidebar</Link></NavItem>
                <NavItem><Link to="/documentation/tables" className="nav-link">Table</Link></NavItem>
                <NavItem><Link to="/documentation/tooltips" className="nav-link">Tooltip</Link></NavItem>
            </Nav>
        );
    }
}

export default DocSidebar;
