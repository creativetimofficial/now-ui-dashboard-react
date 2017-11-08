import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import DocSidebar from './components/DocSidebar.jsx';
import DocHeader from './components/DocHeader.jsx';
import DocFooter from './components/DocFooter.jsx';

import './assets/css/Documentation.css';

import docRoutes from 'routes/documentation.jsx';

class Documentation extends React.Component{
    render(){
        return (
            <div className="components" ref="componentsPanel">
                <DocHeader {...this.props}/>
                <div className="wrapper">
                    <div className="main">
                        <div className="section">
                            <Container>
                                <Row>
                                    <Col md={2}>
                                        <DocSidebar/>
                                    </Col>
                                    <Col md={{ size: 8, offset: 2 }}>
                                        <div className="space-top"></div>
                                        <div className="components-panel">
                                            <Switch>
                                                {
                                                    docRoutes.map((prop,key) => {
                                                        if(prop.redirect)
                                                            return (
                                                                <Redirect from={prop.path} to={prop.to} key={key}/>
                                                            );
                                                        return (
                                                            <Route path={prop.path} component={prop.component} key={key}/>
                                                        );
                                                    })
                                                }
                                            </Switch>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <DocFooter />
                </div>
            </div>
        );
    }
}

export default Documentation;
