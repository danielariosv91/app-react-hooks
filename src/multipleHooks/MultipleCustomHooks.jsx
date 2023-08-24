import React from 'react'
import { useFetch } from '../hooks/useFetch'
import { useCounter } from '../hooks/useCounter'

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/' + counter);

    const { author, quote } = !!data && data[0];


    return (
        <>
            <h1>Quotes BB</h1>

            {
                isLoading ?
                    (
                        <div>
                            Loading...
                        </div>

                    ) :
                    (
                        <blockquote>
                            <p>{quote}</p>

                            <p>{author}</p>
                        </blockquote>
                    )
            }


            <button onClick={() => increment(1)}>Next</button>
        </>
    )
}
