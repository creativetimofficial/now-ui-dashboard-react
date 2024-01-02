import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "./logo.png";

var ps;

function Sidebar(props) {
  const sidebar = React.useRef();
  const location = useLocation();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = routeName => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });

  return (
    <div className="sidebar" data-color={props.backgroundColor}>
      <div className="logo">
        <a href="logo.png" className="simple-text logo-mini" target="_blank">
          <div className="logo-img">
            <img src={logo} alt="New Logo" />
          </div>
        </a>
        <a
          href="https://www.creative-tim.com?ref=nudr-sidebar"
          className="simple-text logo-normal"
          target="_blank"
        >
          BU LMS
        </a>
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            if (prop.redirect) return null;
            return (
              <li>
                <NavLink to={prop.layout + prop.path} className="nav-link">
                  <i className={"now-ui-icons " + prop.icon} />
                  <p onClick={prop.function}>{prop.name}</p>
                </NavLink>
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;
