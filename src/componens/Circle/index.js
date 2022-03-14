import React from 'react'
import Block from '../Block'

function Circle() {
    return (
        <div className="main">
            <div className="path">
                <img className="logo" src="./static/vue-logo.png" />
                <Block name="React"/>
                <div className="avatar">
                    <span>Evan You</span>
                    <img src="./static/Evan.jpeg" />
                </div>
                <div className="avatar">
                    <span>Damian Dulisz</span>
                    <img src="./static/Dulisz.jpeg" />
                </div>
                <div className="avatar">
                    <span>defcc</span>
                    <img src="./static/defcc.png" />
                </div>
                <div className="avatar">
                    <span>Edd Yerburgh</span>
                    <img src="./static/Yerburgh.png" />
                </div>
                <div className="avatar">
                    <span>Sarah Drasner</span>
                    <img src="./static/Drasner.jpeg" />
                </div>
            </div>
        </div>
    )
}

export default Circle