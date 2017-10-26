import React from 'react';
import { NavLink } from 'react-router-dom';

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
            <div class="sidebar" data-color="orange" data-image="../assets/img/blurred-image-1.jpg">
                {/*
                Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

                Tip 2: you can also add an image using data-image tag
                */}

                <div class="logo">
                    <a href="http://www.creative-tim.com" class="simple-text">
                        Creative Tim
                    </a>
                </div>

                <div class="sidebar-wrapper">

                    <ul class="nav">
                        {
                            this.props.routes.map((prop,key) => {
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
                    </ul>

                </div>
            </div>
        );
    }
}

export default Sidebar;
