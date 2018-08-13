import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

import './common/rem.js'
import './common/reset.less'

import Home from './containers/Home';
import Profile from './containers/Profile';
import Lesson from './containers/Lesson';
import TabBar from './components/TabBar'

ReactDom.render(<div>
    <HashRouter>
        <div>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/lesson" component={Lesson} />
            </Switch>
            <TabBar />
        </div>
    </HashRouter>
</div>, document.getElementById('root'));
