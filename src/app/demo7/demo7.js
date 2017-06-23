//嵌套路由
import React, {Component} from 'react';
import {Router, Route, hashHistory} from 'react-router';

import App from './Component/App';
import About from './Component/About';
import Repos from './Component/Repos';

class Demo7 extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="/repos" component={Repos}/>
                    <Route path="/about" component={About}/>
                </Route>
            </Router>
        )

    }
}
export default Demo7;
