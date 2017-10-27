import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
// import Popper from 'popper.js';

import App from 'containers/App/App';

import 'bootstrap/dist/css/bootstrap.css';
import 'assets/sass/now-ui-dashboard.css';
import 'assets/css/demo.css';

// Popper.Defaults.modifiers.computeStyle.gpuAcceleration = false;
// Popper.Defaults.modifiers.computeStyle.enabled = false;

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </HashRouter>
, document.getElementById('root'));
