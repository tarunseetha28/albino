import React from 'react'
import './Home.css'
import roadmap from '../../assets/icons/roadmap.svg'

function Roadmap() {
    return (
        <>
            <div className='roadmap'>
                <span style={{ marginBottom: "30px" }} className='aboutTxt'>ROAD MAP</span>
                <img src={roadmap} alt="" />
            </div>
        </>
    )
}

export default Roadmap