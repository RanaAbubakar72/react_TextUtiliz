import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnchange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };
  const handleloClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClear = () => {
    // console.log("Uppercase was clicked" + text);
    setText("");
  };

  // setText("new text");

  return (
    <div style={{backgroundColor: "", margin: "10px 33px"}}>
      <h2>{props.heading}</h2>
      <div className="mb-2">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea
          className="form-control"
          placeholder="Enter text here"  
          value={text}
          onChange={handleOnchange}
          id="myBox"
          rows="12"
          
        ></textarea>
      </div>
      <button  className="btn btn-primary mx-1 " onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1 " onClick={handleloClick}>
        Convert to lowercase
      </button>
      <button  className="btn btn-primary mx-1 " onClick={handleClear}>
        Clear
      </button>
    </div>
    );
}
