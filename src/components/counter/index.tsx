import React from "react";
import "./counter.scss";

const Counter = () => {
    const [count, setCount] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return (
        <div className='counter'>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;
