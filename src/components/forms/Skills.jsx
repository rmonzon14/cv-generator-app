import { useEffect, useState } from 'react';

function SkillsForm({
  data,
  onSubmit
}) {
  const [input, setInput] = useState("");
  const [showSkills, setShowSkills] = useState(false);

  const handleInputOnChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  }

  useEffect(() => {
    setShowSkills(!!data)
  }, [data]);

  return (
    <>
      <form id="skills-form" onSubmit={(e) => onSubmit(e, input)}>
        Enter your skill
        <div>
          <input type="text" name="skill" id="skill" onChange={handleInputOnChange} />
          <button type="submit">Add</button>
        </div>
      </form>

      {showSkills && (
        <div>
          <ul>
            {data.map((skill) => (
              <li key={skill.id}>{skill.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default SkillsForm