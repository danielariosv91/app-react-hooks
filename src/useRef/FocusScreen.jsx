import { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();


    const onClickFocus = () => {
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>

            <hr />

            <input ref={inputRef} type="text" placeholder='focus screen' />

            <button onClick={onClickFocus}>Set focus</button>
        </>
    )
}
