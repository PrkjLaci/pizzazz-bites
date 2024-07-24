import React from 'react'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/Nav/Navbar'

function App() {

  return (
    <Router>
      <header>
        <Navbar />
      </header>
    </Router>
  )
}

export default App
