import React from 'react'
import './Home.css'
import sol1 from '../../assets/icons/sol1.svg'
import sol2 from '../../assets/icons/sol2.svg'
import sol3 from '../../assets/icons/sol3.svg'
import sol4 from '../../assets/icons/sol4.svg'

function Purpose() {
    return (
        <>
            <div className='purpose'>
                <div className='purposeR1'>
                    <div className='purposeLeft'>
                        <span className='aboutTxt popTxt'>PURPOSES OF <br />
                            OUR PLATFORM</span>
                        <span className='aboutRightext1 popDes'>We are a contemporary, all-in-one decentralized cryptocurrency.</span>
                    </div>
                    <div className='purposeRight ppc'>
                        <img className='purposeSol' src='' alt="" />
                        <img className='purposeSol' src={sol1} alt="" />
                    </div>
                </div>
                <div className='purpose1 pmo'>
                    <img className='purposeSolR2' src='' alt="" />
                    <img className='purposeSolR2' src='' alt="" />
                    <img className='purposeSolR2' src='' alt="" />
                    <img className='purposeSolR2' src={sol1} alt="" />
                </div>
                <div className='purpose1'>
                    <img className='purposeSolR2' src={sol2} alt="" />
                    <img className='purposeSolR2' src='' alt="" />
                    <img className='purposeSolR2' src={sol3} alt="" />
                    <img className='purposeSolR2' src='' alt="" />
                </div>
                <div className='purpose1'>
                    <img className='purposeSolR2' src='' alt="" />
                    <img className='purposeSolR2' src={sol4} alt="" />
                    <img className='purposeSolR2' src='' alt="" />
                    <img className='purposeSolR2' src='' alt="" />
                </div>
            </div>
        </>
    )
}

export default Purpose