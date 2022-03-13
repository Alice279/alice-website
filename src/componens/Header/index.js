import React, { useState } from 'react'
import { Link, Router } from 'react-router-dom'
import { StarTwoTone, DownCircleTwoTone } from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import './index.css'
import useTheme from '../../hooks/useTheme'
import { changeLanguage } from 'i18next'

function Header() {

    //暗黑高亮模式的切换
    const { value: isDarkMode, toggle: toggleMode } = useTheme()

    //这一块是头部导航的选择
    const [current, setCurrent] = useState('about');

    const handleClick = (e) => {
        console.log(e)
        setCurrent(e.key)
    }

    //颜色图标和语言选择图标的样式
    const style = {
        fontSize: '36px'
    }

    //切换语言
    const {t, i18n} = useTranslation()
    const toggleLanguage = () => {
        console.log(i18n.language)
        i18n.changeLanguage('en')
    }

    return (
        <div className="header">
            <div className="header-image">
                logo
            </div>
            
            <div>
                <Link to="/about">{t('About')}</Link> 
                <Link to="/goods">Goods</Link>
                <Link to="/message">Message</Link>
            </div>

            <div className="header-icon">
                <div onClick={toggleMode}>
                    {isDarkMode ? <StarTwoTone twoToneColor="#eb2f96" style={style} /> : <StarTwoTone twoToneColor="#1b2a96" style={style} />}
                </div>
                <div onClick={toggleLanguage}>
                    {isDarkMode ? <DownCircleTwoTone twoToneColor="#eb2f96" style={style} /> : <DownCircleTwoTone twoToneColor="#1b2a96" style={style} />}
                </div>
            </div>
        </div>
    )
}

export default Header