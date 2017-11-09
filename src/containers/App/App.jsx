import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Sidebar from 'components/Sidebar/Sidebar.jsx';
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';
import FixedPlugin from 'components/FixedPlugin/FixedPlugin.jsx';

import appRoutes from 'routes/app.jsx';

import image from 'assets/img/bg6.jpg';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            image: image,
            color: "blue",
            hasImage: true,
            fixedClasses: "dropdown show"
        };

        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleColorClick = this.handleColorClick.bind(this);
        this.handleHasImage = this.handleHasImage.bind(this);
        this.handleFixedClick = this.handleFixedClick.bind(this);
    }
    handleImageClick(image){
        this.setState({image: image});
    }
    handleColorClick(color){
        this.setState({color: color});
    }
    handleHasImage(hasImage){
        this.setState({hasImage: hasImage});
    }
    handleFixedClick(){
        if(this.state.fixedClasses === "dropdown"){
            this.setState({fixedClasses: "dropdown show"})
        } else {
            this.setState({fixedClasses: "dropdown"});
        }
    }
    componentDidUpdate(e){
        if(window.innerWidth < 993 && e.history.location.pathname !== e.location.pathname && document.documentElement.className.indexOf('nav-open') !== -1){
            document.documentElement.classList.toggle('nav-open');
        }
    }
    render(){
        return (
            <div className="wrapper">
                <Sidebar
                    routes={appRoutes}
                    {...this.props}
                    image={this.state.image}
                    hasImage={this.state.hasImage}
                    color={this.state.color}
                />
                <div className="main-panel">
                    <Header routes={appRoutes} {...this.props}/>
                    <div className="content">
                        <Switch>
                            {
                                appRoutes.map((prop,key) => {
                                    if(prop.redirect)
                                        return (
                                            <Redirect from={prop.path} to={prop.to} key={key}/>
                                        );
                                    return (
                                        <Route path={prop.path} component={prop.component}  key={key}/>
                                    );
                                })
                            }
                        </Switch>
                        <FixedPlugin
                            handleImageClick={this.handleImageClick}
                            handleColorClick={this.handleColorClick}
                            handleHasImage={this.handleHasImage}
                            bgColor={this.state["color"]}
                            bgImage={this.state["image"]}
                            handleFixedClick={this.handleFixedClick}
                            fixedClasses={this.state.fixedClasses}
                        />
                    </div>
                    <Footer {...this.props}/>
                </div>
            </div>
        );
    }
}

export default App;
