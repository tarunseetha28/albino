import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Popup from './components/Popup/Popup'
import popupimg from './assets/images/popup.png'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from './components/Navbar/Navbar';
import Home from './components/home/Home';

function App() {
  const [timedPopup, setTimedPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimedPopup(true);
    }, 3000);
  }, [])

  return (
    <>
      <Popup trigger={timedPopup} setTrigger={setTimedPopup} >
        <a href="https://gleam.io/9nEB6/albino-airdrop-2022"> <img src={popupimg} alt="" /></a>
      </Popup>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
