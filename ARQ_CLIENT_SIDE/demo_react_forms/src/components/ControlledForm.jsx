import { useState } from "react";

export function ControlledForm() {
    const [formData, setFormData] = useState({ name: "Luke Skywalker", jedi: true });

    const handleNameChange = (event) => setFormData({ ...formData, name: event.target.value });
    const handleJediChange = (event) => setFormData({ ...formData, jedi: event.target.checked });

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${formData.name} Jedi: ${formData.jedi}`);
    }

    return (
        <>
            <h1>Controlled Form</h1>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name:</p>
                        <input id="name" type="text" value={formData.name} onChange={handleNameChange} />
                    </label>
                    <label>
                        <p>Jedi:</p>
                        <input id="jedi" type="checkbox" checked={formData.jedi} onChange={handleJediChange} />
                    </label>
                </fieldset>
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}