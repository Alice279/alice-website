import React, { useState } from 'react'
import Button from '../Button'
import './index.css'


function Cargo(props) {

    const {imgs, details} = props

    const [curImg, setCurImg] = useState(0)

    const handleMouseEnterButton = () => {
        const button = document.getElementsByClassName('cant')[0];
        button.style.position = "relative";
        button.style.left = '70px';
        button.style.top = '-50px'
    }

    const handleMouseLeaveButton = () => {
        const button = document.getElementsByClassName('cant')[0];
        button.style.position = "static";
    }

    const handleMouseEnterImg = () => {
        const bigImg = document.getElementsByClassName('imgs-big')[0];
        bigImg.style.display = "block";
        const shadowEle = document.getElementById("mouse-shadow");
        shadowEle.style.display = "block";
    }

    const handleMouseLeaveImg = () => {
        const bigImg = document.getElementsByClassName('imgs-big')[0];
        bigImg.style.display = "none";
        const shadowEle = document.getElementById("mouse-shadow");
        shadowEle.style.display = "none";
    }

    const handleMouseMove = (event) => {
        let _event = event || window.event;  //兼容多个浏览器的event参数模式

        //总盒子
        const goodEle = document.getElementsByClassName('good')[0];
        //小图盒子
        const boxSmall = document.getElementsByClassName("imgs-main")[0];
        //浮动块
        const shadowEle = document.getElementById("mouse-shadow");
        //大图盒子
        const boxBig = document.getElementsByClassName("imgs-big")[0];
        //大图图片
        const bigImage = document.getElementById("big-img");
        //
        const imgs = document.getElementsByClassName("imgs")[0];

        //获取鼠标相对于小图的位置=鼠标X轴-大容器的offsetLeft-小盒子的left-浮动块的一半
        let left = _event.clientX - imgs.offsetLeft - shadowEle.offsetWidth / 2;
        let top = _event.clientY - goodEle.offsetTop - shadowEle.offsetHeight / 2;

        //判断当浮动块在四条边的时候
        if (left < 0) {
            left = 0;
        } else if (left > (boxSmall.offsetWidth - shadowEle.offsetWidth)) {
            left = boxSmall.offsetWidth - shadowEle.offsetWidth;
        }

        if (top < 0) {
            top = 0;
        } else if (top > (boxSmall.offsetHeight - shadowEle.offsetHeight)) {
            top = boxSmall.offsetHeight - shadowEle.offsetHeight;
        }

        //获取大图的位置
        let bigx = left / (boxSmall.offsetWidth - shadowEle.offsetWidth);
        bigImage.style.left = -bigx * (bigImage.offsetWidth - boxBig.offsetWidth) + "px";

        let bigy = top / (boxSmall.offsetHeight - shadowEle.offsetHeight);
        bigImage.style.top = -bigy * (bigImage.offsetHeight - boxBig.offsetHeight) + "px";

        //使鼠标在浮动块中间
        shadowEle.style.left = left + "px";
        shadowEle.style.top = top + "px";
    }

    const handleChangeImg = (e) => {
        setCurImg(e.target.id)
    }

    return (
        <div className="good">
            <div className="imgs">
                <div className="imgs-main" onMouseOver={handleMouseEnterImg} onMouseLeave={handleMouseLeaveImg} onMouseMove={(event) => handleMouseMove(event)}>
                    <div id="mouse-shadow"></div>
                    <img src={imgs[curImg]} />
                    <div className="imgs-big">
                        <img src={imgs[curImg]} id="big-img"/>
                    </div>
                </div>
                <div className="imgs-all">
                    {imgs.map((item, index) => (
                        <img src={item} key={index} id={index} onClick={(e) => handleChangeImg(e)}/>
                    ))}
                </div>
            </div>
            <div className="infor">
                <div className="infor-items">
                </div>
                <div className="infor-button">
                    <Button size="medium">加入购物车</Button>
                    <div className="button-cant" onMouseEnter={handleMouseEnterButton} onMouseLeave={handleMouseLeaveButton} onMouseMove={handleMouseEnterButton}>
                        <Button size="medium" className="cant">立即购买</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cargo

//这个按钮这里，注意，移动的是 <Button />，但是事件回调函数是加在了 上面的 div 那里
//因为如果你 Enter Leave 函数和改变位置的都是同一个标签的话，你 Enter 之后他移动位置他就自动 Leave 了，就自己回来，自己出去，发生闪烁