import { useState, useEffect } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'danii',
        email: 'dani@correo.com'
    })

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        {/** Mantenemos los valores antiguos y cambiamos los valores */ }
        setFormState({
            ...formState,
            [name]: value
        })
    }


    /**  El segundo parametro es la condición de cuando quiero disparar el user effect */
    /**  Si dejo un [] el hooker se dispará solo una vez cuando el componente se renderiza */
    /**  Si necesito disparar cada vez que el fomurlario tiene un cambio, el formstate va en el parametro*/
    useEffect(() => {

    }, [formState])


    return (
        <>
            <h1>Formulario simple</h1>

            <hr />

            <input type="text" name='username' value={username} onChange={onInputChange} /> <br></br>
            <input type="email" name='email' value={email} onChange={onInputChange} />

            {(username === 'dani') && <Message />}
        </>
    )
}
