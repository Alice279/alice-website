import React from 'react'

function Block ({name}) {

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

    return (
        <div style ={style}>
            {name}
        </div>
    )
}

export default Block