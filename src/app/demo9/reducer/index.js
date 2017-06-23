//reducer 只是一个接收 state 和 action，并返回新的 state 的函数。
export default (state = 0, action)=> {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}