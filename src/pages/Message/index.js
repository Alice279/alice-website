import React, { useReducer, useRef } from 'react'
import Button from '../../componens/Button'
import './index.css'

function Message() {
    const inputRef = useRef();
    const [items, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'add':
                return [...state, {
                    id: state.length,
                    name: action.name
                }]
            case 'delet':
                return state.filter((item) => {
                    return item.id !== action.id
                })
        }
    }, [])

    const handlePub = (event) => {
        event.preventDefault();
        dispatch({
            type: 'add',
            name: inputRef.current.value
        })
        inputRef.current.value = '';
    }
    const handleDel = (event, id) => {
        event.preventDefault();
        // const e = event.target.parentElement.parentElement;
        // const id = e.getAttribute('key');
        // console.log(id)
        dispatch({
            type: 'delet',
            id
        })
    }
    return (
        <div className="message">
            <div className="message-show">
                {items.map(item => (
                    <div key={item.id}>
                        <div>{item.name}</div>
                        <Button size="xsmall" Click={(event) => handleDel(event, item.id)}>D</Button>
                    </div>
                ))}
            </div>
            <div className="message-add">
                <textarea ref={inputRef} placeholder="say something"></textarea>
                <Button size="small" Click={(event) => handlePub(event)}>发布</Button>
            </div>
        </div>
    )
}

export default Message

//为什么使用 useRef ？ 对 hooks 的了解还是不够多