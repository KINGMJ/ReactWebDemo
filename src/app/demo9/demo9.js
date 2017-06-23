/**
 * Redux Counter demo
 * 一个最简单的Redux例子,没有使用到react-redux库
 * 1.实现reducer
 * 2.实现组件
 * 3.创建store，使用store的dispatch方法传入一个action，从而更新state
 * 4.通过store的subscribe方法注册监听器
 */
import React, {Component} from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import Counter from './components/Counter';
import counter from './reducer/index';

const store = createStore(counter);

const listener = ()=> render(
    <Counter
        value={store.getState()}
        onIncrement={()=>store.dispatch({type:'INCREMENT'})}
        onDecrement={()=>store.dispatch({type:'DECREMENT'})}
    />,
    document.getElementById('container')
);

listener();
store.subscribe(listener);

