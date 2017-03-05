import React from 'react';
import { browserHistory, Route, Router } from 'react-router';
import { HomePage, OurStory, Navigation, ContactUs, FAQ, WeddingDayInfo } from 'src/components';

const Routes = () => (
    <Router history={ browserHistory }>
        <Route component={ Navigation }>
            <Route path="/" component={ HomePage }/>
            <Route path="/our-story" component={ OurStory }/>
            <Route path="/contact-us" component={ ContactUs } />
            <Route path="/faq" component={ FAQ } />
            <Route path="/wedding-day-info" component={ WeddingDayInfo } />
        </Route>
    </Router>
);

export default Routes;
