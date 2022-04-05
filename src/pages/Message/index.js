import React, { useReducer, useRef, useEffect } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import axios from 'axios'
import Button from '../../componens/Button'
import './index.css'

function Message() {
    const inputRef = useRef();
    //useReducer 包括了上一次渲染的内容，多次渲染之间不会重新加载
    const [items, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'add':
                return [...state, {
                    content: action.content,
                    id: action.id
                }]
            case 'delet':
                return state.filter((item) => {
                    return item.id !== action.id
                })
            case 'pull':
                return [...action.arr]
            case 'clear':
                return []
        }
    }, [])

    //提交一个新的留言时，先把之前展示出来的留言清空再从数据库里重新拉取留言
    //这是因为items和数据库里的留言不是一个体系的
    const handlePub = (event) => {
        axios({
            method: 'POST',
            url: 'http://localhost:9000/testAPI/register',
            data: {
                content: inputRef.current.value,
                id: Date.now()
            }
        })
            .then(res => res.data)
            .then(res => {
                dispatch({
                    type: 'add',
                    content: res.content,
                    id: res.id
                })
            })
        inputRef.current.value = ''
    }

    const handleDel = (event, id) => {
        event.preventDefault();
        axios({
            method: 'DELETE',
            url: 'http://localhost:9000/testAPI/delRegisterInfo',
            data: {
                id
            }
        })
            .then(dispatch({
                type: 'delet',
                id
            }))
    }

    const addPreMessage = (arr) => {
        console.log('addPreMessage')
        dispatch({
            type: 'pull',
            arr
        })
    }

    useEffect(() => {
        console.log('sueEffect')
        axios({
            method: 'GET',
            url: 'http://localhost:9000/testAPI/getRegisterInfo'
        })
            .then(res => res.data.data)
            // .then(res => console.log(res))    
            //这里注意，使用了 console.log 等代码之后，函数默认返回值是 undefined
            //再给下面的 then 传入的也是 undefined
            .then(res => addPreMessage(res))
    }, [])

    const { t } = useTranslation()


    /////////// handle Login ///////
    const handleLogin = () => {
        // axios({
        //     method: 'GET',
        //     url: 'https://github.com/login/oauth/authorize?client_id=8815468cbdbf6f580524&state=STATE&redirect_uri=http://localhost:9000/testAPI/login',
        // //    url: 'http://localhost:9000/testAPI/getRegisterInfo'
        // headers: {
        //     accept:'application/json',
        // }
        // })
        
        let popWin = window.open('https://github.com/login/oauth/authorize?client_id=8815468cbdbf6f580524&state=STATE&redirect_uri=http://localhost:9000/testAPI/login')

    }

    return (
        <div className="message">
            <div className="message-add">
                <textarea ref={inputRef} placeholder="say something"></textarea>
                <div className="buttons">
                    <Button size="small" Click={handleLogin}>{t('Login')}</Button>
                    <Button size="small" Click={(event) => handlePub(event)}>{t('Publish')}</Button>
                </div>
            </div>
            <div className="message-show">
                {items.map(item => (
                    <div key={item.id} className="one-message">
                        <div className="message-content">{item.content}</div>
                        <Button className="del-button" size="xsmall" Click={(event) => handleDel(event, item.id)}>D</Button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Message

//为什么使用 useRef ？ 对 hooks 的了解还是不够多