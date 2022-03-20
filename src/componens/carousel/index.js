import Rect, { useEffect, useState } from 'react'
import { LeftCircleTwoTone, RightCircleTwoTone } from '@ant-design/icons'
import bear from '../../assets/carousel/bear.jpg'
import beg from '../../assets/carousel/beg.jpg'
import desk from '../../assets/carousel/desk.jpg'
import dress from '../../assets/carousel/dress.jpg'
import mouse from '../../assets/carousel/mouse.jpg'
import flower from '../../assets/carousel/flower.jpg'
import './index.css'

function Carousel() {

    // function Roll(distance){                                         //参数distance：滚动的目标点（必为图片宽度的倍数）
    //     clearInterval(img_ul.timer);                                     //每次运行该函数必须清除之前的定时器！
    //     var speed = img_ul.offsetLeft < distance ?  rate : (0-rate);     //判断图片移动的方向

    //     img_ul.timer = setInterval(function(){                           //设置定时器，每隔10毫秒，调用一次该匿名函数
    //         img_ul.style.left = img_ul.offsetLeft + speed + "px";        //每一次调用滚动到的地方 (速度为 speed px/10 ms)         
    //         var leave = distance - img_ul.offsetLeft;                    //距目标点剩余的px值      
    //         /*接近目标点时的处理，滚动接近目标时直接到达， 避免rate值设置不当时不能完整显示图片*/
    //         if (Math.abs(leave) <= Math.abs(speed)) {                    
    //             clearInterval(img_ul.timer);
    //             img_ul.style.left = distance + "px";
    //         }
    //     },10);
    // }

    // let len = ul.children.length;    //   7 图片的数量


    // let timer = null
    // let left = 0;

    // const qiehuan = () => {
    //     clearInterval(timer)
    //     timer = setInterval(() => {
    //         let ul = document.querySelector('ul'); //为什么这个 ul 不可以放到全局变量？

    //         if (left >= -1250) {
    //             left -= 250;
    //             ul.style.transition = 'left 250ms'
    //         } else {
    //             left = 0
    //             ul.style.transition = 'none'
    //             qiehuan();
    //         }

    //         ul.style.left = left + 'px'

    //     }, 1000)

    // }

    // useEffect(qiehuan, [])

    //自己设想的使用hooks的方法，有一些问题
    // const [direction, setDirection] = useState('left')
    // const [curimg, setCurimg] = useState(0);

    // const handleDirection = (e) => {
    //     let nextDrc = e.target.id
    //     if (nextDrc === 'left') {
    //         setCurimg(curimg => curimg + 1);
    //         console.log(curimg)
    //         if (curimg === 5) {
    //             setCurimg(0)
    //             //这两个连着写，useState会吞掉
    //             // setCurimg(1)
    //             // return
    //             // setCurimg(curimg => curimg + 1);
    //         }
    //         setDirection('left');
    //     } else {
    //         setCurimg(curimg => curimg - 1);
    //         setDirection('right');
    //     }
    //     // console.log(curimg)
    // }

    // useEffect(()=> {
    //     let ul = document.querySelector('ul');

    //     let left = curimg * -250;
    //     console.log(left)
    //     ul.style.left = left + 'px'
    //     if (curimg === 0) {
    //         ul.style.transition = 'none';
    //         console.log(2222)
    //         // setCurimg(1)
    //     } else {
    //         ul.style.transition = 'left 250ms';
    //     }
    // }, [curimg])




    // const [direction, setDirection] = useState('left')
    // const [curimg, setCurimg] = useState(0);
    let direction = 'left';
    let curimg = 0;
    // let ul = document.querySelector('ul');

    const handleDirection = (e) => {

        let nextDrc = e.target.id
        if (nextDrc === 'left') {
            curimg += 1;



            if (curimg === 6) {
                nextImg();
                curimg = 0;
            }
            direction = 'left';
            nextImg();
        } else {
            curimg -= 1;
            direction = 'right';
        }
    }

    const nextImg = () => {
        let ul = document.querySelector('ul');
        let left = curimg * -250;
        ul.style.transition = 'left 250ms';
        ul.style.left = left + 'px'

        
    }

    //为什么这里使用 useEffect 不管用了？

    // useEffect(() => {
    //     // console.log(curimg)
    //     let ul = document.querySelector('ul');

    //     let left = curimg * -250;
    //     ul.style.left = left + 'px'
    //     if (curimg === 0) {
    //         ul.style.transition = 'none';
    //     } else {
    //         ul.style.transition = 'left 250ms';
    //     }
    // }, [curimg])


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