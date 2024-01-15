import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import EducationPreview from './components/previews/EducationPreview'
import PersonalInfoForm from './components/forms/PersonalInfoForm'
import EducationForm from './components/forms/EducationForm'
import './styles/App.css'
import PersonalInfoPreview from './components/previews/PersonalInfoPreview'

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

  const [education, setEducation] = useState([
  {
    school: "",
    location: "",
    degree: "",
    startDate: "",
    endDate: "",
    gpa: "",
  }
  ]);

  const handlePersonalInfoOnChange = (e) => {
    const { name, value } = e.target;

    setPersonalInfo({
      ...personalInfo, [name]: value,
    });
  }

  const handleEducationOnChange = (index, input, value) => {
    setEducation((prevEducation) => {
      const newEducation = [...prevEducation];
      newEducation[index][input] = value;
      return newEducation;
    });
  }

  const handleEducationOnSubmit = (e, index) => {
    e.preventDefault();

    setEducation((prevEducation) => {
      const updatedEducation = [...prevEducation];
      updatedEducation[index] = education[index];
      return updatedEducation;
    });

    console.log(education);
  }

  const handleAddBtnOnClick = () => {
    setEducation((prevEducation) =>
    [
      ...prevEducation,
      {
        school: "",
        location: "",
        degree: "",
        startDate: "",
        endDate: "",
        gpa: "",
      }
    ])

  }

  return (
    <>
      <header className="header-container">
        <Header />
      </header>

      <div id="contents-container">
        <div className="forms-container">
          <PersonalInfoForm
            props={personalInfo}
            onChange={handlePersonalInfoOnChange}
          />

          <EducationForm
            educationData={education}
            handleEducationOnChange={handleEducationOnChange}
            handleEducationOnSubmit={handleEducationOnSubmit}
            addBtnOnClick={handleAddBtnOnClick}
          />

        </div>

        <div className="preview-container">
            <PersonalInfoPreview data={personalInfo}/>

            <EducationPreview data={education}/>
        </div>
      </div>
    </>
  )
}

export default App
