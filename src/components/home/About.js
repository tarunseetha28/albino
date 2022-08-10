import React from 'react'
import './Home.css'

function About() {
    return (
        <>
            <div className='about'>
                <div className='aboutLeft'>
                    <span className='aboutTxt'>About Albino</span>
                    <div className='aboutKey'>
                        <div className='aboutKeyItem'>
                            <span className='aboutKeyItem1'>Token Symbol</span>
                            <span className='aboutKeyItem1'>ABO</span>
                        </div>
                        <div className='aboutKeyItem'>
                            <span className='aboutKeyItem1'>Total supply</span>
                            <span className='aboutKeyItem1'>99,000,000</span>
                        </div>
                        <div className='aboutKeyItem'>
                            <span className='aboutKeyItem1'>Decimal</span>
                            <span className='aboutKeyItem1'>18</span>
                        </div>
                    </div>
                    <div className='aboutKey abk2'>
                        <div className='aboutKeyItem'>
                            <span className='aboutKeyItem1'>Minimum Purchase</span>
                            <span className='aboutKeyItem1'>50 Matic</span>
                        </div>
                        <div className='aboutKeyItem'>
                            <span className='aboutKeyItem1'>Network</span>
                            <span className='aboutKeyItem1'>Polygon Network</span>
                        </div>
                        <div className='aboutKeyItem'>
                            <span className='aboutKeyItem1'></span>
                            <span className='aboutKeyItem1'></span>
                        </div>
                    </div>
                </div>
                <div className='aboutRight'>
                    <span className='aboutRightext1'>Albino is a modern-day all-in-one decentralized cryptocurrency platform on Polygon Blockchain. Albino is a high-performance club that offers a variety of services on a single platform.<br /><br /></span>
                    <span className='aboutRightext2'>A full ecology will be built around the Albino, with features like staking, NFT Marketplace, Albino Metaverse, and an exchange, as well as Liquidity Pool. Albino will create its own NFT marketplace and serve as a hub for the decentralized community. Stake your NFT, gain tokens, and spend them on our own marketplace to buy real-world items. Our NFT collections are unique in that only one may exist, and they are difficult to duplicate. As a result, it's safe to suppose that you'll be one of the few people who have these treasures.<br /><br />
                        Technology will enable a financial revolution, allowing everyone to be more financially linked and empowered. Albino aims to give security, transparency, high deposit and withdrawal limits, and higher odds. In a nutshell, Albino is a single-form solution-based ecosystem.</span>
                </div>
            </div>
        </>
    )
}

export default About