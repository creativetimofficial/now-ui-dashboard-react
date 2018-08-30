import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon
} from "react-share";
import GitHubButton from "react-github-button";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.classes === "dropdown") {
      this.setState({ classes: "dropdown show" });
    } else {
      this.setState({ classes: "dropdown" });
    }
  }
  render() {
    return (
      <div className="fixed-plugin">
        <div className={this.state.classes}>
          <div onClick={this.handleClick}>
            <i className="fa fa-cog fa-2x" />
          </div>
          <ul className="dropdown-menu show">
            <li className="header-title">SIDEBAR BACKGROUND</li>
            <li className="adjustments-line">
              <div className="badge-colors text-center">
                <span
                  className={
                    this.props.bgColor === "yellow"
                      ? "badge filter badge-yellow active"
                      : "badge filter badge-yellow"
                  }
                  data-color="yellow"
                  onClick={() => {
                    this.props.handleColorClick("yellow");
                  }}
                />
                <span
                  className={
                    this.props.bgColor === "blue"
                      ? "badge filter badge-blue active"
                      : "badge filter badge-blue"
                  }
                  data-color="blue"
                  onClick={() => {
                    this.props.handleColorClick("blue");
                  }}
                />
                <span
                  className={
                    this.props.bgColor === "green"
                      ? "badge filter badge-green active"
                      : "badge filter badge-green"
                  }
                  data-color="green"
                  onClick={() => {
                    this.props.handleColorClick("green");
                  }}
                />
                <span
                  className={
                    this.props.bgColor === "orange"
                      ? "badge filter badge-orange active"
                      : "badge filter badge-orange"
                  }
                  data-color="orange"
                  onClick={() => {
                    this.props.handleColorClick("orange");
                  }}
                />
                <span
                  className={
                    this.props.bgColor === "red"
                      ? "badge filter badge-red active"
                      : "badge filter badge-red"
                  }
                  data-color="red"
                  onClick={() => {
                    this.props.handleColorClick("red");
                  }}
                />
              </div>
            </li>

            <li className="button-container">
              <a
                href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react"
                target="_blank"
                className="btn btn-primary btn-block btn-round"
              >
                Buy pro
              </a>
              <a
                href="https://www.creative-tim.com/product/now-ui-dashboard-react"
                target="_blank"
                className="btn btn-warning btn-block btn-round"
              >
                Download free
              </a>
              <NavLink
                to={"/documentation/tutorial"}
                className="btn btn-block btn-round btn-info"
                activeClassName="active"
              >
                Documentation
              </NavLink>
            </li>
            <li className="header-title" id="sharrreTitle">
              Thank you for sharing!
            </li>
            <li className="button-container text-center">
              <FacebookShareButton url="https://demos.creative-tim.com/now-ui-dashboard-react/#/dashboard">
                <FacebookIcon size={32} round={true} />
              </FacebookShareButton>
              <TwitterShareButton
                url="https://demos.creative-tim.com/now-ui-dashboard-react/#/dashboard"
                title="Now UI Dashboard React by Creative Tim | Free React Admin Template"
                hashtags={["react", "bootstrap"]}
                via="creativetim"
              >
                <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <br />
              <GitHubButton
                type="stargazers"
                namespace="creativetimofficial"
                repo="now-ui-dashboard-react"
              />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
