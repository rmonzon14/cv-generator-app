function EducationForm({ educationData, handleEducationOnChange, handleEducationOnSubmit, addBtnOnClick }) {
  return (
    <>
      {educationData.map((education, index) => (
        <form id="personal-info-form" onSubmit={(e) => handleEducationOnSubmit(e, index)} key={index} >
          Enter your education
          <div>
            <label htmlFor="school">School</label>
              <input type="text" name="school" id="school" value={education.school} onChange={(e) => handleEducationOnChange(index, "school", e.target.value)} />
          </div>

          <div>
            <label htmlFor="location">Location</label>
            <input type="text" name="location" id="location" value={education.location} onChange={(e) => handleEducationOnChange(index, "location", e.target.value)} />
          </div>

          <div>
            <label htmlFor="degree">Degree</label>
            <input type="text" name="degree" id="degree" value={education.degree} onChange={(e) => handleEducationOnChange(index, "degree", e.target.value)} />
          </div>

          <div>
            <label htmlFor="startDate"> </label>
            <input type="date" name="startDate" id="startDate" value={education.startDate} onChange={(e) => handleEducationOnChange(index, "startDate", e.target.value)} />
          </div>

          <div>
            <label htmlFor="endDate"> </label>
            <input type="date" name="endDate" id="endDate" value={education.endDate} onChange={(e) => handleEducationOnChange(index, "endDate", e.target.value)} />
          </div>

          <div>
            <label htmlFor="gpa"> </label>
            <input type="text" name="gpa" id="gpa" value={education.gpa} onChange={(e) => handleEducationOnChange(index, "gpa", e.target.value)} />
          </div>

          <button type="submit">Save</button>
      </form>
      ))}

      <button onClick={addBtnOnClick}>Add More</button>
    </>
  )
}

export default EducationForm