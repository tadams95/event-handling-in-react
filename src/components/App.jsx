import React, { useState } from "react";

function App() {

  const [headingText, setHeadingText] = useState("Hello");

  function handleClick() {
    setHeadingText("Submitted");
  }

  const [buttonColorOver, setButtonColorOver] = useState(false);

  function hoverOver() {
    setButtonColorOver(true)
  }

  function mouseLeave() {
    setButtonColorOver(false)
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style = {{backgroundColor: buttonColorOver ? "black" : "white"}}
      onClick={handleClick}
      onMouseOver={hoverOver}
      onMouseLeave={mouseLeave}
      >Submit</button>
      
    </div>
  );
}

export default App;
