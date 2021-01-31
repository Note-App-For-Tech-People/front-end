import React from 'react'
//import some styles
import '../styles/HeaderHome.css'
//import fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HeaderHome = () => {
    return (
        <header className="home-header">
            <div className="container">
                <div className="logo">
                    <a href="#">
                        <span>git_note</span>
                    </a>
                </div>
                <nav className="main-nav">
                    <ul>

                        <li className="login">
                            <a href="#">
                                <span>Login</span>
                            </a>
                        </li>
                        <li className="signIn">
                            <a href="#">
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