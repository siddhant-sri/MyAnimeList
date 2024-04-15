import React from 'react'
import Registration from './Registration'
import NavBar from './NavBar'

const MyProfile = ({userData}) => {
    console.log("check", userData);
  return (
    <div>
        <NavBar/>
      <Registration preFilledData={userData}/>
    </div>
  )
}

export default MyProfile
