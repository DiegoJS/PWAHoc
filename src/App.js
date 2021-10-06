import React from "react";
import logo from "./logo.svg";
import "./App.css";
import WrappedLogin from "./hoc/WrappedLogin";
import LoginForm from "./components/LoginForm";

const LoginComponent = WrappedLogin(LoginForm);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LoginComponent greet="hello Diego" />
      </header>
    </div>
  );
}

export default App;
