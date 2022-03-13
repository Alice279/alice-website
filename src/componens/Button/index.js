import React, { useMemo } from 'react'

function Button({
    className = '',
    size = 'medium',
    color = '',
    bgcolor = '',
    border = '',
    onClick,
    children,
    ...props
}) {
    const colorStyle = useMemo(() => {

    }, [])

    const sizeStyle = useMemo(() => {
        if (size == 'small') return {width: '60px', height: '20px'};
        if (size == 'medium') return {width: '90px', height: '30px'};
        if (size == 'large') return {width: '120px', height: '40px'}
    }, [size])

    const borderStyle = useMemo(() => {
        if (border == 'none') return
        if (border == 'hsla') return {border: '10px solid hsla(0, 0%, 100%, .5)'}
    }, [border])

    return (
        <button style={{color: 'red', backgroundColor: 'rosybrown',border: '10px solid hsla(0, 0%, 100%, .1)'}}>nihao</button>
    )
}

export default Button