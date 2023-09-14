/*import { useState } from "react";*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../images/Logo.svg';
import './NavBar.css';

export default function NavBar() {
    /*const [toggle, setToggle] = useState(false);*/
    const hamburger = <FontAwesomeIcon icon={faBars} />

    return (
        <nav className="navbar fixed-top">
            <a className="navbar-brand" href="/">
                <img src={logo} alt="moviebox logo"/>
            </a>
            <p></p>
            <div className='signin-hamburger'>
                <a href="/signin">
                    <button className='sign-in'>Sign in</button>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-span">{hamburger}</span>
                </button>
            </div>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav mb-auto">
                    <a href='/signup'><li className="nav-item">Sign up</li></a>
                </ul>
            </div>
        </nav>
    )
}