import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import PersonalInfoForm from './components/forms/PersonalInfoForm'
import './styles/App.css'

function App() {
  return (
    <>
      <header className="header-container">
        <Header />
      </header>

      <div className="forms-container">
        <form id="personal-info-form">
          Enter your personal info

          <PersonalInfoForm />
        </form>
      </div>
    </>
  )
}

export default App
