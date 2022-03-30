import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isDay, setIsDay] = useState(true);

  const toggleIsDay = () => setIsDay((prevValue) => !prevValue);

  const fetchData = () => {
    const url =
      "https://jokeapi-v2.p.rapidapi.com/joke/Any?format=json&idRange=0-150";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "jokeapi-v2.p.rapidapi.com",
        "X-RapidAPI-Key": process.env.RAPID_API_KEY,
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ data, isDay, toggleIsDay }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
