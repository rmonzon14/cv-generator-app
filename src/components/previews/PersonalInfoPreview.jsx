import '../../styles/PersonalInfoPreview.css'

function PersonalInfoPreview({ data }) {
  const fullName = `${data.firstName} ${data.lastName}`;
  const location = `${data.country}, ${data.city}`;
  return (
    <div>
      <p>{fullName}</p>
      <p>{data.occupation}</p>

      <ul>
        <li>{data.email}</li>
        <li>{data.phone}</li>
        <li>{data.country === "" || data.city === "" ? "" : location}</li>
      </ul>
    </div>
  )
}

export default PersonalInfoPreview