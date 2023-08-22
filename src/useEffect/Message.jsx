import React, { useEffect, useState} from 'react'

export const Message = () => {

    const [coords, setCoors] = useState(0)

    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
            setCoors({ x, y })
        }

        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, [])


    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(coords)}
        </>
    )
}
