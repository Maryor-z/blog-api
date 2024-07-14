import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img
            className="writeImg"
            src="https://images.examples.com/wp-content/uploads/2018/06/Blog-Examples.png"
            alt=""
            />
      <form action="" className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            <div className="whiteFormGroup">
                <textarea 
                    placeholder="Tell your story..."
                    type="text"
                    className="writeInput writeText"></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </div>
      </form>
    </div>
  )
}
