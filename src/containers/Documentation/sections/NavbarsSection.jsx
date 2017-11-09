import React from 'react';
import { Link } from 'react-router-dom';
import {
    Container,
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
    NavDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

import imagine4 from 'assets/img/bg6.jpg';

const colors = ["primary","info","success","warning","danger","white","transparent"];

const codeImport = `import {
    Container,
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
    NavDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';`;

const codeImportHeader = `import Header from 'components/Header/Header.jsx';
import appRoutes from 'routes/app.jsx'`;
const codeExampleHeader = `<Header routes={appRoutes}/>`;

const codeExample = `<Navbar color="primary" expand="lg" key={key}>
    <Container>
        <div className="navbar-wrapper">
            <NavbarBrand href="#pablo">Primary Example</NavbarBrand>
        </div>
        <NavbarToggler onClick={this.toggle}>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
            <span className="navbar-toggler-bar navbar-kebab"></span>
        </NavbarToggler>
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
</Navbar>`;

class NavbarsSection extends React.Component{
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
            <div className="tim-container">
                <div className="tim-row">
                    <h2>Navbars</h2>
                    <legend></legend>
                    <p>
                        We've restyled the classic <a href="http://getbootstrap.com/docs/4.0/components/navbar/" target="_blank" rel="noopener noreferrer">Boostrap Navbar</a> (<a href="https://reactstrap.github.io/components/navbar/" target="_blank" rel="noopener noreferrer">reactstrap navbar</a>) giving it a more attractive look.
                    </p>
                    <p>You'll have to make the following imports:</p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeImport}
                    </SyntaxHighlighter>
                    <p>You will find the navbar used in our demo application in <code>src/components/Header/Header.jsx</code>.</p>
                    <p>To use it, you have to make the following import:</p>
                    <SyntaxHighlighter language="javascript" style={monokaiSublime}>
                        {codeImportHeader}
                    </SyntaxHighlighter>
                    <p>An then use it like so:</p>
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeExampleHeader}
                    </SyntaxHighlighter>
                    <p>As you can see, we've imported the routes of our whole demo and passed them into our component <code>Header</code>. We've done this, because we want to dynamically create our <code>navbar brand</code>.</p>
                    <p>You can change this component and get one of the following navbars:</p>
                    <h3>Example</h3>
                    <div style={{backgroundImage: "url("+imagine4+")"}}>
                        {
                            colors.map((prop,key)=>{
                                return (
                                    <Navbar color={prop} expand="lg" key={key}>
                                        <Container>
                                            <div className="navbar-wrapper">
                                                <NavbarBrand href="#pablo">{prop} Example</NavbarBrand>
                                            </div>
                                            <NavbarToggler onClick={this.toggle}>
                                                <span className="navbar-toggler-bar navbar-kebab"></span>
                                                <span className="navbar-toggler-bar navbar-kebab"></span>
                                                <span className="navbar-toggler-bar navbar-kebab"></span>
                                            </NavbarToggler>
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
                            })
                        }
                    </div>
                    <SyntaxHighlighter language="html" style={monokaiSublime}>
                        {codeExample}
                    </SyntaxHighlighter>
                    <h3>Props</h3>
                    <p>Please refer to <a href="https://reactstrap.github.io/components/navbar/" target="_blank" rel="noopener noreferrer">reactstrap navbar documentation</a>.</p>
                </div>
            </div>
        );
    }
}

export default NavbarsSection;
