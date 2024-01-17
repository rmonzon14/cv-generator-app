import { v4 as uuidv4 } from 'uuid';

function EducationPreview({ data }) {
  return (
    <>
      {data.map((education, index) => (
        <div key={education.id}>
          <p>{education.school}</p>
        </div>
      ))}
    </>
  );
}

export default EducationPreview