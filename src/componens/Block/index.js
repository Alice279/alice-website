import React from 'react'

function Block ({name}) {

    const style = {
        width: '70px',
        height: '70px',
        backgroundColor: 'blue',
        borderRadius: '20px',

        outline: '6px solid #b4a078'
    }

    return (
        <div style ={style}>
            {name}
        </div>
    )
}

export default Block