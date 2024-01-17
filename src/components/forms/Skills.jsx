

function SkillsForm(data) {
  return (
    <>
      <form id="skills-form">
        Enter your skill
        <div>
          <input type="text" name="skill" id="skill" />
          <button>Add</button>
        </div>
      </form>

      {data.length > 0 && (
        <div>
          <ul>
            {data.map((skill, index) => {
              <li key={index}>{skill}</li>
            })}
          </ul>
        </div>
      )}
    </>
  )
}

export default SkillsForm