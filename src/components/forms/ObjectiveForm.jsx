function ObjectiveForm() {
  return (
    <>
       <form id="objective-form" >
        Enter your objective
        <div>
          <input type="text" name="objective" id="objective" value={input} onChange={handleInputOnChange} required />
        </div>
      </form>
    </>
  )
}

export default ObjectiveForm