import Rect, { useEffect, useState, useRef } from 'react'
import { LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons'
import bear from '../../assets/carousel/bear.jpg'
import beg from '../../assets/carousel/beg.jpg'
import desk from '../../assets/carousel/desk.jpg'
import dress from '../../assets/carousel/dress.jpg'
import mouse from '../../assets/carousel/mouse.jpg'
import flower from '../../assets/carousel/flower.jpg'
import './index.css'

function Carousel() {

    // //自己设想的使用hooks的方法，有一些问题
    // const [direction, setDirection] = useState('left')
    // const [curimg, setCurimg] = useState(0);

    // const handleDirection = (e) => {
    //     let nextDrc = e.target.id
    //     if (nextDrc === 'left') {
    //         setCurimg(curimg => curimg - 1);
    //         if (curimg === 0) {
    //             let ul = document.querySelector('ul');
    //             ul.style.transition = 'none';
    //             ul.style.left = '1500px'
    //             setCurimg(6)
    //         }
    //         setDirection('left');
    //     } else {
    //         console.log(curimg)
    //         setCurimg(curimg => curimg + 1);
    //         console.log(curimg)
    //         nextImg();
    //         console.log(curimg)
    //         if (curimg === 6) {
    //             let ul = document.querySelector('ul');
    //             // ul.style.transition = 'none';
    //             ul.style.left = '0px'
    //             setCurimg(0);
    //             console.log(curimg)
    //         }
    //         setDirection('right');
    //     }
    // }

    // const nextImg = () => {
    //     console.log(123)
    //     let ul = document.querySelector('ul');

    //     let left = curimg * -250;
    //     // console.log(left)
    //     ul.style.left = left + 'px'
    //     // if ( curimg === 0) {
    //     //     ul.style.transition = 'none';   //这个不是 curimg = 0 时没效果，而是从其它值变成 0 的这个过程没效果
    //     // } else {
    //         ul.style.transition = 'left 250ms';
    //     // }
    // }

    // useEffect(()=> {
    //     console.log(123)
    //     let ul = document.querySelector('ul');

    //     let left = curimg * -250;
    //     // console.log(left)
    //     ul.style.left = left + 'px'
    //     // if ( curimg === 0) {
    //     //     ul.style.transition = 'none';   //这个不是 curimg = 0 时没效果，而是从其它值变成 0 的这个过程没效果
    //     // } else {
    //         ul.style.transition = 'left 250ms';
    //     // }
    // }, [curimg])




       //自己设想的使用hooks的方法，有一些问题
    // const [direction, setDirection] = useState('left')
    // const [curimg, setCurimg] = useState(0);
    let curimg = useRef(0);

    const handleDirection = (e) => {
        let nextDrc = e.target.id

        let ul = document.querySelector('ul');
        ul.style.transition = 'left 250ms';

        if (nextDrc === 'left') {
            curimg.current = curimg.current - 1;
            if (curimg.current === 0) {
                let ul = document.querySelector('ul');
                ul.style.transition = 'none';
                ul.style.left = '1500px'
                curimg.current = 6;
            }
            // setDirection('left');
        } else {
            curimg.current = curimg.current + 1;
            console.log(curimg.current)
            // nextImg();

            let left = curimg.current * -250;
            ul.style.left = left + 'px'

            if (curimg.current === 7) {
                // let ul = document.querySelector('ul');
                ul.style.transition = 'none';
                ul.style.left = '0px'
                curimg.current = 0;
            }
        }
    }

    const nextImg = () => {
        console.log(123)
        let ul = document.querySelector('ul');
        ul.style.transition = 'left 250ms';


        let left = curimg.current * -250;
        // console.log(left)
        ul.style.left = left + 'px'
        // if ( curimg === 0) {
        //     ul.style.transition = 'none';   //这个不是 curimg = 0 时没效果，而是从其它值变成 0 的这个过程没效果
        // } else {
        // }
    }


    return (
        <div className="carousel">
            <div className="carousel-top">
                <div id="left" onClick={(e) => handleDirection(e)} >
                    {/* <LeftCircleTwoTone style={{ fontSize: '36px' }} /> */}
                    ⇦
                </div>
                <div className="gallery">
                    <ul className="images">
                        <li><img src={flower} /></li>
                        <li><img src={bear} /></li>
                        <li><img src={beg} /></li>
                        <li><img src={desk} /></li>
                        <li><img src={dress} /></li>
                        <li><img src={mouse} /></li>
                        <li><img src={flower} /></li>
                    </ul>
                </div>
                <div id="right" onClick={(e) => handleDirection(e)}>
                    ⇨
                </div>
            </div>
            <div className="dots"></div>
        </div>
    )
}


// /*获取HTML中的对象*/
// var parent = document.getElementById("parent");
// var img_ul = document.getElementById("img_ul");
// var litCir_ul = document.getElementById("litCir_ul");
// var buttons = document.getElementById("buttons");
// var cLis =litCir_ul.children;

// var len = img_ul.children.length;     //图片张数
// var width = parent.offsetWidth;       //每张图片的宽度
// var rate = 15;                        //一张图片的切换速度， 单位为px
// var times = 1;                        //切换速度的倍率
// var gap = 2000;                       //自动切换间隙， 单位为毫秒
// var timer = null;                     //初始化一个定时器
// var picN = 0;                         //当前显示的图片下标
// var cirN = 0;                         //当前显示图片的小圆点下标
// var temp;

export default Carousel