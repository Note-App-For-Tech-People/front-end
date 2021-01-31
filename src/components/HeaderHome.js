import React from 'react'
//import some styles
import '../styles/HeaderHome.css'
//logo
import logo from '../assets/logo.png'

const HeaderHome = () => {
    const url = "";
    return (
        <header className="HeaderHome">
            <div className="container">
                <div className="logo">
                    <a href={url}>
                        <img src={logo} alt="Logo" />
                    </a>
                </div>
                <nav className="main-nav">
                    <ul>
                        <li className="login">
                            <a href={url}>
                                <span>Login</span>
                            </a>
                        </li>
                        <li className="signIn">
                            <a href={url}>
                                <span className="btn-grad">Create a free account</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default HeaderHome;