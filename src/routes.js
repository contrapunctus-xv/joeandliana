import React from 'react';
import { browserHistory, Route, Router } from 'react-router';
import { HomePage, OurStory, Navigation } from 'src/components';

const Routes = () => (
    <Router history={ browserHistory }>
        <Route component={ Navigation }>
            <Route path="/" component={ HomePage }/>
            <Route path="/our-story" component={ OurStory }/>
            <Route path="/contact-us" component={ ContactUs } />
        </Route>
    </Router>
);

export default Routes;
