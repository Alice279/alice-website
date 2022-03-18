import React from 'react'
import { useLocation } from 'react-router-dom'
import { UpSquareTwoTone } from '@ant-design/icons'
import useTheme from '../../hooks/useTheme'
import './index.css'

function Footer() {

    const { pathname } = useLocation()

    const { value: isDarkMode } = useTheme()

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'})
    }

    if (pathname == '/') {
        return null
    }
    return (
        <div className="footer">
            <div className="footer-conent">nihao</div>
            <div className="footer-arrow" onClick={handleClick}>
                {isDarkMode ?
                    <UpSquareTwoTone twoToneColor="#CD919E" style={{fontSize: '98px'}}/> :
                    <UpSquareTwoTone twoToneColor="#eb2f96" style={{fontSize: '98px'}}/>}
            </div>
        </div>
    )
}

export default Footer