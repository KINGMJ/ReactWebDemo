import React, {Component, PropTypes} from 'react';

class Counter extends Component {
    static propTypes = {
        value: PropTypes.number.isRequired,
        onIncrement: PropTypes.func.isRequired,
        onDecrement: PropTypes.func.isRequired
    };

    render() {
        //通过解构赋值在这里就不需要用this.props.xxx了
        const {value, onIncrement, onDecrement} = this.props;
        return (
            <div>
                <p>点击了{value}次</p>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        )
    }
}

export default Counter;