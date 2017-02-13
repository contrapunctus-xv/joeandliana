import React from 'react';
import { browserHistory, Route, Router } from 'react-router';
import { HomePage } from 'src/components';

const Routes = () => (
    <Router history={ browserHistory }>
        <Route path="/" component={ HomePage } />
    </Router>
);

export default Routes;
