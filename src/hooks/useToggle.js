import { useState } from 'react'

export default initialState => {
    const [state, setstate] = useState(initialState);
    const toggleState = () => {
        setstate(!state);
    }

    return [state, toggleState];
}