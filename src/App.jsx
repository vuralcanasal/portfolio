import Topbar from './components/topbar/Topbar'
import Intro from './components/intro/Intro'
import Skill from './components/skill/Skill'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Menu from './components/menu/Menu'
import './app.scss'
import { useState } from 'react'

function App() {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <div className='app'>
      <Topbar menuActive={menuActive} setMenuActive={setMenuActive} />
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
      <div className='section'>
        <Intro />
        <Skill />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}

export default App
