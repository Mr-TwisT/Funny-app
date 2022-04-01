import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import "./App.css";

const App = () => {
  const { data, isDay, toggleIsDay, toggleMoreJokes } = useContext(AppContext);

  const twopart = (
    <p>
      {data.setup} <br />
      |
      <br /> {data.delivery}
    </p>
  );
  const onepart = <p>{data.joke}</p>;

  return (
    <div className="app">
      <button className="app__modeButton" onClick={toggleIsDay}>
        {isDay ? (
          <ion-icon name="sunny"></ion-icon>
        ) : (
          <ion-icon name="moon"></ion-icon>
        )}
      </button>
      <h1>Your daily dose of JokeS!</h1>
      <div className="app__jokeCard">
        <div className="app__jokeCard__category">
          <p>
            Category: <i>{data.category}</i>
          </p>
        </div>
        <div className="app__jokecard__text">
          {data.type === "twopart" ? twopart : onepart}
        </div>
        <button
          className="app__jokeCard__button"
          onClick={() => toggleMoreJokes()}
        >
          One more!
        </button>
      </div>
    </div>
  );
};

export default App;
