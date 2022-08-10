import React from 'react'
import './Home.css'
import p1 from '../../assets/images/p1.png'
import p2 from '../../assets/images/p2.png'
import p3 from '../../assets/images/p3.png'
import p4 from '../../assets/images/p4.png'

function Product() {
    return (
        <>
            <div className="product">
                <span className='aboutTxt'>Our Products</span>
                <span className='aboutRightext1'>All-in-one decentralized cryptocurrency platform on Polygon Blockchain</span>
                <div className='productR1'>
                    <div className='productR11'>
                        <span className='prl'>LAUNCH SOON</span>
                        <span className='prl2'>ALBINO TRAVEL PORTAL</span>
                    </div>
                    <div className='productR12'>
                        <span className='prl'>LAUNCH SOON</span>
                        <span className='prl2'>ALBINO TRAVEL METAVERSE</span>
                    </div>
                </div>
                <div className='productR2'>
                    <div className='productR21'>
                        <span className='prl'>LAUNCH SOON</span>
                        <span className='prl2'>ALBINO LUXURY TRAVEL NFT</span>
                    </div>
                    <div className='productR22'>
                        <span className='prl'>LAUNCH SOON</span>
                        <span className='prl2'>ALBINO STAKING PLATFORM</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product