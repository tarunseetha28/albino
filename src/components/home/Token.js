import React from 'react'
import './Home.css'
import tr from '../../assets/images/tokenR.png'
import k1 from '../../assets/icons/ks.svg'
import k2 from '../../assets/icons/kt.svg'
import k3 from '../../assets/icons/kd.svg'
import k4 from '../../assets/icons/km.svg'
import k5 from '../../assets/icons/kn.svg'
import albtn from '../../assets/icons/albinobtn.svg'
import walbtn from '../../assets/icons/walletbtn.svg'

function Token() {
    return (
        <>
            <div className='token'>
                <div className='tokenContent'>
                    <div className='tokenContentLeft'>
                        <span className='aboutTxt'>TOKEN SALE</span>
                        <div className='tokenContentK'>
                            <img src={k1} alt="" />
                            <img src={k2} alt="" />
                            <img src={k3} alt="" />
                            <img src={k4} alt="" />
                            <img src={k5} alt="" />
                        </div>
                        <div className='tokenContentF'>
                            <div className='tokenContentI'>
                                <span className='tokenTitle'>Amount in Matic</span>
                                <input className='tokenInput' type="text" />
                            </div>
                            <div className='tokenContentI'>
                                <span className='tokenTitle'>Rate</span>
                                <input className='tokenInput' type="text" />
                            </div>
                            <div className='tokenContentI'>
                                <span></span>
                                <button className='tokenbtn' >BUY ABO COIN</button>
                            </div>
                        </div>
                        <div className='tokenContentF'>
                            <img style={{ height: "55px" }} src={albtn} alt="" />
                            <img style={{ height: "55px" }} src={walbtn} alt="" />
                        </div>
                    </div>
                    <div className='tokenContentRight'>
                        <img style={{ height: "450px", marginLeft: "auto" }} src={tr} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Token