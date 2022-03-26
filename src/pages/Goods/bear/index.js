import React from 'react'

import Cargo from '../../../componens/Cargo'

import bear from '../../../assets/carousel/bear.jpg'
import bear1 from '../../../assets/carousel/bear1.jpg'
import bear2 from '../../../assets/carousel/bear2.jpg'
import bear3 from '../../../assets/carousel/bear3.jpg'


const imgs = [bear, bear1, bear2, bear3];

function Bear() {

    return (
        <Cargo imgs={imgs}/>
    )
}

export default Bear

//这个按钮这里，注意，移动的是 <Button />，但是事件回调函数是加在了 上面的 div 那里
//因为如果你 Enter Leave 函数和改变位置的都是同一个标签的话，你 Enter 之后他移动位置他就自动 Leave 了，就自己回来，自己出去，发生闪烁