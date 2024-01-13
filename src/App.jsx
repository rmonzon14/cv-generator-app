import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import PersonalInfoForm from './components/forms/PersonalInfoForm'
import './styles/App.css'
import PersonalInfoPreview from './components/Preview/PersonalInfoPreview'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    occupation: "",
    email: "",
    phone: "",
    country: "",
    city: ""
  }
  );

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;

    setPersonalInfo({
      ...personalInfo, [name]: value,
    });
  }

  return (
    <>
      <header className="header-container">
        <Header />
      </header>

      <div className="forms-container">
        <form id="personal-info-form">
          Enter your personal info

          <PersonalInfoForm
            value={personalInfo}
            onChange={handlePersonalInfoChange}
          />
        </form>
      </div>

      <div className="preview-container">
          <PersonalInfoPreview
            firstName={personalInfo.firstName}
            lastName={personalInfo.lastName}
            occupation={personalInfo.occupation}
            email={personalInfo.email}
            phone={personalInfo.phone}
            country={personalInfo.country}
            city={personalInfo.city}
          />
      </div>
    </>
  )
}

export default App
