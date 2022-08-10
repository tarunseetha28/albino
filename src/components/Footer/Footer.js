import React from 'react'
import './footer.css'
import logo from '../../assets/icons/albinologo.svg'
import reddit from '../../assets/icons/reddit.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import medium from '../../assets/icons/medium.svg'
import twitter from '../../assets/icons/twitter.svg'
import instagram from '../../assets/icons/instagram.svg'
import telegram from '../../assets/icons/telegram.svg'

function Footer() {
    return (
        <>
            <div className='footer'>
                <img style={{ height: "150px" }} src={logo} alt="" />
                <div className='footerSocial'>
                    <a href="">  <img src={reddit} alt="" /></a>
                    <a href=""> <img src={linkedin} alt="" /></a>
                    <a href=""> <img src={medium} alt="" /></a>
                    <a href=""> <img src={twitter} alt="" /></a>
                    <a href=""> <img src={instagram} alt="" /></a>
                    <a href=""><img src={telegram} alt="" /></a>
                </div>
                <div className='footerCprt'>
                    <span>Copyright © 2022</span>
                    <span>Terms and Conditions</span>
                </div>
            </div>
        </>
    )
}

export default Footer