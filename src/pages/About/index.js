import React from 'react'
import Card from '../../componens/Card'
import './index.css'

function About () {

    const browser = ['aaa', 'bbb', 'ccc'];
    return (
        <div className="about">
            <Card title="Browser" array={browser}/>
        </div>
    )
}

export default About