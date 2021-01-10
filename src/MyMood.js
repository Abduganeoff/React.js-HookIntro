import useToggle from './hooks/useToggle';

function MyMood() {
    const [state, toggleMood] = useToggle('');

    return(
        <div>
            <h1 onClick={toggleMood}>My Mood: {state ? "Happy" : "Angry"}</h1>
        </div>
    )
}

export default MyMood;