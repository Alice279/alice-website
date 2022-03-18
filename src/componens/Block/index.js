import React, {useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {cardContext} from '../../pages/App'

function Block ({name, index}) {

    const style = {
        width: '70px',
        height: '70px',
        backgroundColor: 'rgb(226, 196, 102)',
        borderRadius: '20px',
        outline: '6px solid rgb(217, 129, 75)',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        cursor: 'pointer'
    }

    const history = useHistory();

    const {active, setActive} = useContext(cardContext)
    const handleClick = (index) => {
        history.push('/about')
        let array = [...active];
        let item = !active[index]
        array[index] = item;
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