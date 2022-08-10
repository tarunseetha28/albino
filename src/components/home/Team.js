import React from 'react'
import './Home.css'
import t1 from '../../assets/images/prasenjit.png'
import t2 from '../../assets/images/nripendra.png'
import t3 from '../../assets/images/asanur.png'
import t4 from '../../assets/images/nirmal.png'
import t5 from '../../assets/images/prasanta.png'
import t6 from '../../assets/images/uttam.png'

function Team() {
    return (
        <>
            <div className='team'>
                <span className='aboutTxt'>MEET OUR TEAM</span>
                <div className='teamMbr'>
                    <div className='teamCard'>
                        <img style={{ width: "400px" }} src={t1} alt="" />
                        <span style={{ marginTop: "15px" }} className='aboutRightext1 artm'>Prasenjit Das</span>
                        <span className='aboutRightext2 artm2'>COO</span>
                    </div>
                    <div className='teamCard'>
                        <img style={{ width: "400px" }} src={t2} alt="" />
                        <span style={{ marginTop: "15px" }} className='aboutRightext1 artm'>Nripendra Narayan Bhattacharjee</span>
                        <span className='aboutRightext2 artm2'>CTO</span>
                    </div>
                    <div className='teamCard'>
                        <img style={{ width: "400px" }} src={t3} alt="" />
                        <span style={{ marginTop: "15px" }} className='aboutRightext1 artm'>Md Asanur Rahaman</span>
                        <span className='aboutRightext2 artm2'>Financial Payments Architect</span>
                    </div>
                </div>
                <div className='teamMbr'>
                    <div className='teamCard'>
                        <img style={{ width: "400px" }} src={t4} alt="" />
                        <span style={{ marginTop: "15px" }} className='aboutRightext1 artm'>Nirmal Debnath</span>
                        <span className='aboutRightext2 artm2'>Business Head</span>
                    </div>
                    <div className='teamCard'>
                        <img style={{ width: "400px" }} src={t5} alt="" />
                        <span style={{ marginTop: "15px" }} className='aboutRightext1 artm'>Prasanta Debnath</span>
                        <span className='aboutRightext2 artm2'>Marketing Head</span>
                    </div>
                    <div className='teamCard'>
                        <img style={{ width: "400px" }} src={t6} alt="" />
                        <span style={{ marginTop: "15px" }} className='aboutRightext1 artm'>Uttam Kumar Ghosh</span>
                        <span className='aboutRightext2 artm2'>Marketing Advisor</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team