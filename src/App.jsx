import React, { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <h1>Counter</h1>
            <p>Current count: {count}</p>
            <button onClick={increment}>Increase</button>
        </div>
    );
};

export default App;
