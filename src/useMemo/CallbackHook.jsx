import React, { useState, useCallback } from 'react'
import { ShowIncremente } from './ShowIncremente'
//simport { useCounter } from '../hooks/useCounter'

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    {/** Memoriza funciones */ }
    const incrementFather = useCallback(
        () => {
            setCounter((counter) => counter + 1);
        },
        [],
    )


    // const incrementFather = () => {
    //     setCounter(counter + 1);
    // }

    return (
        <>
            <h1>useCallback Hook: {counter}</h1>

            <hr />

            <ShowIncremente increment={incrementFather} />
        </>
    )
}
