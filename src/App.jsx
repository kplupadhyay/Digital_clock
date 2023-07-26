import React, { useState } from "react";
import "./App.css";

const App = () => {
  const cTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(cTime);

  const updateTime = () => {
    const cTime = new Date().toLocaleTimeString();
    setTime(cTime);
  };
  setInterval(updateTime, 1000);

  return (
    <>
      <h2>DIGITAL CLOCK</h2>
      <h1>{time}</h1>
    </>
  );
};

export default App;
