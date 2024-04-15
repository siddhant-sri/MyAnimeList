import React from 'react'
import InputAnime from './InputAnime'
import ListAnime from './ListAnime'
import NavBar from './NavBar'

const Main = ({userData}) => {
  return (
    <div>
        <NavBar userData={userData}/>
      <InputAnime/>
      <ListAnime/>
    </div>
  )
}

export default Main
