import React, { useState } from "react";

function App() {
  const [isBttnOver, setIsOver] = useState(false);
  const [name, setName] = useState("");
  const [headingText, changeHeadingText] = useState("");
  function clickEvent(event) {
    changeHeadingText(name);

    event.preventDefault();
  }
  function handleMouseOver() {
    setIsOver(true);
  }

  function handleMouseOut() {
    setIsOver(false);
  }

  function handlerOnChange(event) {
    setName(event.target.value);
    console.log(name);
  }

  return (
    <div className="container">
      <h1>{"Hello " + headingText}</h1>
      <form onSubmit={clickEvent}>
        <input
          onChange={handlerOnChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button
          style={{ backgroundColor: isBttnOver ? "black" : "white" }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
