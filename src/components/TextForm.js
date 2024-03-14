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
    props.showAlert("converted to lopercase", "success")
  };

  const handleClear = () => {
    // console.log("Uppercase was clicked" + text);
    setText("");
    props.showAlert("Text clear", "success")
  };

  // setText("new text");
  const handleCopy = () => {
    let newText = document.getElementById("myBox").value;
    navigator.clipboard.writeText(newText);
    props.showAlert("Text copy", "success")
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[\s]+/);
    setText(newText.join("-"));
    props.showAlert(" Remove ExtraSpaces", "success")
  };

  const handleListenText = () => {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
      
  };
  

  return (
    <>
      <div className="container" style ={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2 className="text-center">{props.heading}</h2>
        <div className="mb-2">
          {/* <label for="myBox" class="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            placeholder="Enter text here"
            value={text}
            onChange={handleOnchange} style ={{ backgroundColor:props.mode==='dark'?'gray':'white',color: props.mode==='dark'?'white':'black'}}
            id="myBox"
            rows="12"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" disabled= {text.length < 1} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 " disabled= {text.length < 1} onClick={handleloClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-danger mx-1 " onClick={handleClear}>
          Clear
        </button>
        <button className="btn btn-primary mx-1 " onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1 " onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1 " onClick={handleListenText}>
          Listen text
        </button>
      </div>

      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Text summary</h2>
        <p>
          characters: {text.length} words: {text.split(" ").length}
        </p>
        <p>{0.008 * text.split("").length} Minues reatd</p>
        <h2>Preview</h2>
        <p>{text.length>0? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}
