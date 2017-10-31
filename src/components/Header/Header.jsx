import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
    NavDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';


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
    render(){
        return (
            <Navbar color="white" expand="lg">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
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
            </Navbar>
        );
    }
}

export default Header;
