import { useState, useEffect } from 'react'
import { useForm } from '../hooks/useForm'


export const FormWithCustomHook = () => {
    const { formState, onInputChange, onReset } = useForm({
        username: '',
        email: '',
        pass: ''
    })

    const { username, email, password } = formState;

    useEffect(() => {

    }, [formState])


    return (
        <>
            <h1>Formulario Hook Custom</h1>

            <hr />

            <input type="text" name='username' value={username} onChange={onInputChange} /> <br></br>
            <input type="email" name='email' value={email} onChange={onInputChange} /> <br />
            <input type="password" name='pass' value={password} onChange={onInputChange} />

            <button onClick={onReset}>Reset</button>

            {(username === 'dani') && <Message />}
        </>
    )
}
