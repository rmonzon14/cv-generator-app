function SkillsPreview({ data }) {
  return (
    <>
      <ul>
        {data.map((skill, index) => (
          <li key={index}>{skill.name}</li>
        ))}
      </ul>
    </>
  )
}

export default SkillsPreview