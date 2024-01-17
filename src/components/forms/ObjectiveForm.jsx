function ObjectiveForm({ data, onChange }) {
  return (
    <>
       <form id="objective-form" >
        Enter your objective
        <div>
          <input type="text" name="objective" id="objective" value={data} onChange={(e) => onChange(e)} required />
        </div>
      </form>
    </>
  )
}

export default ObjectiveForm