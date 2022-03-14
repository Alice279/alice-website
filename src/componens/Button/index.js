import React, { useMemo } from 'react'
import useTheme from '../../hooks/useTheme'

function Button({
    size = 'large',
    onClick,
    children,
}) {

    const {value: isDarkMode} = useTheme()

    const colorStyle = useMemo(() => {
        if (isDarkMode) return { backgroundColor: '#CD919E', boxShadow: '0 0 20px #CD919E'}
        return { backgroundColor: '#eb2f96', boxShadow: '0 0 20px #eb2f96'}
    }, [isDarkMode])

    const sizeStyle = useMemo(() => {
        if (size == 'small') return {width: '90px', height: '30px'};
        if (size == 'medium') return {width: '120px', height: '40px'};
        if (size == 'large') return {width: '180px', height: '60px'};
    }, [size])

    const style = {
        borderRadius: '17px',
        border: 'none',

        ...sizeStyle,
        ...colorStyle
    }

    return (
        <button style={style}>{children}</button>
    )
}

export default Button