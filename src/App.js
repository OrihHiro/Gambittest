import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cryptodetails from "./Components/cryptodetails";
import Cryptocrud from "./Components/cryptocrud";
import { useStore } from "./Components/Usestore";

function App() {
  const crypto = useStore((state) => state.crypto);
  const setCrypto = useStore((state) => state.setCrypto);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
        );
        setCrypto(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [setCrypto]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-bold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-lg font-bold">
        Error: Network Error. <br />
        Please try again later.
      </div>
    );
  }
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Cryptocrud crypto={crypto} setCrypto={setCrypto} />}
          />
          <Route
            path="/cryptodetails/:id"
            element={<Cryptodetails crypto={crypto} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
