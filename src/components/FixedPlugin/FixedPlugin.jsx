import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ShareButtons,
  generateShareIcon
} from 'react-share';
import Switch from 'react-bootstrap-switch';
import GitHubButton from 'react-github-button';

import imagine1 from 'assets/img/bg1.jpg';
import imagine2 from 'assets/img/bg4.jpg';
import imagine3 from 'assets/img/bg5.jpg';
import imagine4 from 'assets/img/bg6.jpg';

const {
  FacebookShareButton,
  TwitterShareButton
} = ShareButtons;
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');

class FixedPlugin extends Component{
    constructor(props){
        super(props);
        this.state = {
            classes: "dropdown show",
            bg_checked: true,
            bgImage: this.props.bgImage
        };
        this.handleClick = this.handleClick.bind(this);
        this.onChangeClick = this.onChangeClick.bind(this);
    }
    handleClick(){
        this.props.handleFixedClick();
    }
    onChangeClick(){
        this.setState({bg_checked: !this.state.bg_checked});
        this.props.handleHasImage(this.state.bg_checked);
    }
    render(){
        return (
            <div className="fixed-plugin">
                <div id="fixedPluginClasses" className={this.props.fixedClasses}>
                    <div onClick={this.handleClick}>
                        <i className="fa fa-cog fa-2x"></i>
                    </div>
                    <ul className="dropdown-menu">
                        <li className="header-title">Configuration</li>
                        <li className="adjustments-line">
                            <p className="pull-left">Background Image</p>
                            <div className="pull-right">
                                <Switch
                                    onChange={this.onChangeClick}
                                    defaultValue={this.state.bg_checked}
                                />
                            </div>
                            <div className="clearfix"></div>
                        </li>
                        <li className="adjustments-line">
                            <a  className="switch-trigger">
                                <p>Filters</p>
                                <div className="pull-right">
                                    <span className={this.props.bgColor === "black" ? "badge filter active":"badge filter"} data-color="black" onClick={() => {this.props.handleColorClick("black")}}></span>
                                    <span className={this.props.bgColor === "blue" ? "badge filter badge-blue active":"badge filter badge-blue"} data-color="blue" onClick={() => {this.props.handleColorClick("blue")}}></span>
                                    <span className={this.props.bgColor === "green" ? "badge filter badge-green active":"badge filter badge-green"} data-color="green" onClick={() => {this.props.handleColorClick("green")}}></span>
                                    <span className={this.props.bgColor === "orange" ? "badge filter badge-orange active":"badge filter badge-orange"} data-color="orange" onClick={() => {this.props.handleColorClick("orange")}}></span>
                                    <span className={this.props.bgColor === "red" ? "badge filter badge-red active":"badge filter badge-red"} data-color="red" onClick={() => {this.props.handleColorClick("red")}}></span>
                                    <span className={this.props.bgColor === "yellow" ? "badge filter badge-yellow active":"badge filter badge-yellow"} data-color="yellow" onClick={() => {this.props.handleColorClick("yellow")}}></span>
                                </div>
                                <div className="clearfix"></div>
                            </a>
                        </li>
                        <li className="header-title">Sidebar Images</li>
                        <li className={this.state["bgImage"] === imagine1 ? "active" : ""}>
                            <a className="img-holder switch-trigger"  onClick={ () => {this.setState({bgImage: imagine1});this.props.handleImageClick(imagine1)} }>
                                <img src={imagine1} alt="..."/>
                            </a>
                        </li>
                        <li className={this.state["bgImage"] === imagine2 ? "active" : ""}>
                            <a className="img-holder switch-trigger"  onClick={ () => {this.setState({bgImage: imagine2});this.props.handleImageClick(imagine2)} }>
                                <img src={imagine2} alt="..."/>
                            </a>
                        </li>
                        <li className={this.state["bgImage"] === imagine3 ? "active" : ""}>
                            <a className="img-holder switch-trigger"  onClick={ () => {this.setState({bgImage: imagine3});this.props.handleImageClick(imagine3)} }>
                                <img src={imagine3} alt="..."/>
                            </a>
                        </li>
                        <li className={this.state["bgImage"] === imagine4 ? "active" : ""}>
                            <a className="img-holder switch-trigger"  onClick={ () => {this.setState({bgImage: imagine4});this.props.handleImageClick(imagine4)} }>
                                <img src={imagine4} alt="..."/>
                            </a>
                        </li>

                        <li className="button-container">
                            <div className="">
                                <a href="https://www.creative-tim.com/product/now-ui-dashboard-react" target="_blank" className="btn btn-success btn-block btn-fill">Download free!</a>
                            </div>
                        </li>
                        <li className="button-container">
                            <div className="">
                                <a href="https://www.creative-tim.com/product/now-ui-dashboard-pro-react" target="_blank" className="btn btn-warning btn-block btn-fill">Buy Pro</a>
                            </div>
                        </li>
                        <li className="button-container">
                            <NavLink to={'/documentation'} className="btn btn-fill btn-info btn-block" activeClassName="active">
                                Documentation
                            </NavLink>
                        </li>

            			<li className="header-title" id="sharrreTitle">Thank you for sharing!</li>

                        <li className="button-container">
                            <FacebookShareButton url="http://lbd-pro-react.creative-tim.com"><FacebookIcon size={32} round={true}/></FacebookShareButton>
                            <TwitterShareButton url="http://lbd-pro-react.creative-tim.com" title="Light Bootstrap Dashboard React - Free Bootstrap Admin Template" hashtags={["react","bootstrap"]} via="creativetim"><TwitterIcon size={32} round={true}/></TwitterShareButton>
                        </li>
                        <li className="button-container">
                                <GitHubButton type="stargazers"
                                    namespace="creativetimofficial" repo="now-ui-dashboard-react"
                                />
                                <GitHubButton type="forks"
                                    namespace="creativetimofficial" repo="now-ui-dashboard-react"
                                />
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default FixedPlugin;
