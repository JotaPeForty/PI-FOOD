import React from 'react'
import { NavLink } from "react-router-dom"
import Search from "./Search"
import s from "../Module.css/NavBar.module.css"


function NavBar() {
    return (
        <nav className={s.navbar}>
            <NavLink className={s.home} to="/home">Home</NavLink>
            <NavLink className={s.create} to="/create">Create</NavLink>
            <NavLink className={s.about} to="/about">About</NavLink>
            <h1 className={s.h1}>Let's cook!</h1>
            <Search/>
        </nav>
    )
}

export default NavBar
