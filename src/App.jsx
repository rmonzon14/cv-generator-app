import { useState } from 'react'
import Header from './components/Header'
import EducationPreview from './components/previews/EducationPreview'
import PersonalInfoForm from './components/forms/PersonalInfoForm'
import EducationForm from './components/forms/EducationForm'
import SkillsForm from './components/forms/Skills'
import PersonalInfoPreview from './components/previews/PersonalInfoPreview'
import { v4 as uuid } from 'uuid';
import './styles/App.css'

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
    id: uuid()
  }
  ]);

  const [skills, setSkills] = useState([])

  const [isAddVisible, setIsAddVisible] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);

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

  const handleSkillsOnChange = (index, input, value) => {
    setSkills((prevSkills) => {
      const newSkills = [...prevSkills];
      newSkills[index][input] = value;
      return newSkills;
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

    setIsAddVisible(true);
    setActiveIndex(education.length);
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

    setIsAddVisible(!true);
  }

  const handleEditBtnOnClick = (index) => {
    setActiveIndex(index)
    console.log(activeIndex);
  }

  const handleDeleteBtnClick = (index) => {
    setEducation((prevEducation) => {
      const newEducation = [...prevEducation];
      newEducation.splice(index, 1);
      return newEducation;
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
            props={personalInfo}
            onChange={handlePersonalInfoOnChange}
          />

          <EducationForm
            data={education}
            handleEducationOnChange={handleEducationOnChange}
            handleEducationOnSubmit={handleEducationOnSubmit}
            addBtnOnClick={handleAddBtnOnClick}
            isAddVisible={isAddVisible}
            activeIndex={activeIndex}
            handleEditButtonOnClick={handleEditBtnOnClick}
            handleDeleteBtnOnClick={handleDeleteBtnClick}
          />

          <SkillsForm data={skills} />

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
