import React from 'react'
import Card from '../../componens/Card'
import './index.css'
// import {cardContext} from '../App'

function About () {

    const datas = {
        htmlcss : ['sss', 'c', 'd'],
        js : ['dd', 'gg', 'f'],
        react : ['dd', 'gg', 'f'],
        browser : ['aaa', 'bbb', 'ccc'],
        project : ['dd', 'gg', 'f'],
        computer : ['dd', 'gg', 'f'],
        others : ['dd', 'gg', 'f']
    }

    return (
        <div className="about">
            {Object.keys(datas).map((item, index) => (
                <Card key={item} title={item} array={datas[item]} index={index}/>
            ))}
        </div>
    )
}

export default About