import React from 'react'
import './Home.css'
import mission from '../../assets/icons/mission.svg'
import vision from '../../assets/icons/vision.svg'

function Mission() {
    return (
        <>
            <div className='mission'>
                <div className='missionLeft'>
                    <div className='missionTitle'>
                        <span className='aboutTxt'>MISSION</span>
                        <img src={mission} alt="" />
                    </div>
                    <span className='aboutRightext1'>Albino is a decentralized finance platform built on a blockchain with a mission to create a community-driven ecosystem that empowered the holders to better their financial condition.</span>
                </div>
                <div className='missionRight'>
                    <div className='missionTitle'>
                        <span className='aboutTxt'>VISION</span>
                        <img src={vision} alt="" />
                    </div>
                    <span className='aboutRightext1'>Everyone participating in the project is working toward the same end goal as a result of the Albino Ecosystem.</span><br /><br />
                    <span className='aboutRightext2'>We envision a world where wealth building strategies that were once only accessible to affluent individuals become available to everyone, transferring the power over our financial systems back to the people. Albino is going to create a revolutionary ecosystem to bring more people into digital assets, helping to earn a passive income through redistribution/reflection, by holding the token long-term, along with maintaining their privacy, security, and autonomy along with digital and social problems. Albino is going to create a revolutionary gaming ecosystem to bring more people into digital assets, Building a safe and secure legal crypto online gaming platform that is positioned for global adoption with no limitations helping to earn a handsome income.</span>
                </div>

            </div>
        </>
    )
}

export default Mission