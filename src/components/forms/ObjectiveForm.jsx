function ObjectiveForm({ data, onChange }) {
  return (
    <>
       <form id="objective-form" >
        Enter your objective
        <div>
          <textarea cols="40" rows="5" name="objective" id="objective" value={data} onChange={(e) => onChange(e)} ></textarea>
        </div>
      </form>
    </>
  )
}

export default ObjectiveForm