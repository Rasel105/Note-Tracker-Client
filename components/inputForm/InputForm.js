import React from "react";

const inputForm = () => {

  const hanleNoteForm = event => {
    event.preventDefault();
    const user_name = event.target.user_name.value;
    const text = event.target.text.value;
    const noteData = { user_name, text }

    fetch(`http://localhost:5000/note`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(noteData)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
      })
  }


  return (
    <div className=" p-3 color-4D4C7D">
      <form onSubmit={hanleNoteForm} className="container " >
        <div className="input-group mb-3 mt-5">
          <input
            type="text"
            className="form-control"
            placeholder="Your name"
            aria-label="Username"
            name="user_name"
          />
        </div>

        <div className="input-group">
          <span className="input-group-text">Your notes</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            name="text"
            placeholder="Type your note"
          ></textarea>
        </div>
        <div className="mt-4">
          <input type="submit" value="submit" className="btn btn-info" />
        </div>
      </form>
    </div>
  );
};

export default inputForm;
