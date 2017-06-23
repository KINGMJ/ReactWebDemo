import React from 'react';
import {Route} from 'react-router';

import App from './Component/App';
import Home from './Component/home/Home';
import Post from './Component/Post';
import Message from './Component/Message';
import About from './Component/About';

export default (
    <Route component={App}>
        <Route path='/' component={Home}/>
        <Route path='/post' component={Post}/>
        <Route path='/message' component={Message}/>
        <Route path='/about' component={About}/>
    </Route>
);
