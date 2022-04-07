import React, { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/ui/Header";
import Search from "./components/ui/Search";
import CharacterGrid from "./components/characters/CharacterGrid";

import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  console.log("1");

  // useEffect(() => {
  //   fetch("https://www.breakingbadapi.com/api/characters")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setItems(data);
  //       setIsLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      console.log(result.data);
      console.log("2");
      setItems(result.data);
      setIsLoading(false);
    };
    // !need to call fetch items function
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
