function PersonalInfoForm() {
  return (
    <>
      <div>
        <label htmlFor="first-name">First Name: </label>
        <input type="text" name="first-name" id="first-name" />
      </div>

      <div>
        <label htmlFor="last-name">Last Name: </label>
        <input type="text" name="last-name" id="last-name" />
      </div>

      <div>
        <label htmlFor="occupation">Occupation: </label>
        <input type="text" name="occupation" id="occupation" />
      </div>

      <div>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="phone">Phone: </label>
        <input type="tel" name="phone" id="phone" />
      </div>

      <div>
        <label htmlFor="country">Country: </label>
        <input type="text" name="country" id="country" />
      </div>

      <div>
        <label htmlFor="city">City: </label>
        <input type="text" name="city" id="city" />
      </div>
    </>
  )
}

export default PersonalInfoForm