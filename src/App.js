import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("haile");

  const handleEventClick = () => {
    alert("ok");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello</h1>
        <button onClick={() => handleEventClick()}>{name}</button>
      </header>
    </div>
  );
}

export default App;
