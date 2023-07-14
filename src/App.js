import React from 'react'
import Sidebar from './Components/Sidebar'
import NavBar from './Components/NavBar'
import MainContent from './Components/MainContent'

const App = () => {
  return (
    <div>
 
      <Sidebar/>
      <div id="content">
      <NavBar/>
      <MainContent/></div>
    </div>
  )
}

export default App