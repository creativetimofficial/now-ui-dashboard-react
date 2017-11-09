import React from 'react';
import { Affix } from 'react-overlays';
import { Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import docRoutes from 'routes/documentation.jsx';

class DocSidebar extends React.Component{
    render(){
        return (
            <AffixWrapper>
                <div className="fixed-section">
                    <Nav vertical>
                        {
                            docRoutes.map((prop,key) => {
                                if(prop.redirect){
                                    return null;
                                }
                                return (
                                    <NavItem key={key}><Link to={prop.path} className="nav-link">{prop.name}</Link></NavItem>
                                );
                            })
                        }
                    </Nav>
                </div>
            </AffixWrapper>
        );
    }
}

class AffixWrapper extends React.Component{
    render(){
        if(window.innerWidth > 991)
            return (<Affix offsetTop={390} >{this.props.children}</Affix>);
        return this.props.children;
    }
}

export default DocSidebar;
