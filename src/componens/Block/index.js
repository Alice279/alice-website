import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {cardContext} from '../../pages/App'

function Block ({name, index}) {

    const style = {
        width: '70px',
        height: '70px',
        backgroundColor: 'rgb(83, 111, 124)',
        borderRadius: '20px',
        outline: '6px solid rgb(113,152,169)',
        boxShadow: '0 0 45px 13px rgb(83, 111, 124)',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        cursor: 'pointer',

        color: 'rgb(230, 230, 250)'
    }

    const history = useHistory();

    const {active, setActive} = useContext(cardContext)
    const handleClick = (index) => {
        history.push('/about')
        let array = [false, false, false, false, false, false, false];
        array[index] = true;
        setActive(array)
    }

    return (
        <div style ={style} onClick={() => handleClick(index)}>
            {name}
        </div>
    )
}

export default Block

//函数组件传参的两种方式：参数写props然后从props里读出来；参数直接写对象，里面是传过来的变量名