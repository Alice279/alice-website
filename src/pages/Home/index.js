import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../componens/Button'
import Circle from '../../componens/Circle'
import './index.css'
import { cardContext } from '../App'

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
            <Circle className="circle" />
            <Button className="button" Click={handleClick} place="home">Come on!</Button>
        </div>
    )
}

export default Home