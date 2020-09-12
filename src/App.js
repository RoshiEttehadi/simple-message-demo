import React from "react";


function App() {
  //variable
  // const message = "JavaScript is cool!";
const [message, setMessage] = React.useState("JavaScript is so cool");

function handleClick() {
  setMessage("my new message");
}

  //template
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Update the message!</button>
    </div>
  );
}

export default App;