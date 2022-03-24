import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './index.scss'

import bear from '../../assets/carousel/bear.jpg'
import beg from '../../assets/carousel/beg.jpg'
import desk from '../../assets/carousel/desk.jpg'
import dress from '../../assets/carousel/dress.jpg'
import mouse from '../../assets/carousel/mouse.jpg'
import flower from '../../assets/carousel/flower.jpg'

const imgsUrl = [bear, beg, desk, dress, mouse, flower, bear, beg, desk, dress, beg]

class Carousel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items,
            active: this.props.active,
            direction: ''
        }
        this.rightClick = this.moveRight.bind(this)
        this.leftClick = this.moveLeft.bind(this)
        this.handleStop = this.handleStop.bind(this)
    }

    generateItems() {
        const items = []
        let level
        for (let i = this.state.active - 2; i < this.state.active + 3; i++) {
            let index = i
            if (i < 0) {
                index = this.state.items.length + i
            } else if (i >= this.state.items.length) {
                index = i % this.state.items.length
            }
            level = this.state.active - i
            items.push(<Item key={index} id={this.state.items[index]} level={level} />)
        }
        return items
    }

    moveLeft() {
        var newActive = this.state.active
        newActive--
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive,
            direction: 'left'
        })
    }

    moveRight() {
        var newActive = this.state.active
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right'
        })
    }

    timeout = null

    componentDidMount() {
        console.log(222)
        console.log(this.timeout)
        this.timeout = setInterval(() => {
            this.state.direction === 'left' ? this.moveLeft() : this.moveRight()
        }, 1000)
        console.log(this.timeout)
    }

    handleStop() {
        clearInterval(this.timeout)
    }

    handleGoon = () => {
        this.timeout = setInterval(() => {
            this.state.direction === 'left' ? this.moveLeft() : this.moveRight()
        }, 1000)
    }

    render() {
        return (
            <div id="carousel" className="noselect" onMouseOver={this.handleStop} onMouseLeave={this.handleGoon}>
                <div className="arrow arrow-left" onClick={this.leftClick}><i className="fi-arrow-left"></i></div>
                <ReactCSSTransitionGroup
                    transitionName={this.state.direction}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {this.generateItems()}
                </ReactCSSTransitionGroup>
                <div className="arrow arrow-right" onClick={this.rightClick}><i className="fi-arrow-right"></i></div>
            </div>
        )
    }

}

class Item extends Component {

    constructor(props) {
        super(props)
        this.state = {
            level: this.props.level
        }
    }

    render() {
        const className = 'item level' + this.props.level
        return (
            <div className={className}>
                {/* {this.props.id} */}
                <img className="images" src={imgsUrl[this.props.id]} />
            </div>
        )
    }
}


export default Carousel
