import React from 'react'
import Block from '../Block'
import './index.css'

function Circle() {

    const datas = ["HTMLCSS", "JS", "React", "Browser", "Project", "Computer", "Others"];

    return (
        <div className="main">
            <div className="path">

                {
                    datas.map((item, index) => (
                        <div className="avatar" key={item}>
                            <Block name={item} index={index}/>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default Circle