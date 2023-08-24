import { useState, useMemo} from 'react'
import { useCounter } from "../hooks/useCounter"

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('...')
    }

    return `${iterationNumber} iteraciones`
}

export const MemoHook = () => {

    const { counter, increment } = useCounter(4000);
    const [show, setShow] = useState(true)

    const memorizeValue = useMemo(() => heavyStuff(counter), [])

    return (
        <>
            <h1>Counter:  <small>{counter}</small></h1>

            <hr />

            <h4>{memorizeValue}</h4>

            <button onClick={() => increment()}>+1</button>

            <button onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </>
    )
}
