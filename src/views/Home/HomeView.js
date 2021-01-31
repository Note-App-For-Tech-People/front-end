import React from 'react'
import HeaderHome from '../../components/HeaderHome';
import HeroHome from '../../components/HeroHome';
import './style.css'

const HomeView = () => {
    return (
        <div className="HomeView">
            <HeaderHome />
            <HeroHome />
        </div>
    )
}

export default HomeView;