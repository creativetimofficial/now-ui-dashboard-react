import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from 'containers/App/App';

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </HashRouter>
, document.getElementById('root'));
