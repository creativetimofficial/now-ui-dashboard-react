import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';


class Sidebar extends React.Component{
    constructor(props){
        super(props);
        this.activeRoute.bind(this);
    }
    // verifies if routeName is the one active (in browser input)
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
    }
    render(){
        return (
            <div className="sidebar" data-color={this.props.color} data-image={this.props.image}>
                {
                    this.props.hasImage ? (<div className="sidebar-background" style={{backgroundImage: "url("+this.props.image+")"}}></div>):""
                }
                {/*
                Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

                Tip 2: you can also add an filter over the background-image using data-image tag
                */}

                <div className="logo">
                    <a href="http://www.creative-tim.com" className="simple-text">
                        Creative Tim
                    </a>
                </div>

                <div className="sidebar-wrapper">

                    <Nav>
                        {
                            this.props.routes.map((prop,key) => {
                                if(prop.redirect)
                                    return null;
                                return (
                                    <li className={this.activeRoute(prop.path)} key={key}>
                                        <NavLink to={prop.path} className="nav-link" activeClassName="active">
                                            <i className={"now-ui-icons "+prop.icon}></i>
                                            <p>{prop.name}</p>
                                        </NavLink>
                                    </li>
                                );
                            })
                        }
                    </Nav>

                </div>
            </div>
        );
    }
}

export default Sidebar;
