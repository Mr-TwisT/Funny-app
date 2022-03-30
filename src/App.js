import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import "./App.css";

const App = () => {
  const { data, isDay, toggleIsDay } = useContext(AppContext);

  return (
    <div className="app">
      <h1>You're weakly does of JokeS!</h1>
      <div className="app__jokeCard"></div>
    </div>
  );
};

export default App;
