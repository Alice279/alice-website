import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../../componens/Carousel'
import './index.css'

import bear from '../../assets/carousel/bear.jpg'
import beg from '../../assets/carousel/beg.jpg'
import bracelet from '../../assets/carousel/bracelet.jpg'
import desk from '../../assets/carousel/desk.jpg'
import dress from '../../assets/carousel/dress.jpg'
import eye from '../../assets/carousel/eye.jpg'
import flower from '../../assets/carousel/flower.jpg'
import hat from '../../assets/carousel/hat.jpg'
import mouse from '../../assets/carousel/mouse.jpg'
import pillow from '../../assets/carousel/pillow.jpg'


const imgs = [bear, beg, bracelet, desk, dress, eye, flower, hat, mouse, pillow];


function Goods() {
    // var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className="goods">
            <Carousel items={imgs} active={0} />
            <div className='show'>
                {imgs.map((item, index) => (
                    <Link to="/bear" key={index}>
                        <img src={item}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Goods