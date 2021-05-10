import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes'
import h from './header.module.css'

function Header() {

    return (
        <div className={h.parent}>
            <div className={h.navLink}>
                <NavLink className={h.link} to={PATH.PRE_JUNIOR} activeClassName={h.active}> Pre-Junior</NavLink>
                <NavLink className={h.link} to={PATH.JUNIOR} activeClassName={h.active}> Junior </NavLink>
                <NavLink className={h.link} to={PATH.JUNIOR_PRO} activeClassName={h.active}> Junior+ </NavLink>
                <div className={h.triangle}></div>

            </div>
        </div>
    )
}

export default Header
