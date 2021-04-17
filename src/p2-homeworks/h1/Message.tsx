import React from 'react'
import m from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {

    return (
        <div className={m.message}>
            <img className={m.messageImg} src={props.avatar} alt=""/>

            <div className={m.angle} />
            <div className={m.ourMessage}>
                <div className={m.name}>
                    {props.name}
                </div>
                <div className={m.text}>{props.message} </div>
                <div className={m.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
