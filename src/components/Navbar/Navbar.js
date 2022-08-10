import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import cmlogo from "../../../src/assets/icons/albinologo.svg"
import Hamburger from './Hamburger.js';
import "./Navbar.css"

function Navbar() {
    const changeBackground = () => {
        console.log(window.scrollY)
        if (window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
    })
    const [navbar, setNavbar] = useState(false)
    return (
        <div className={navbar ? "header header-active" : "header"} >
            <div className="header-left">
                <div>
                    <Link to="/">
                        <img
                            className='header-icon'
                            src={cmlogo}
                            alt="example"
                        />
                    </Link>
                </div>
            </div>
            <div className="header-right">
                <div className="header-left-menu">
                    <a href="">HOME</a>
                    <a href="">ABOUT</a>
                    <a href="">TOKEN</a>
                    <a href="">ROADMAP</a>
                    <a href="">TEAM</a>
                    <a href="">WHITEPAPER</a>
                    <a href="https://gleam.io/9nEB6/albino-airdrop-2022">ANNOUNCEMENTS</a>
                </div>
            </div>
            <Hamburger />
        </div>
    )
}

export default Navbar