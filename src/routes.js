import React from 'react';
import { browserHistory, Route, Router } from 'react-router';
import { HomePage, Navigation } from 'src/components';

const Routes = () => (
    <Router history={ browserHistory }>
        <Route component={ Navigation }>
            <Route path="/" component={ HomePage } />
        </Route>
    </Router>
);

export default Routes;
