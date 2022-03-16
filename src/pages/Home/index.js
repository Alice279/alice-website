import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../../componens/Button'
import Circle from '../../componens/Circle'
import './index.css'

function Home () {

    const history = useHistory();

    const handleClick = () => {
        history.push('/about')
    }

    return (
        <div className="home">
            <Circle className="circle"/>
            <Button className="button" Click={handleClick} place="home">Come on!</Button>
        </div>
    )
}

export default Home