import React, {useMemo, useState} from 'react'
import { DownCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons'
import { Trans } from 'react-i18next'
import useTheme from '../../hooks/useTheme'
import './index.css'



function Card (props) {

    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(active => !active)
    }

    //箭头，颜色，形状
    const { value: isDarkMode } = useTheme()

    const icon = useMemo(() => {
        if (active) {
            if (isDarkMode) return (
                <DownCircleTwoTone twoToneColor="#CD919E" style={{fontSize: '36px'}}/>
            )
            return (
                <DownCircleTwoTone twoToneColor="#eb2f96" style={{fontSize: '36px'}}/>
            )
        } else {
            if (isDarkMode) return (
                <RightCircleTwoTone twoToneColor="#CD919E" style={{fontSize: '36px'}}/>
            )
            return (
                <RightCircleTwoTone twoToneColor="#eb2f96" style={{fontSize: '36px'}}/>
            )
        }
    }, [isDarkMode, active])

    //读取数据
    const {title, array} = props

    return (
        <div className="card" style={isDarkMode ? {border: '3px solid #CD919E'} : {border: '3px solid #eb2f96'}}>
            <div className="card-title" onClick={handleClick}>
                {icon}
                <div style={{margin: '0 12px'}}><Trans>{title}</Trans></div>
            </div>
            <div className={`card-content ${active === true ? `active` : ''}`}>
                {array.map((item, index) => (
                    <div className="card-item" key={item}>{index+1}. <Trans>{item}</Trans></div>
                ))}   
            </div>
        </div>
    )
}

export default Card