//action
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

//action创建函数
export function increaseAction() {
    return {type: INCREMENT};
}
export function decreaseAction() {
    return {type: DECREMENT}
}
