import { useState } from 'react';

function Counter() {
    const [state, setstate] = useState(0);
    const Click = () => {
        setstate(state + 1);
    }

    return(
        <div>
            <h1>Counter: {state}</h1>
            <button onClick={Click}>Click Me!</button>
        </div>
    )
}

export default Counter;