import Rect, { useEffect } from 'react'
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



    useEffect(() => {
        let left = 0;
        setInterval(() => {
            let ul = document.querySelector('ul');

            if (left >= -1250) {
                left -= 250;
                ul.style.transition = 'left 250ms'
            } else {
                left = 0
                ul.style.transition = 'none'
            }
            
            
            ul.style.left = left + 'px'

        }, 3000)

    }, [])



    return (
        <div className="carousel">
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