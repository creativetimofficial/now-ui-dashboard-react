import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

import headerImg from 'assets/img/header.jpg';
import reactLogo from 'containers/Documentation/assets/img/reactlogo.png';
const headerBackground = {
    backgroundImage: 'url(' + headerImg + ')'
};

class Components extends Component {
    // constructor(props){
    //     super(props);
    //     this.handleScroll = this.handleScroll.bind(this);
    // }
    // handleScroll(){
    //     const windowsScrollTop  = window.pageYOffset;
    //     var navbar = ReactDOM.findDOMNode(this.refs.navbarColorOnScroll);
    //     var title = ReactDOM.findDOMNode(this.refs.navbarTitle);
    //     if(windowsScrollTop > 381){
    //         navbar.classList.remove("navbar-transparent");
    //         title.classList.remove("hidden");
    //     } else {
    //         navbar.classList.add("navbar-transparent");
    //         title.classList.add("hidden");
    //     }
    // }
    // componentDidMount() {
    //     window.addEventListener('scroll', this.handleScroll);
    // }
    render() {
        return (
            <div className="header-wrapper">
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
