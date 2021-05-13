import React, {useContext} from 'react'
import { Link } from 'react-router-dom'

import {ThemeContext} from '../../data/ThemeContext'

import './styles.scss'

export default function index() {

    const theme = useContext(ThemeContext)

    return (
        <nav>
            <div className={theme.state ? "nav light" : "nav dark"}>
                <Link className={theme.state ? 'navLink' : "navLink light"}
                 to="/about">ABOUT
                 </Link>
                <Link className={theme.state ? 'navTitle' : "navTitle light"}
                 to="/">STUDIO <span className="nutus">NUTUS</span></Link>
                <Link className={theme.state ? 'navLink' : "navLink light"}
                 to="/works">WORKS</Link>
            </div>
            <button className={theme.state ? "toggleBtn light" : "toggleBtn dark"}
                onClick={theme.toggleTheme}
            >{theme.state ? "dark" : "light"}</button>
        </nav>
    )
}
