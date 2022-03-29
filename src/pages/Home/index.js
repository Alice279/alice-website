import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../componens/Button'
import Circle from '../../componens/Circle'
import './index.css'
import { cardContext } from '../App'
import Particles from 'react-tsparticles'

function Home() {

    const history = useHistory();

    const { active, setActive } = useContext(cardContext)
    const handleClick = (index) => {
        history.push('/about')
        let array = [false, false, false, false, false, false, false];
        array[index] = true;
        setActive(array)
    }

    return (
        <div className="home">
            <Particles 
            params={{
                particles: {
                    number: {
                        value: 1,
                        density: {
                            enable: true,
                            value_area: 10,
                        },
                    },
                    color: {
                        value: {r: 255, g: 230, b: 128}
                    },
                    shape: {
                        type: "star"
                    },
                    move: {
                        enable: true,
                        direction: "bottom",
                        speed: 0.7,
                    },
                    size: {
                        value: 2.7,
                    },
                    opacity: {
                        anim: {
                            enable: true,
                            speed: 1.5,
                            opacity_min: 0.07,
                        },
                    },
                },
                interactivity: {
                    events: {
                        onclick: {
                            enable: true,
                            mode: "push",
                        },
                    },
                    modes: {
                        push: {
                            particles_nb: 1,
                        },
                    },
                },
                retina_detect: true,
            }}/>
            <Circle className="circle" />
            <Button className="button" Click={handleClick} place="home">Come on!</Button>
        </div>
    )
}

export default Home