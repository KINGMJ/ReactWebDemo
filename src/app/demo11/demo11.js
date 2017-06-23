/**
 * Redux Counter demo3
 * 唯一与demo10不同的是这里使用了bindActionCreators方法
 */
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './containers/App';
import app from './reducers/index';

const store = createStore(app);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('container')
);

