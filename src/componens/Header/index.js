import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { StarTwoTone, DownCircleTwoTone, SmileTwoTone } from '@ant-design/icons'
import { useTranslation, Trans } from 'react-i18next'
import './index.css'
import useTheme from '../../hooks/useTheme'

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
    const { t, i18n } = useTranslation()
    const toggleLanguage = (lng) => {
        // console.log(i18n.language)
        i18n.changeLanguage(lng)
    }
    const languages = ['en', 'zh'];

    return (
        <div className="header">
            <div className="header-image">
                <Link to="/">
                    <SmileTwoTone />
                </Link>
            </div>

            <div className="header-links ">
                <Link to="/about">{t('About')}</Link>
                <Link to="/goods">{t('Goods')}</Link>
                <Link to="/message">{t('Message')}</Link>
            </div>

            <div className="header-icon">
                <div onClick={toggleMode}>
                    {isDarkMode ?
                        <StarTwoTone twoToneColor="#eb2f96" style={style} /> :
                        <StarTwoTone twoToneColor="#1b2a96" style={style} />}
                </div>
                <div>
                    {isDarkMode ?
                        <DownCircleTwoTone twoToneColor="#eb2f96" style={style} /> :
                        <DownCircleTwoTone twoToneColor="#1b2a96" style={style} />}

                    <div className="change-language">
                        {languages.map((lng) => (
                            <div key={lng} onClick={() => toggleLanguage(lng)}>
                                <Trans>{lng}</Trans>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header