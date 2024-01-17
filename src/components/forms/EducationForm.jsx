import { useState } from "react"

function EducationForm(
  {
    data,
    handleEducationOnChange,
    handleEducationOnSubmit,
    addBtnOnClick,
    isAddVisible,
    activeIndex,
    handleDeleteBtnOnClick,
    handleEditButtonOnClick,
  }
) {
  return (
    <>
      {data.map((education, index) => (
        index === activeIndex ? (
          <form id="education-form" onSubmit={(e) => handleEducationOnSubmit(e, index)} key={index} >
            Enter your education
            <div>
              <label htmlFor="school">School</label>
                <input type="text" name="school" id="school" value={education.school} onChange={(e) => handleEducationOnChange(index, "school", e.target.value)} required />
            </div>

            <div>
              <label htmlFor="location">Location</label>
              <input type="text" name="location" id="location" value={education.location} onChange={(e) => handleEducationOnChange(index, "location", e.target.value)} required />
            </div>

            <div>
              <label htmlFor="degree">Degree</label>
              <input type="text" name="degree" id="degree" value={education.degree} onChange={(e) => handleEducationOnChange(index, "degree", e.target.value)} required />
            </div>

            <div>
              <label htmlFor="startDate">Start</label>
              <input type="date" name="startDate" id="startDate" value={education.startDate} onChange={(e) => handleEducationOnChange(index, "startDate", e.target.value)} required />
            </div>

            <div>
              <label htmlFor="endDate">End</label>
              <input type="date" name="endDate" id="endDate" value={education.endDate} onChange={(e) => handleEducationOnChange(index, "endDate", e.target.value)} required />
            </div>

            <div>
              <label htmlFor="gpa">GPA</label>
              <input type="text" name="gpa" id="gpa" value={education.gpa} onChange={(e) => handleEducationOnChange(index, "gpa", e.target.value)} required />
            </div>

            <button type="submit">Save</button>
        </form>
        ) : (
          <div key={index}>
            <div>
              <p>{education.degree}</p>
              <p>{education.startDate} - {education.endDate}</p>
            </div>

            <div>
              <button onClick={() => handleDeleteBtnOnClick(index)}>Delete</button>
              <button onClick={() => handleEditButtonOnClick(index)}>Edit</button>
            </div>
          </div>
        )
      ))}

      {isAddVisible && (
        <button onClick={addBtnOnClick}>Add More</button>
      )}

    </>
  )
}

export default EducationForm