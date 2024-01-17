import { useEffect, useState } from 'react';

function SkillsForm({
  data,
  onSubmit,
  onClick
}) {
  const [input, setInput] = useState("");
  const [showSkills, setShowSkills] = useState(false);

  const handleInputOnChange = (e) => {
    setInput(e.target.value);
  }

  useEffect(() => {
    if (data.length > 0) {
      setShowSkills(!!data)
      setInput("");
    }
    console.log(input);
  }, [data]);

  return (
    <>
      <form id="skills-form" onSubmit={(e) => onSubmit(e, input)}>
        Enter your skill
        <div>
          <input type="text" name="skill" id="skill" value={input} onChange={handleInputOnChange} required />
          <button type="submit">Add</button>
        </div>
      </form>

      {showSkills && (
        <div>
          <ul>
            {data.map((skill) => (
              <li key={skill.id}>
                {skill.name}
                <button onClick={onClick}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default SkillsForm