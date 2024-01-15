function EducationPreview({ data }) {
  return (
    <>
      {data.map((education, index) => (
        <div key={index}>
          <p>{education.school}</p>
        </div>
      ))}
    </>
  );
}

export default EducationPreview