import React from 'react'
import { useLocation } from 'react-router-dom'
import { UpSquareTwoTone } from '@ant-design/icons'
import { useTranslation, Trans } from 'react-i18next'
import useTheme from '../../hooks/useTheme'
import Button from '../Button'
import './index.css'
import gitDark from '../../assets/git_dark.png'
import gitLight from '../../assets/git_light.png'
import wechatDark from '../../assets/wechat_dark.png'
import wechatLight from '../../assets/wechat_light.png'
import wechatAlice from '../../assets/wechat_alice.jpg'

function Footer() {

    const { pathname } = useLocation()

    const { value: isDarkMode } = useTheme()

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleCopy = (e) => {
        initPro(e)
            .then((value) => {
                tips(e, value)
            })
            .catch((err) => {
                alert('复制不成功，请手动复制')
            })
    }

    const initPro = (e) => {
        return new Promise((resolve, reject) => {
            const value = e.target.previousSibling.innerHTML;

            const textarea = document.createElement('textarea');
            textarea.value = value
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            resolve('success!')
        })
    }

    const tips = (e, value) => {
        const buttonText = e.target.innerHTML
        e.target.innerHTML = value;

        setTimeout(() => {
            e.target.innerHTML = buttonText;
        }, 1000)

    }

    const { t, i18n } = useTranslation()

    if (pathname == '/') {
        return null
    }
    return (
        <div className="footer">
            <div className="line"></div>
            <div className="footer-content">
                <ul className="footer-basic">
                    <li>{t('Developer')}</li>
                    <li>{t('Alice')}</li>
                    <li>{t('BUPT')}</li>
                </ul>
                <div className="footer-copy">
                    <div>
                        <span>{t('We-chat')}</span>
                        <span>alicetian972</span>
                        <Button size="small" Click={(e) => handleCopy(e)} className="">
                            {t('copy')}
                        </Button>
                    </div>
                    <div>
                        <span>{t('E-mail')}</span>
                        <span>1196271266@qq.com</span>
                        <Button size="small" Click={(e) => handleCopy(e)}>
                            {t('copy')}
                        </Button>
                    </div>
                </div>
                <div className="footer-img">
                    <a href="https://github.com/Alice279" target="_blank">
                        <img src={isDarkMode ? gitDark : gitLight} alt="github" />
                    </a>
                    <a className="wechat" href="#" onClick={(e) => { e.preventDefault() }}>
                        <img src={isDarkMode ? wechatDark : wechatLight} alt="wechat" />
                        <img className="wechat-alice" src={wechatAlice} alt="wechat-alice" />
                    </a>
                </div>
                <div className="footer-arrow" onClick={handleClick}>
                    {isDarkMode ?
                        <UpSquareTwoTone twoToneColor="rgb(205,95,248)" style={{ fontSize: '60px' }} /> :
                        <UpSquareTwoTone twoToneColor="rgb(113,152,169)" style={{ fontSize: '60px' }} />}
                </div>
            </div>
        </div>
    )
}

export default Footer