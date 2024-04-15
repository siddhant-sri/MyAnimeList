import React, { useState } from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// components
import Registration from './Components/Registration';
import SignIn from './Components/SignIn';
import Home from './Components/Home';
import Main from './Components/Main';
import MyProfile from './Components/MyProfile';

function App() {

  const [userData, setUserData] = useState("");
  
  const getUserData = (data) => {
    setUserData(data);
    console.log("userdata", data);
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path="/login" element ={<SignIn getUserData={getUserData}/>} />
          <Route path="/registration" element ={<Registration/>} />
          <Route path="/main" element ={<Main userData={userData}/>} />
          <Route path="/main/profile" element ={<MyProfile userData={userData}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
