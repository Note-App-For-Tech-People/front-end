import React from 'react'
//import CSS
import '../styles/HeroHome.css'
import deskImage from '../assets/dev-people.png'

const HeroHome = () => {
    return (
        <section className="HeroHome">
            <h1>Little notes mean big 💡 when you're a developer</h1>
            <p>No hay nada como una app de notas especializada en guardar esas ideas geniales cuando eres un desarrollados.</p>
            <img src={deskImage} alt="alooha"/>
        </section>
    )
}

export default HeroHome;