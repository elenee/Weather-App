import "./App.css";
import Search from "./components/Search";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [city, setCity] = useState("Tbilisi");
  const [weather, setWeather] = useState({});
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c69af9bd409cd31877497c4b1e9021f`
      )
      .then((result) => {
        setWeather(result);
      })
      .catch((err) => {
        console.log("err");
      });
  }, [city]);

  const inputHandler = (e) => {
    setQuery(e.target.value);
  };

  const searchInput = () => {
    setCity(query);
    setQuery("");
    console.log(weather);
  };
  return (
    <div className="App">
      <Search
        query={query}
        inputHandler={inputHandler}
        searchInput={searchInput}
      />
      <div className="weather-card">
        {weather.data && <Card weather={weather} />}
      </div>
    </div>
  );
}

export default App;
