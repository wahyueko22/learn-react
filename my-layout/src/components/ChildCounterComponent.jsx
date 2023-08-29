// ChildComponent.js

function ChildCounterComponent({ counter, onCounterChange }) {
    const incrementCounter = () => {
        const newCounter = counter + 1
        onCounterChange(newCounter)
    }

    return (
        <div>
            <button onClick={incrementCounter}>Increment</button>
        </div>
    )
}

export default ChildCounterComponent
