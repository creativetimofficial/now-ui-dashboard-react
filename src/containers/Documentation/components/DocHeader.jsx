import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import ReactDOM from 'react-dom';

import headerImg from 'assets/img/header.jpg';
import reactLogo from 'containers/Documentation/assets/img/reactlogo.png';
const headerBackground = {
    backgroundImage: 'url(' + headerImg + ')'
};

class Components extends Component {
    constructor(props){
        super(props);
        this.state = {
            isOpen: true
        }
        this.toggle = this.toggle.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }
    toggle(){
        this.setState({
          isOpen: !this.state.isOpen
        });
    }
    handleScroll(){
        const windowsScrollTop  = window.pageYOffset;
        var navbar = ReactDOM.findDOMNode(this.refs.navbarColorOnScroll);
        // console.log(navbar);
        // var title = ReactDOM.findDOMNode(this.refs.navbarTitle);
        if(windowsScrollTop > 381){
            navbar.children[0].classList.remove("navbar-transparent");
            // title.classList.remove("hidden");
        } else {
            navbar.children[0].classList.add("navbar-transparent");
            // title.classList.add("hidden");
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    }
    render() {
        return (
            <div className="header-wrapper" ref="navbarColorOnScroll">
                <Navbar color="info" expand="lg" className="navbar-transparent fixed-top">
                    <Container>
                        <NavbarBrand tag="div">
                            <Link to="/" className="nav-link"><img src={reactLogo} alt="React Logo" /> Now Ui Dashboard - React</Link>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Link to="/" className="nav-link"><i className="now-ui-icons design_bullet-list-67"></i> Back to Dashboard</Link>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/creativetimofficial/now-ui-dashboard-react/issues"><i className="now-ui-icons health_ambulance"></i> Report a bug</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/creativetimofficial/now-ui-dashboard-react"><i className="now-ui-icons ui-2_settings-90"></i> Contribute</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            	<div className="header" style={headerBackground}>
            		<div className="filter"></div>
            		<div className="title-container text-center">
            			<img src={reactLogo} alt="React Logo" />
            			<h1>Now Ui Dashboard React</h1>
            			<h3>Elements description</h3>
            		</div>
            	</div>
            </div>
        );
    }
}

export default Components;
