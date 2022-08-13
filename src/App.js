import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import Todo from "./views/Todo";
import Covid from "./views/Covid";
import { Countdown, NewCountdown } from "./views/Countdown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./views/Nav";
import "./views/Nav.scss";
import Home from "./views/Home";

function App() {
  const [name, setName] = useState("haile");
  const [todos, setTodos] = useState([
    { id: 1, name: "haile" },
    { id: 2, name: "hai" },
  ]);

  useEffect(() => {}, []);

  const handleEventClick = () => {
    if (!name) {
      alert("empty Name");
      return;
    }

    let todosNew = { id: Math.random(), name: name };

    setTodos([...todos, todosNew]);

    setName("");
  };

  const handleOnChange = (event) => {
    setName(event.target.value);
  };

  const handleDelete = (id) => {
    let list = todos;
    list = list.filter((x) => x.id !== id);
    setTodos(list);
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <hr />
          {/* <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello</h1>
        <div>
          <Todo todos={todos} handleDelete={handleDelete} />
        </div>
        <div>
          <hr />
          <Todo todos={todos.filter((x) => x.id === 1)} />
        </div>
        <br />
        <input type="text" onChange={(event) => handleOnChange(event)} />
        <button onClick={() => handleEventClick()}>{name}</button> */}
          <Switch>
            <Route path="/todo">
              <Todo todos={todos} handleDelete={handleDelete} />
            </Route>
            <Route path="/covid">
              <Covid></Covid>
            </Route>
            <Route path="/countdown">
              <Countdown></Countdown>
              <hr />
              -------
              <NewCountdown></NewCountdown>
            </Route>
            <Route path="/" exact={true}>
              <Home></Home>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
