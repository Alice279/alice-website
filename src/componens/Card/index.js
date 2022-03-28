import React, { useMemo, useContext, useEffect } from 'react'
import { DownCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons'
import { Trans } from 'react-i18next'
import useTheme from '../../hooks/useTheme'
import './index.css'
import { cardContext } from '../../pages/App'

import { Container, Row, Col } from 'react-bootstrap'



function Card(props) {

    //使用useState时，如果状态是一个对象，检测时对比的是引用地址，所以想改变必须使用一个新的对象
    //也就是不可以把对象的值在外面改变了之后再把该对象传给set函数
    const { active, setActive } = useContext(cardContext)
    const handleClick = (index) => {
        let array = [...active];
        let item = !active[index]
        array[index] = item;
        setActive(array)
    }

    // 读取数据
    const { title, array, index } = props

    //箭头，颜色，形状
    const { value: isDarkMode } = useTheme()

    const icon = useMemo(() => {
        if (active[index]) {
            if (isDarkMode) return (
                <DownCircleTwoTone twoToneColor="rgb(205,95,248)" style={{ fontSize: '36px' }} />
            )
            return (
                <DownCircleTwoTone twoToneColor="rgb(113,152,169)" style={{ fontSize: '36px' }} />
            )
        } else {
            if (isDarkMode) return (
                <RightCircleTwoTone twoToneColor="rgb(205,95,248)" style={{ fontSize: '36px' }} />
            )
            return (
                <RightCircleTwoTone twoToneColor="rgb(113,152,169)" style={{ fontSize: '36px' }} />
            )
        }
    }, [isDarkMode, active])

    //第一次渲染时，检测有没有展开的card 如果有就滑动到该 card 的位置
    function heightToTop(ele) {
        let rectObject = ele.getBoundingClientRect();
        return rectObject.top
    }

    useEffect(() => {
        let ele = document.getElementById('unfold');
        if (ele) {
            window.scrollTo({
                top: heightToTop(ele),
                behavior: 'smooth'
            })
        }
    }, [])

    return (
        <Col md={6} xl={4}>
            <div className="card" id={active[index] === true ? 'unfold' : ''}>
                <div className="card-title" onClick={() => handleClick(index)}>
                    {icon}
                    <div style={{ margin: '0 12px' }}><Trans>{title}</Trans></div>
                </div>
                <div className={`card-content ${active[index] === true ? `active` : ''}`}>
                    {array.map((item, index) => (
                        <div className="card-item" key={item}>{index + 1}. <Trans>{item}</Trans></div>
                    ))}
                </div>
            </div>
        </Col>
    )
}

export default Card