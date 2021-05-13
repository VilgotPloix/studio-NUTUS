import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import './styles.scss'


import {ThemeContext} from '../../data/ThemeContext'
import works from '../../data/Works'

export default function index() {

    const theme = useContext(ThemeContext)

    const projets = works.map((projet, index) => 
        <div key={index} >
            <Link
                className={theme.state ? "workLink" : "workLink light"}
                to={"/works/" + projet.name}>{projet.name}</Link>
        </div>
    )

    return (
        <div className={theme.state ? "workPage light" : "workPage dark"}>
            {projets} 
        </div>
    )
}
