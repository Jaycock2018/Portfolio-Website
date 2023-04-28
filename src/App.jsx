import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Info from './components/Info'
import Work from './components/Work'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
      <div>
        <Sidenav />
        <Main />
        <Info />
        <Work />
        <Projects />
        <Contact />
      </div>
  )
}

export default App
