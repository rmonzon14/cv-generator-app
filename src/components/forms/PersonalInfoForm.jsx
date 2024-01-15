function PersonalInfoForm({ props, onChange }) {
  const { firstName, lastName, occupation, email, phone, country, city } = props
  return (
    <>
      <form id="personal-info-form">
        Enter your personal info
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input type="text" name="firstName" id="first-name" value={firstName} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" name="lastName" id="last-name" value={lastName} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="occupation">Occupation: </label>
          <input type="text" name="occupation" id="occupation" value={occupation} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" value={email} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="phone">Phone: </label>
          <input type="tel" name="phone" id="phone" value={phone} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="country">Country: </label>
          <input type="text" name="country" id="country" value={country} onChange={onChange} />
        </div>

        <div>
          <label htmlFor="city">City: </label>
          <input type="text" name="city" id="city" value={city} onChange={onChange} />
        </div>
      </form>
    </>
  )
}

export default PersonalInfoForm