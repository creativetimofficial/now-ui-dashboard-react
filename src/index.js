import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

import App from 'containers/App/App';

import 'bootstrap/dist/css/bootstrap.css';
import 'assets/sass/now-ui-dashboard.css';
import 'assets/css/demo.css';

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </Router>
, document.getElementById('root'));
