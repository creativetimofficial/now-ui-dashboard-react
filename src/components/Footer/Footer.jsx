import React from 'react';
import { Container } from 'reactstrap';

class Footer extends React.Component{
    render(){
        return (
            <footer className={"footer"
                + (this.props.default ? " footer-default":"")
            }>
                <Container fluid={this.props.fluid ? true:false}>
                    <nav>
                        <ul>
                            <li>
                                <a href="https://www.creative-tim.com">
                                    Creative Tim
                                </a>
                            </li>
                            <li>
                                <a href="http://presentation.creative-tim.com">
                                   About Us
                                </a>
                            </li>
                            <li>
                                <a href="http://blog.creative-tim.com">
                                   Blog
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/creativetimofficial/now-ui-dashboard/blob/master/LICENSE.md">
                                    MIT License
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="copyright">
                        &copy; {1900 + (new Date()).getYear()}, Designed by <a href="http://www.invisionapp.com" target="_blank" rel="noopener noreferrer">Invision</a>. Coded by <a href="https://www.creative-tim.com" target="_blank" rel="noopener noreferrer">Creative Tim</a>.
                    </div>
                </Container>
            </footer>
        );
    }
}

export default Footer;
