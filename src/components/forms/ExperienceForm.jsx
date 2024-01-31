function ExperienceForm(
  {
    data,
    experienceOnChange,
    experienceOnSubmit,
    showAddBtn,
    activeIndex,
    addBtnOnClick,
  }
  ) {

  return (
    <>
      {data.map((experience, index) => (
        index === activeIndex.experience ? (
          <form id={`experience-form-${index}`} key={experience.id} onSubmit={(e) => experienceOnSubmit(`experience-form-${index}`, e, index)} >
            Enter your experience
          <div>
            <label htmlFor="startDate">Start</label>
            <input type="date" name="startDate" id="startDate" value={experience.startDate} onChange={(e) => experienceOnChange(index, "startDate", e.target.value)} />
          </div>

          <div>
            <label htmlFor="endDate">End</label>
            <input type="date" name="endDate" id="endDate" value={experience.endDate} onChange={(e) => experienceOnChange(index, "endDate", e.target.value)} />
          </div>

          <div>
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" name="jobTitle" id="jobTitle" value={experience.jobTitle} onChange={(e) => experienceOnChange(index, "jobTitle", e.target.value)} />
          </div>

          <div>
            <label htmlFor="companyName">Company Name</label>
            <input type="text" name="companyName" id="companyName" value={experience.companyName} onChange={(e) => experienceOnChange(index, "companyName", e.target.value)} />
          </div>

          <div>
            <label htmlFor="location">Location</label>
            <input type="text" name="location" id="location" value={experience.location} onChange={(e) => experienceOnChange(index, "location", e.target.value)} />
          </div>

          <div>
            <p>Responsibilities</p>
            <div>
              <div>
                <input name="responsibility-1" id="responsibility-1" placeholder="Describe your responsibility"></input>
              </div>
              <div>
                <input name="responsibility-2" id="responsibility-2" placeholder="Describe your responsibility"></input>
              </div>
              <div>
                <input name="responsibility-3" id="responsibility-3" placeholder="Describe your responsibility"></input>
              </div>
              <div>
                <input name="responsibility-4" id="responsibility-4" placeholder="Describe your responsibility"></input>
              </div>
              <div>
                <input name="responsibility-5" id="responsibility-5" placeholder="Describe your responsibility"></input>
              </div>
            </div>
          </div>

          <button type="submit">Save</button>
        </form>
        ) : (
          <div key={experience.id}>
            <div>
              <p>{experience.jobTitle}</p>
              <p>{experience.startDate} - {experience.endDate}</p>
            </div>

            <div>
              <button onClick={() => handleDeleteBtnOnClick(index)}>Delete</button>
              <button onClick={() => handleEditButtonOnClick(index)}>Edit</button>
            </div>
          </div>
        )
      ))}

      {showAddBtn.experience && (
        <button id="experience-add-btn" onClick={() => addBtnOnClick("experience-add-btn")}>Add More</button>
      )}
    </>
  )
}

export default ExperienceForm