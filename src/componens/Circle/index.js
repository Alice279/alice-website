import React from 'react'
import Block from '../Block'
import Button from '../Button'
import './index.css'

function Circle() {
    return (
        <div className="main">
            <div className="path">
                {/* <Button className="button">Come on!</Button> */}
                
                <div className="avatar">
                    <Block name="HTMLCSS"/>
                </div>
                <div className="avatar">
                    <Block name="JS"/>
                </div>
                <div className="avatar">
                    <Block name="React"/>
                </div>
                <div className="avatar">
                    <Block name="Browser"/>
                </div>
                <div className="avatar">
                    <Block name="Project"/>
                </div>
                <div className="avatar">
                    <Block name="Computer"/>
                </div>
                <div className="avatar">
                    <Block name="Others"/>
                </div>
            </div>
        </div>
    )
}

export default Circle