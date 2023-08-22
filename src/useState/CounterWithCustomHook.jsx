import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    {/** se desestructura en llaves porque retorno un objeto */ }
    const { counter, increment, decrement, reset} = useCounter();

    return (
        <>
            <h1>Counter with custom Hook {counter}</h1>

            <button onClick={() => increment()}>+1</button>
            <button onClick={() => reset()}>Reset</button>
            <button onClick={() => decrement()}>-1</button>
        </>
    )
}
