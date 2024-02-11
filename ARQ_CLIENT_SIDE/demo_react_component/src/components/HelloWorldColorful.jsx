export function HelloWorldColorful({ name, color }) {
    const textColor = color || 'black';

    return (
        <h1 style={{ color: textColor }}>Hello, {name}!</h1>
    );
}