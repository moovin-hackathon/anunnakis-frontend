import React from 'react'
import './App.scss'

import SideMenu from './components/SideMenu'
import Container from './components/Container'

import { MenuOptions } from './toolkit/utils'
import Top from './components/Top'

const App: React.FC = () => {
  return (
    <div className="App">
      <Top />
      <SideMenu
        options={MenuOptions}
      />
      <Container />
    </div>
  )
}

export default App