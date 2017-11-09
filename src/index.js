import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'assets/sass/now-ui-dashboard.css';
import 'assets/css/demo.css';

import indexRoutes from 'routes/index.jsx';

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            {
                indexRoutes.map((prop,key) => {
                    return (
                        <Route path={prop.path} component={prop.component}  key={key}/>
                    );
                })
            }
        </Switch>
    </Router>
, document.getElementById('root'));
