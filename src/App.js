import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleEventClick = () => {
    alert("ok");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello</h1>
        <button onClick={() => handleEventClick()}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
