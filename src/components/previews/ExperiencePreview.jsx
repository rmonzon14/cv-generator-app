function ExperiencePreview({ data }) {
  return (
    <div>
      <p>Professional Experience</p>
      {data.map((experience) => (
        <div key={experience.id}>
          <p>{experience.jobTitle}</p>
          <p>{experience.companyName}</p>
        </div>
      ))}
    </div>
  )
}

export default ExperiencePreview