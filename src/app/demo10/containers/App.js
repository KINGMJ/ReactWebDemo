/**
 * 容器组件实现过程
 * 1.先定义 mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中。
 * 2.定义 mapDispatchToProps 方法接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法。
 * 3.使用 connect() 创建 容器组件，并传入这两个函数。
 */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {increaseAction, decreaseAction} from '../actions/index';
import Counter from '../components/Counter';

class App extends Component {
    render() {
        const {count, onIncreaseClick, onDecreaseClick}=this.props;
        return (
            <Counter count={count} onIncreaseClick={onIncreaseClick} onDecreaseClick={onDecreaseClick}/>
        )
    }
}

//相当于store.getState()读取state
function mapStateToProps(state) {
    return {count: state.count}
}

//分发action，相当于store.dispatch(action)
function mapDispatchToProps(dispatch) {
    return {
        onIncreaseClick: () =>dispatch(increaseAction()),
        onDecreaseClick: () =>dispatch(decreaseAction())
    }
}

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
