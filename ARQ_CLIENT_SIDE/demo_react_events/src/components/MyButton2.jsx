export function MyButton2() {
    function handleClick(event) {
        event.stopPropagation();
        alert(`Clicked on ${event.currentTarget.id}`);
    }

    return (
        <button id='button2' onClick={handleClick}>Click me</button>
    )
}