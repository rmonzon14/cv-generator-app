function EducationForm(
  {
    data,
    handleEducationOnChange,
    handleEducationOnSubmit,
    activeIndex,
    handleDeleteBtnOnClick,
    handleEditButtonOnClick,
    showAddBtn,
    addBtnOnClick,
  }
) {
  return (
    <>
      {data.map((education, index) => (
        index === activeIndex.education ? (
          <form id={`education-form-${index}`} onSubmit={(e) => handleEducationOnSubmit(`education-form-${index}`, e, index)} key={education.id} >
            Enter your education
            <div>
              <label htmlFor="school">School</label>
              <input type="text" name="school" id="school" value={education.school} onChange={(e) => handleEducationOnChange(index, "school", e.target.value)}  />
            </div>

            <div>
              <label htmlFor="location">Location</label>
              <input type="text" name="location" id="location" value={education.location} onChange={(e) => handleEducationOnChange(index, "location", e.target.value)}  />
            </div>

            <div>
              <label htmlFor="degree">Degree</label>
              <input type="text" name="degree" id="degree" value={education.degree} onChange={(e) => handleEducationOnChange(index, "degree", e.target.value)}  />
            </div>

            <div>
              <label htmlFor="startDate">Start</label>
              <input type="date" name="startDate" id="startDate" value={education.startDate} onChange={(e) => handleEducationOnChange(index, "startDate", e.target.value)}  />
            </div>

            <div>
              <label htmlFor="endDate">End</label>
              <input type="date" name="endDate" id="endDate" value={education.endDate} onChange={(e) => handleEducationOnChange(index, "endDate", e.target.value)}  />
            </div>

            <div>
              <label htmlFor="gpa">GPA</label>
              <input type="text" name="gpa" id="gpa" value={education.gpa} onChange={(e) => handleEducationOnChange(index, "gpa", e.target.value)}  />
            </div>

            <button type="submit">Save</button>
        </form>
        ) : (
          <div key={education.id}>
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

      {showAddBtn.education && (
        <button id="education-add-btn" onClick={() => addBtnOnClick("education-add-btn")}>Add More</button>
      )}

    </>
  )
}

export default EducationForm