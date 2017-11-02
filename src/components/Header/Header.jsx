import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
    NavDropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Container
} from 'reactstrap';

import appRoutes from 'routes/app';

class Header extends React.Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.dropdownToggle = this.dropdownToggle.bind(this);
        this.state = {
            isOpen: false,
            dropdownOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    dropdownToggle(e){
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    getBrand(){
        var name;
        appRoutes.map((prop,key) => {
            if(prop.collapse){
                 prop.views.map((prop,key) => {
                    if(prop.path === this.props.location.pathname){
                        name = prop.name;
                    }
                    return null;
                })
            } else {
                if(prop.redirect){
                    if(prop.path === this.props.location.pathname){
                        name = prop.name;
                    }
                }else{
                    if(prop.path === this.props.location.pathname){
                        name = prop.name;
                    }
                }
            }
            return null;
        })
        return name;
    }
    render(){
        return (
            <Navbar color="white" expand="lg">
                <Container>
                    <div className="navbar-wrapper">
                        <NavbarBrand href="/">{this.getBrand()}</NavbarBrand>
                    </div>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link to="#pablo" className="nav-link"><p className="hidden-lg hidden-md">Account</p></Link>
                            </NavItem>
                            <NavDropdown isOpen={this.state.dropdownOpen} toggle={(e) => this.dropdownToggle(e)}>
                                <DropdownToggle caret nav>
                                    <p>Dropdown</p>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem tag="a">Action</DropdownItem>
                                    <DropdownItem tag="a">Another Action</DropdownItem>
                                    <DropdownItem tag="a">Something else here</DropdownItem>
                                </DropdownMenu>
                            </NavDropdown>
                            <NavItem>
                                <Link to="#pablo" className="nav-link"><p className="hidden-lg hidden-md">Log out</p></Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;
