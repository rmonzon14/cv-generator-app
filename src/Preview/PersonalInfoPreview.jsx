function PersonalInfoPreview({ firstName, lastName }) {
  const fullName = firstName + lastName;
  return (
    <div>
      <p>{fullName}</p>
    </div>
  )
}

export default PersonalInfoPreview