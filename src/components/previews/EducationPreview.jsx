import { v4 as uuidv4 } from 'uuid';

function EducationPreview({ data, showPreview }) {
  return (
    <>
      {showPreview &&
        data.map((education) => (
        <div key={education.id}>
          <p>{education.school}</p>
        </div>
      ))}
    </>
  );
}

export default EducationPreview