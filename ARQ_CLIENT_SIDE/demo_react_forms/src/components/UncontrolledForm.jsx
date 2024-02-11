import { useRef } from "react";
export function UncontrolledForm() {
    const nameInputRef = useRef();
    const jediInputRef = useRef();
    const nameDafault = "Luke Skywalker";
    const jediInputDefault = true;

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${nameInputRef.current.value} Jedi: ${jediInputRef.current.checked}`);
    }

    return (
        <>
            <h1>Uncontrolled Form</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name:</p>
                        <input id="name" type="text" defaultValue={nameDafault} ref={nameInputRef} />
                    </label>
                    <label>
                        <p>Jedi:</p>
                        <input id="jedi" type="checkbox" defaultChecked={jediInputDefault} ref={jediInputRef} />
                    </label>
                </fieldset>
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}