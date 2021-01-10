import useEmailForm from './hooks/useEmailForm';

function EmailForm() {
    const [email, handleChange, resetValue] = useEmailForm('');

    return(
        <div>
            <h1>Email: {email}</h1>
            <input
                type="text"
                onChange={handleChange}
                value={email}
            ></input>
            <button onClick={resetValue}>Reset Email!</button>
        </div>
    )
}

export default EmailForm;