import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Home from './containers/Home';
import Profile from './containers/Profile';
import Lesson from './containers/Lesson';

ReactDom.render(<div>
    <HashRouter>
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile} />
            <Route path="/lesson" component={Lesson} />
        </Switch>
    </HashRouter>
</div>, document.getElementById('root'));
