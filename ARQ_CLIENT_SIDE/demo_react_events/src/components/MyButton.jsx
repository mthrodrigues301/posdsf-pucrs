export function MyButton() {
    function handleClick() {
        alert(`Button clicked!`);
    }

    return (
        <button id='button1' onClick={handleClick}>Click me</button>
    )
}