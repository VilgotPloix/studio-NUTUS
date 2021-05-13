import React, {useContext} from 'react'
import {ThemeContext} from '../../data/ThemeContext'
import './styles.scss'
import Typewriter from 'typewriter-effect'


export default function index() {

    const theme = useContext(ThemeContext)

    const typeWriter = () => {
        return(

            <Typewriter 
                onInit={(effect) => {
                    effect
                    .typeString("web")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString('design')
                    .start();
                } }
            />

        )   
    }

    return (
        <div className={theme.state ? "page light" : "page dark"}>
            <div className="center">
                
                <h1
                    className={theme.state ? "title" : "title light"}
                >Confiez vos rêves à des experts du <Typewriter
                    onInit={(effect) => {
                        effect
                            .typeString("web")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString('design')
                            .start()   
                    }}
                /></h1>
                <p
                    className={theme.state ? "paragraph" : "paragraph light"}
                >
                    Grâce à notre savoir-faire, notre expérience et notre écoute, nous accompagnons nos clients dans la création de site internet: étude, UX, conception, design, développement, SEO.
                    Notre agence web est capable de répondre à tous vos besoins et d'élaborer une véritable stratégie digitale.
            </p>
            <button
             className={theme.state ? "cta" : "cta light"}
             >prendre rendez vous</button>
            </div>
        </div>
    )
}
