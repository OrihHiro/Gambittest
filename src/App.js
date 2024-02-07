import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cryptodetails from "./Components/cryptodetails";
import Cryptocrud from "./Components/cryptocrud";
import { useStore } from "./Components/Usestore";

function App() {
  const cryptoe = useStore((state) => state.cryptoe);
  const setCryptoe = useStore((state) => state.setCryptoe);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        );
        setCryptoe(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setCryptoe]);

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Cryptocrud cryptoe={cryptoe} setCryptoe={setCryptoe} />}
          />
          <Route
            path="/cryptodetails/:id"
            element={<Cryptodetails cryptoe={cryptoe} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
