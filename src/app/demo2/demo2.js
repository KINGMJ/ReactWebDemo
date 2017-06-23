//react-router example
import './main.css';
import React, {Component} from 'react';
import {Router, Route, hashHistory} from 'react-router';

import App from './Component/App';
import About from './Component/About';
import Repos from './Component/Repos';

class Demo2 extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}/>
                <Route path="/repos" component={Repos}/>
                <Route path="/about" component={About}/>
            </Router>
        )

    }
}
export default Demo2;
