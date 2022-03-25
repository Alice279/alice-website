import React from 'react'
import { useLocation } from 'react-router-dom'
import { UpSquareTwoTone } from '@ant-design/icons'
import { Trans } from 'react-i18next'
import useTheme from '../../hooks/useTheme'
import Button from '../Button'
import './index.css'
import gitDark from '../../assets/git_dark.png'
import wechatDark from '../../assets/wechat_dark.png'
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
            resolve('复制成功！')
        })
    }

    const tips = (e, value) => {
        const buttonText = e.target.innerHTML
        e.target.innerHTML = value;

        setTimeout(() => {
            e.target.innerHTML = buttonText;
        }, 1000)
        
    }


    if (pathname == '/') {
        return null
    }
    return (
        <div className="footer">
            <ul className="footer-basic">
                <li><Trans>Developer Information</Trans></li>
                <li><Trans>name</Trans>：<Trans>Alice</Trans></li>
                <li><Trans>school：BUPT</Trans></li>
            </ul>
            <div className="footer-copy">
                <div>
                    <span>We-chat</span>
                    <span>alicetian972</span>
                    <Button size="small" Click={(e) => handleCopy(e)} className="">
                        <Trans>copy wechat</Trans>
                    </Button>
                </div>
                <div>
                    <span>E-mail</span>
                    <span>1196271266@qq.com</span>
                    <Button size="small" Click={(e) => handleCopy(e)}>
                        <Trans>copy email</Trans>
                    </Button>
                </div>
            </div>
            <div className="footer-img">
                <a href="https://github.com/Alice279" target="_blank">
                    <img src={gitDark} alt="github" />
                </a>
                <a className="wechat" href="#" onClick={(e) => { e.preventDefault() }}>
                    <img src={wechatDark} alt="wechat" />
                    <img className="wechat-alice" src={wechatAlice} alt="wechat-alice" />
                </a>
            </div>
            <div className="footer-arrow" onClick={handleClick}>
                {isDarkMode ?
                    <UpSquareTwoTone twoToneColor="#CD919E" style={{ fontSize: '98px' }} /> :
                    <UpSquareTwoTone twoToneColor="#eb2f96" style={{ fontSize: '98px' }} />}
            </div>
        </div>
    )
}

export default Footer