import React, { useState } from 'react'
import './index.css'
import { Menu } from 'antd'

function Header() {

    const [current, setCurrent] = useState('about');

    const handleClick = (e) => {
        console.log(e)
        setCurrent(e.key)
    }

    return (
        <div>
        <Menu mode="horizontal" selectedKeys={[current]} onClick={handleClick}>
            <Menu.Item key="about">
                About
            </Menu.Item>
            <Menu.Item key="goods">
                Goods
            </Menu.Item>
            <Menu.Item key="message">
                message
            </Menu.Item>
        </Menu>
        </div>
    )
}

export default Header