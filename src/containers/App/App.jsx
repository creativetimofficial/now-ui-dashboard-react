import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Sidebar from 'components/Sidebar/Sidebar.jsx';
import Header from 'components/Header/Header.jsx';
import Footer from 'components/Footer/Footer.jsx';

import appRoutes from 'routes/app.jsx';

class App extends React.Component{
    render(){
        return (
            <div className="wrapper">
                <Sidebar routes={appRoutes} {...this.props}/>
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
                    </div>
                    <Footer {...this.props}/>
                </div>
            </div>
        );
    }
}

export default App;
