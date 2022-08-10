import React from 'react'
import popup from '../../assets/images/popup.png'
import close from '../../assets/images/close.png'
import './popup.css'

function Popup(props) {
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <button onClick={() => props.setTrigger(false)} className='close-btn'><img style={{ width: "20px" }} src={close} alt="" /></button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup