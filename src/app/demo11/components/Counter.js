//展示组件通常可以使用无状态组件
import React, {Component} from 'react';

const Counter = (props)=> {
    return (
        <div>
            <p>点击了{props.count}次</p>
            <button onClick={props.increaseAction}>+</button>
            <button onClick={props.decreaseAction}>-</button>
        </div>
    )
};

export default Counter;


