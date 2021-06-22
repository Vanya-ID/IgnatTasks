import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

export type UserType =
    {
        _id: number
        name: string
        age: number
    }

const initialPeople: Array<UserType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, setPeople] = useState<Array<UserType>>(initialPeople)

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} style={{
            width: '250px',
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft: '10px'
        }}>
            <span>{p.name}</span>
            {p.age}
        </div>
    ))

    type classType = 'up' | 'down' | 'check'

    let [activeClass, setActiveClass] = useState<classType>('up')

    const sortUp = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'up'}))
        setActiveClass('up')
    }
    const sortDown = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'sort', payload: 'down'}))
        setActiveClass('down')
    }
    const check = () => {
        setPeople(homeWorkReducer(initialPeople, {type: 'check', payload: 18}))
        setActiveClass('check')
    }

    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}
            {finalPeople}

            <SuperButton style={{
                backgroundColor: activeClass === 'up' ? 'green' : ''
            }}
                         onClick={sortUp}>sort up
            </SuperButton>
            <SuperButton style={{
                backgroundColor: activeClass === 'down' ? 'green' : ''
            }}
                         onClick={sortDown}>sort down
            </SuperButton>
            <SuperButton style={{
                backgroundColor: activeClass === 'check' ? 'green' : ''
            }}
                         onClick={check}>check 18
            </SuperButton>


            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
