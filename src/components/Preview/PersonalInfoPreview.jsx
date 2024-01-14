import '../../styles/PersonalInfoPreview.css'

function PersonalInfoPreview(
  { firstName,
    lastName,
    occupation,
    email,
    phone,
    country,
    city
  }
  ) {
  const fullName = `${firstName} ${lastName}`;
  const location = `${country}, ${city}`;
  return (
    <div>
      <p>{fullName}</p>
      <p>{occupation}</p>

      <ul>
        <li>{email}</li>
        <li>{phone}</li>
        <li>{country === "" || city === "" ? "" : location}</li>
      </ul>
    </div>
  )
}

export default PersonalInfoPreview