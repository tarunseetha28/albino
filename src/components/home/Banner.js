import React from 'react'
import './Home.css'
import banner from '../../assets/icons/banner.svg'

function Banner() {
    return (
        <>
            <div className='banner'>
                <img src={banner} alt="" />
            </div>
        </>
    )
}

export default Banner