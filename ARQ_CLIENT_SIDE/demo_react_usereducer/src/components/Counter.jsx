import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "increment": {
            return { count: state.count + action.value };
        }
        case "decrement": {
            return { count: state.count - 1 };
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`);
        }
    }
}

export function Counter() {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleClickIncrement() {
        dispatch({ type: "increment", value: 1 });
    }

    function handleClickDecrement() {
        dispatch({ type: "decrement" });
    }

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={handleClickIncrement}>Increment</button>
            <button onClick={handleClickDecrement}>Decrement</button>
        </div>
    );
}