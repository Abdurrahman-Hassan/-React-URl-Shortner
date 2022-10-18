import React from "react";
import "./App.css";
import Main from "./Components/Main";
import back from "./Components/Assets/back.webp";

function App() {
  return (
    <div style={{ backgroundImage: `url(${back})` }} className="w-screen">
      <Main />
    </div>
  );
}

export default App;
