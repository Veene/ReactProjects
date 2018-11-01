import { createStore } from 'redux';

//action-generators
const incrementCount = (payload={}) => {
    return {
        type: 'INCREMENT', 
        incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
    } 
}
const decrementCount = (payload) => {
    return {
        type: 'DECREMENT',
        decrementBy: payload
    }
}
const resetCount = () => ({type: 'RESET'})


const store = createStore((state={ count: 0 }, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return {count : state.count + action.incrementBy}
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {count : state.count - decrementBy}
        case 'RESET':
            return {count : 0}
        default:
            return state
    }
})
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})
//Actions -object that gets sent to the store
store.dispatch(incrementCount({incrementBy: 5}));
// unsubscribe(); --> Just run this to stop subscribe similar to how you stop setInterval
store.dispatch(incrementCount());
store.dispatch({type: 'RESET'})
store.dispatch(decrementCount(10))

