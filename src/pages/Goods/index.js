import React from 'react'
import { Link, Route } from 'react-router-dom'
import Carousel from '../../componens/Carousel'
import './index.css'

import Bear from './bear'

import bear from '../../assets/carousel/bear.jpg'
import beg from '../../assets/carousel/beg.jpg'
import desk from '../../assets/carousel/desk.jpg'
import dress from '../../assets/carousel/dress.jpg'
import mouse from '../../assets/carousel/mouse.jpg'
import flower from '../../assets/carousel/flower.jpg'

const imgsUrl = [bear, beg, desk, dress, mouse, flower, bear, beg, desk, dress, beg];


function Goods() {
    var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className="goods">
            <Carousel items={items} active={0} />
            <div>
                {imgsUrl.map((item, index) => (
                    <Link to="/bear" key={index}>
                        <img src={item} style={{width: '90px', height: '90px'}}/>
                    </Link>
                ))}
            </div>

            

        </div>
    )
}

export default Goods