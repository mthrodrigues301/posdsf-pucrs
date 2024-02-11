import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(actCounter => actCounter + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}