//展示组件通常可以使用无状态组件
import React, {Component} from 'react';

const Counter = (props)=> {
    const {count, onIncreaseClick, onDecreaseClick} = props;
    return (
        <div>
            <p>点击了{count}次</p>
            <button onClick={onIncreaseClick}>+</button>
            <button onClick={onDecreaseClick}>-</button>
        </div>
    )
};

export default Counter;


