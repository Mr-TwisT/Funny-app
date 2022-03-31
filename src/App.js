import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import "./App.css";

const App = () => {
  const { data } = useContext(AppContext); //isDay, toggleIsDay

  console.log(data);
  const twopart = (
    <p>
      {data.setup} <br /> {data.delivery}
    </p>
  );
  const onepart = <p>{data.joke}</p>;

  return (
    <div className="app">
      <h1>You're weakly does of JokeS!</h1>
      <div className="app__jokeCard">
        <div className="app__jokeCard__category">
          <p>
            Category: <i>{data.category}</i>
          </p>
        </div>
        <div className="app__jokecard__text">
          {data.type === "twopart" ? twopart : onepart}
        </div>
      </div>
    </div>
  );
};

export default App;
