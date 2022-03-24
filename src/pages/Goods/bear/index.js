import React from 'react'
import Button from '../../../componens/Button'
import './index.css'

import bear from '../../../assets/carousel/bear.jpg'
import beg from '../../../assets/carousel/beg.jpg'
import desk from '../../../assets/carousel/desk.jpg'
import dress from '../../../assets/carousel/dress.jpg'

const imgsUrl = [bear, beg, desk, dress];

function Bear () {

    const handleMouseEnter = () => {
        const button = document.getElementsByClassName('cant')[0];
        button.style.position = "relative";
        button.style.left = '70px';
        button.style.top = '-50px'
    }

    const handleMouseLeave = () => {
        const button = document.getElementsByClassName('cant')[0];
        button.style.position = "static";
    }

    return (
        <div className="good">
            <div className="imgs">
                <div className="imgs-main">
                    <img src={bear} style={{width: '300px', height: '300px'}}/>
                </div>
                <div className="imgs-all">
                    {imgsUrl.map((item) => (
                        <img src={item} style={{width: '70px', height: '70px'}}/>
                    ))}
                </div>
            </div>
            <div className="infor">
                <div className="infor-items">
                </div>
                <div className="infor-button">
                    <Button size="medium">加入购物车</Button>
                    <div className="button-cant">
                    <Button size="medium" MouseEnter={handleMouseEnter} MouseLeave={handleMouseLeave} className="cant">立即购买</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bear