/**
 * Redux Counter demo2
 * 使用react-redux库搭配React实现，步骤：
 * 1.实现展示组件：通常用来展现
 * 2.实现action和action创建函数
 * 2.实现reducer
 * 3.实现容器组件
 * 4.传入store：通过 <Provider>来让所有容器组件都可以访问 store，而不必显示地传递它。只需要在渲染根组件时使用即可。
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

