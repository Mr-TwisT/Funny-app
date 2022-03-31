import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [isDay, setIsDay] = useState(true);

  const toggleIsDay = () => setIsDay((prevValue) => !prevValue);

  const fetchData = () => {
    const url = "http://localhost:8000/joke";
    const options = {
      method: "GET",
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
