const initialState = 0;

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + action.value;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}
export default CounterReducer;
