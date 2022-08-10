import React, { useState } from 'react'
import hamburgericon from "../../assets/icons/hamburgericon.svg"
import './Navbar.css'
import { Link } from 'react-router-dom'
import 'antd/lib/drawer/style/index.css';
import { Drawer, Button } from 'antd'

function Hamburger() {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Button
                onClick={showDrawer}
                className="hamb-menu">
                <img style={{ marginTop: "auto", marginBottom: "auto", height: "20px" }} src={hamburgericon} alt="" />
            </Button>
            <Drawer
                className='drawer-hamburger'
                // title={<img src={bigboxlogo} style={{ height: "30px", marginTop: "10px" }} />}
                placement="right"
                onClose={onClose}
                visible={visible}>
                <div className='hamb-menuli'>
                    <a href="">HOME</a>
                    <a href="">ABOUT</a>
                    <a href="">TOKEN</a>
                    <a href="">ROADMAP</a>
                    <a href="">TEAM</a>
                    <a href="">WHITEPAPER</a>
                    <a href="https://gleam.io/9nEB6/albino-airdrop-2022">ANNOUNCEMENTS</a>
                </div>

            </Drawer>
        </>
    )
}

export default Hamburger