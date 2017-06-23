import {INCREMENT, DECREMENT} from '../actions/index';

const initialState = {
    count: 0
};

export default(state = initialState, action)=> {
    const count = state.count;
    switch (action.type) {
        case INCREMENT:
            return {count: count + 1};
        case DECREMENT:
            return {count: count - 1};
        default:
            return state;
    }
}