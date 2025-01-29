import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import UseEffectPractise from "./Components/UseEffectPractise";
import WindowTracker from "./Components/WindowTracker";
import { useState } from "react";

function App() {

  const [showWindowTracker, setShowWindowTracker] = useState(true);

  const toggle = () => {
    setShowWindowTracker(prevShowWindowTracker => !prevShowWindowTracker);
  }

  return (
    <div>
      <Header />
      <Main />
      {/* <UseEffectPractise /> */}
      {/* <button onClick={toggle}>Toggle Window Tracker </button>
      {showWindowTracker && <WindowTracker />} */}
    </div>
  );
}

export default App;
