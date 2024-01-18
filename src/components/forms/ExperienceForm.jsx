function ExperienceForm({ data, experienceOnChange }) {
  return (
    <>
      {data.map((experience, index) => (
        <form id="experience-form" key={experience.id} >
          Enter your experience
          <div>
            <label htmlFor="startDate">Start</label>
            <input type="date" name="startDate" id="startDate" value={experience.startDate} onChange={(e) => experienceOnChange(index, "startDate", e.target.value)} required />
          </div>

          <div>
            <label htmlFor="endDate">End</label>
            <input type="date" name="endDate" id="endDate" value={experience.endDate} onChange={(e) => experienceOnChange(index, "endDate", e.target.value)} required />
          </div>

          <div>
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" name="jobTitle" id="jobTitle" value={experience.jobTitle} onChange={(e) => experienceOnChange(index, "jobTitle", e.target.value)} required />
          </div>

          <div>
            <label htmlFor="companyName">Company Name</label>
            <input type="text" name="companyName" id="companyName" value={experience.companyName} onChange={(e) => experienceOnChange(index, "companyName", e.target.value)} required />
          </div>

          <div>
            <label htmlFor="location">Location</label>
            <input type="text" name="location" id="location" value={experience.location} onChange={(e) => experienceOnChange(index, "location", e.target.value)} required />
          </div>

          <button type="submit">Save</button>
        </form>
      ))}

    </>
  )
}

export default ExperienceForm