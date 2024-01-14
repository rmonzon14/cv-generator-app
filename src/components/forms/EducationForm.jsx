function EducationForm({ value, onChange, onSubmit }) {
  return (
<form id="personal-info-form" onSubmit={onSubmit}>
        Enter your education
        <div>
          <label htmlFor="school">School</label>
          <input type="text" name="school" id="school" value={value.school} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="location">Location</label>
          <input type="text" name="location" id="location" value={value.location} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="degree">Degree</label>
          <input type="text" name="degree" id="degree" value={value.degree} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="startDate"> </label>
          <input type="date" name="startDate" id="startDate" value={value.startDate} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="endDate"> </label>
          <input type="date" name="endDate" id="endDate" value={value.endDate} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="gpa"> </label>
          <input type="text" name="gpa" id="gpa" value={value.gpa} onChange={onChange} />
        </div>

        <button type="submit">Save</button>
      </form>
  )
}

export default EducationForm