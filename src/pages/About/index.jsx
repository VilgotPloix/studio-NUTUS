import React, {useContext} from 'react'
import {ThemeContext} from '../../data/ThemeContext'
import {Link} from 'react-router-dom'

import './styles.scss'

export default function index() {

    const theme = useContext(ThemeContext)

    return (
        <div className={theme.state ? "page light" : "page dark"}>
            <div className="center">
            <h1
                className={theme.state ? "aboutTitle" : "aboutTitle light"}
            >
                Studio NUTUS est une Agence de communication digitale à paris ayant pour mission de vous accompagner sur vos projets digitaux.
            </h1>
                <p
                    className={theme.state ? "aboutParagraph" : "aboutParagraph light"}
                >
                    De l’étape d’avant projet web au lancement effectif du site, nous somme là pour vous. Tout au long de la durée de vie de nos projets communs, nous mettons tout en oeuvre pour vous proposer des stratégies digitales efficaces et vous permettre d’atteindre vos objectifs.
                    Laissez votre projet entre des mains dignes de confiance, ayant accompagné "PLATON", "TCar", "Solane" ou encore "Sedal" vers le sommet.
            </p>
            <button className={theme.state ? "btnMail" : "btnMail light"}>Nous contacter</button>
            </div>
        </div>
    )
}
