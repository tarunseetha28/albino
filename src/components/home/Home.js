import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Home.css'
import { Helmet } from 'react-helmet';
import { Button } from 'antd'
import albino from '../../assets/icons/albino.svg'
import { Link } from 'react-router-dom'
import About from './About';
import Banner from './Banner';
import Mission from './Mission';
import Purpose from './Purpose';
import Product from './Product';
import Benefits from './Benefits';
import Token from './Token';
import Roadmap from './Roadmap';
import Team from './Team';
import Footer from '../Footer/Footer';
function Home() {
    return (
        <>
            <Helmet>
                <title>Albino | Home</title>
            </Helmet>
            <Navbar />
            <div className='home'>
                <div className='home-1'>
                    <img style={{ height: "360px" }} src={albino} alt="" />
                    <div className='home-btn'>
                        <a style={{ cursor: "pointer" }} className="btn btn-8">VIEW WHITE PAPER</a>
                        <a style={{ cursor: "pointer" }} className="btn btn-8">AUDIT REPORT</a>
                    </div>
                </div>
            </div>
            <About />
            <Banner />
            <Mission />
            <Purpose />
            <Product />
            <Benefits />
            <Token />
            <Roadmap />
            <Team />
            <Footer />
        </>
    )
}

export default Home