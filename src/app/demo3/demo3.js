import './main.css';

import React, {Component} from 'react';
import {Router, Route, hashHistory} from 'react-router';
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';    //黑色主题
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import TabsSwipeable from './Component/home/TabsSwipeable';
import routes from './routes';  //路由配置
injectTapEventPlugin();

class Demo3 extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Router history={hashHistory}>
                    {routes}
                </Router>
            </MuiThemeProvider>
        )

    }
}
export default Demo3;
