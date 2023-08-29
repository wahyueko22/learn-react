// ParentComponent.js
import { useState } from 'react'
import ChildCounterComponent from './ChildCounterComponent'

function ParentCounterComponent() {
    const [counter, setCounter] = useState(0)

    const handleCounterChange = (newCounter) => {
        setCounter(newCounter)
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <ChildCounterComponent
                counter={counter}
                onCounterChange={handleCounterChange}
            />
        </div>
    )
}

export default ParentCounterComponent
