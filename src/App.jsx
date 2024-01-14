import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import PersonalInfoForm from './components/forms/PersonalInfoForm'
import './styles/App.css'
import PersonalInfoPreview from './components/Preview/PersonalInfoPreview'

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Red",
    lastName: "Monzon",
    occupation: "Web Developer",
    email: "redkmonzon@gmail.com",
    phone: "4313211645",
    country: "Canada",
    city: "Winnipeg"
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

      <div id="contents-container">
        <div className="forms-container">
          <PersonalInfoForm
            value={personalInfo}
            onChange={handlePersonalInfoChange}
          />
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
      </div>
    </>
  )
}

export default App
