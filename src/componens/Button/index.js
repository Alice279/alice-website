import React, { useMemo } from 'react'
import useTheme from '../../hooks/useTheme'

function Button({
    size = 'large',
    place = 'others',
    className = '',
    Click,
    children,
}) {

    const { value: isDarkMode } = useTheme()

    const colorStyle = useMemo(() => {
        if (place == 'home') {
            return { backgroundColor: '#CD919E', boxShadow: '0 0 20px #CD919E' }
        } else {
            if (isDarkMode) return { backgroundColor: 'rgb(205,95,248)', boxShadow: '0 0 20px rgb(205,95,248)' }
            return { backgroundColor: '#eb2f96', boxShadow: '0 0 20px #eb2f96' }
        }
    }, [isDarkMode, place])

    const sizeStyle = useMemo(() => {
        if (size == 'xsmall') return {width: '39px', height: '39px'};
        if (size == 'small') return { width: '90px', height: '30px' };
        if (size == 'medium') return { width: '120px', height: '40px' };
        if (size == 'large') return { width: '180px', height: '60px' };
    }, [size])

    const style = {
        borderRadius: '17px',
        border: 'none',
        cursor: 'pointer',
        
        ...sizeStyle,
        ...colorStyle
    }

    return (
        <button className={className} style={style} onClick={Click}>{children}</button>
    )
}

export default Button