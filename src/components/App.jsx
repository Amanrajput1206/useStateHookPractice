import React, { useState } from "react";

function App() {
  const [time, settimes] = useState("TIME");
  function set() {
    let time = new Date().toLocaleTimeString();
    settimes(time);
  }
  setInterval(() => {
    set();
  }, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={set}>Get Time</button>
    </div>
  );
}

export default App;
