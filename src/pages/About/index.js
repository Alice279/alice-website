import React from 'react'
import Card from '../../componens/Card'
import './index.css'
// import {cardContext} from '../App'

import { Container, Row, Col } from 'react-bootstrap'

function About() {

    const datas = {
        htmlcss: ['sss', 'c', 'd'],
        js: ['dd', 'gg', 'f'],
        react: ['dd', 'gg', 'f'],
        browser: ['aaa', 'bbb', 'ccc'],
        project: ['dd', 'gg', 'f'],
        computer: ['dd', 'gg', 'f'],
        others: ['dd', 'gg', 'f']
    }

    return (
        <section>
            <div className="about">
                <Container>
                    <Row>
                        {Object.keys(datas).map((item, index) => (
                            <Card key={item} title={item} array={datas[item]} index={index} />
                        ))}
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default About

// 这里放了一个section，后面的about才能被内容撑开，不晓得为啥，可能和Container有关系