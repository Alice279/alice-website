import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
        console.log(e.target.id)  //合成事件，e.target是目标对象，还有一个currentTarget
        setCurrent(e.target.id)
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

    const toggleBord = (event) => {
        const bord = document.getElementsByClassName('change-language')[0];
        let style = bord.style.display
        bord.style.display = style == 'none' ? 'block' : 'none';
    }

    const { pathname } = useLocation();

    if (pathname === "/") {
        return null
    } else {
        return (
            <div className="header">
                <div className="header-image">
                    <Link to="/">
                        {isDarkMode ?
                            <SmileTwoTone twoToneColor="#CD919E" style={style} /> :
                            <SmileTwoTone twoToneColor="#eb2f96" style={style} />}
                    </Link>
                </div>

                <div className="header-links ">
                    <Link className={`nav-link ${current == 'about' ? 'active' : ''}`}
                        to="/about" id="about" onClick={handleClick}>
                        <Trans>About</Trans>
                    </Link>
                    <Link className={`nav-link ${current == 'goods' ? 'active' : ''}`} to="/goods" id="goods" onClick={handleClick}>{t('Goods')}</Link>
                    <Link className={`nav-link ${current == 'message' ? 'active' : ''}`} to="/message" id="message" onClick={handleClick}>{t('Message')}</Link>
                </div>

                <div className="header-icon">
                    <div className="icon-mode" onClick={toggleMode}>
                        {isDarkMode ?
                            <StarTwoTone twoToneColor="#CD919E" style={style} /> :
                            <StarTwoTone twoToneColor="#eb2f96" style={style} />}
                    </div>
                    <div onClick={toggleBord}>
                        {isDarkMode ?
                            <DownCircleTwoTone twoToneColor="#CD919E" style={style} /> :
                            <DownCircleTwoTone twoToneColor="#eb2f96" style={style} />}

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
}

export default Header

//我这里判定选中的哪个使用的hook，也可以通过windows地址来判断，见下方
// const isCommunityRoute = typeof window !== `undefined` && window.location.href.indexOf('/community') >= 0
//链接这里 还有些问题，垂直居中问题和颜色问题