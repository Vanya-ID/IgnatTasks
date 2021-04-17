import React from 'react'
import a from  './Affairs.module.css'
import {AffairType} from "./HW2";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id : number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id) }
    const serColor = ()=>{
        if (props.affair.priority === 'high') return "red"
        if (props.affair.priority === 'middle') return "yellow"
        if (props.affair.priority === 'low') return "green"

    }
    const  affairPriority = {
        color:serColor()
    }
    return (
        <div className={a.affairDiv}>
                <div className={a.affairName}>{props.affair.name}</div>
                <div style={affairPriority}>  { '{ ' +props.affair.priority + ' }'} </div>

            <button className={a.deleteBtn} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
