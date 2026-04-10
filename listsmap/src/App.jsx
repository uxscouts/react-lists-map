import react, { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MyModal from "./components/MyModal";
import Home from "./components/Home";
import Spread from "./components/Spread";
import Login from "./components/Login";
import Lists from "./components/Lists";
import StateInObject01 from "./components/StateInObject01";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="navbar2">
          <Link to="/">Home</Link>
          <Link to="/spread">Spread</Link>
          <Link>
            <div className="dropdown">
              <div className="dropbtn">Lists 
               &nbsp;<FontAwesomeIcon icon={faChevronDown} />
              </div>
              <div className="dropdown-content">
                <Link to="/lists">Lists</Link>
                <Link to="/stateinobject01">State In Object 01</Link>
              </div>
            </div>
          </Link>
          <Link><MyModal/></Link>
        </div>
       {/* <Login/> */}
       <div className="container">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/spread" element={<Spread/>} />
            <Route path="/lists" element={<Lists/>} />
            <Route path="/stateinobject01" element={<StateInObject01/>} />
          </Routes>
        </div>         
      </BrowserRouter> 
    {/* <p>Font Awesome <FontAwesomeIcon icon={faCoffee} /></p> */}
    </>
  )
}

export default App

