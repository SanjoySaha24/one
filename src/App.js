import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from './components/Header'

import "./styles/App.scss"
import "./styles/header.scss"


const App = () => {
  return (
    <Router>
    <Header />
      <Routes>
        <Route />
      </Routes>
    </Router>
  )
}

export default App