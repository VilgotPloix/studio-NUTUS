import React, {useState, useEffect, useContext} from 'react'
import {useParams} from 'react-router-dom'
import {ThemeContext} from '../../data/ThemeContext'
import './styles.scss'

import works from '../../data/Works'

export default function index() {

    const theme = useContext(ThemeContext)

    const { slug } = useParams()
    const [currrentWork, setCurrentWork] = useState(undefined)

    useEffect(() => {
        const foundWork = works.find((work) => work.name === slug)
        setCurrentWork(foundWork)
    }, [slug])

    

    return (
        <div className={theme.state ? "detailPage light" : "detailPage dark"}>
            <h1
                className={theme.state ? "detailTitle" : "detailTitle light"}
            >{currrentWork === undefined ? "ce travail n'existe pas" : currrentWork.name}</h1>
            <h2
                className={theme.state ? "detailIntro" : "detailIntro light"}
            >{currrentWork === undefined ? "" : currrentWork.title}</h2>
            <p
                className={theme.state ? "detailParagraph" : "detailParagraph light"}
            >{currrentWork === undefined ? "" : currrentWork.plot}</p>
            <button
                className={theme.state ? "visitBtn" : "visitBtn light"}
            ><a
                className={theme.state ? "extLink dark" : "extLink light"}
            href={currrentWork === undefined ? "" : currrentWork.website}>visiter le site</a></button>
        </div>
    )
}
