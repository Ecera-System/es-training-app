const redux = require('redux');
const createStore = redux.createStore;

// Define the initial state
const initialState = {
    counter: 0
};

// Define the reducer function
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === 'DECREMENT_COUNTER') {
        return {
            ...state,
            counter: state.counter - 1
        };
    }
    return state;
};

// Create the Redux store
const store = createStore(rootReducer);

// Dispatch actions to modify the state
store.dispatch({ type: 'INCREMENT_COUNTER' });
console.log(store.getState()); // Output: { counter: 1 }

store.dispatch({ type: 'DECREMENT_COUNTER' });
console.log(store.getState()); // Output: { counter: 0 }
