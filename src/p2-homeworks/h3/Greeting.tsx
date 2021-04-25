import React, {ChangeEvent} from 'react'
import g from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: boolean
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    // need to fix with (?:)

    return (
        <div>
            <div className={g.div}>
                <input style={{border: error ? '1px solid red' : "1px solid #695e5e"}} value={name}
                       onChange={setNameCallback} className={g.input}/>
                <button className={g.btn} onClick={addUser}>add</button>
                <span style={{color: "white", fontSize: "20px"}}>{totalUsers}</span>
            </div>
            <div className={g.error} style={{color: "red"}}>{error ? 'name is required' : null}</div>

        </div>
    )
}

export default Greeting
