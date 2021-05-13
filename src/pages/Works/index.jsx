import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import './styles.scss'


import {ThemeContext} from '../../data/ThemeContext'
import works from '../../data/Works'

export default function index() {

    const theme = useContext(ThemeContext)

    const projets = works.map((projet, index) => 
        <Link 
        onMousemove={(e) => console.log(e.screenX + e.screenY)}
        className={theme.state ? "workLink" : "workLink light"}
         key={index} to={"/works/" + projet.name}>{projet.name}</Link>
    )

    return (
        <div className={theme.state ? "workPage light" : "workPage dark"}>
            {projets}
        </div>
    )
}
