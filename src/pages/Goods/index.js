import React from 'react'
import Carousel from '../../componens/carousel'
import './index.css'



function Goods () {
    var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div className="goods">
            <Carousel items={items} active={0}/>
        </div>
    )
}

export default Goods