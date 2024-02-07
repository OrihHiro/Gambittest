import React, { useState } from "react";
import Pagination from "./pagination";
import TopTrendingCoins from "./trending";
import Cryptolist from "./cryptolist";
import CryptoForm from "./cryptoform";
import { useStore } from "./Usestore";

const Cryptocrud = () => {
  const { cryptoe, setCryptoe, updateCryptoe, removeCryptoe } = useStore();
  const cryptoPerPage = 5;
  const [pageNow, setPageNow] = useState(0);

  const handlePageChange = ({ selected }) => {
    setPageNow(selected);
  };

  const currentCryptos = Array.isArray(cryptoe)
    ? cryptoe.slice(pageNow * cryptoPerPage, (pageNow + 1) * cryptoPerPage)
    : [];

  const [cryptoData, setCryptoData] = useState({
    name: "",
    symbol: "",
    image: "",
    current_price: 0,
    market_cap: 0,
    market_cap_rank: 0,
    price_change_percentage_24h: 0,
    circulating_supply: 0,
    high_24h: 0,
    low_24h: 0,
    ath: 0,
  });
  const [editCrypto, setEditCrypto] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditCrypto(null);
  };

  const addCrypto = () => {
    if (editCrypto) {
      updateCryptoe(editCrypto.id, cryptoData);

      setEditCrypto(null);
    } else {
      const newCrypto = {
        id: `newCrypto_${Date.now()}`,
        name: cryptoData.name,
        symbol: cryptoData.symbol,
        image: cryptoData.image,
        current_price: cryptoData.current_price,
        market_cap: cryptoData.market_cap,
        market_cap_rank: cryptoData.market_cap_rank,
        price_change_percentage_24h: cryptoData.price_change_percentage_24h,
        circulating_supply: cryptoData.circulating_supply,
        high_24h: cryptoData.high_24h,
        low_24h: cryptoData.low_24h,
        ath: cryptoData.ath,
      };
      setCryptoe([...cryptoe, newCrypto]);
    }
    setShowForm(false);
    setCryptoData({
      name: "",
      symbol: "",
      current_price: 0,
      market_cap: 0,
      market_cap_rank: 0,
      price_change_percentage_24h: 0,
      circulating_supply: 0,
      high_24h: 0,
      low_24h: 0,
      ath: 0,
    });
  };

  const handleEdit = (id) => {
    const cryptoToEdit = cryptoe.find((crypto) => crypto.id === id);
    if (cryptoToEdit) {
      setEditCrypto(cryptoToEdit);
      setCryptoData({
        name: cryptoToEdit.name,
        symbol: cryptoToEdit.symbol,
        current_price: cryptoToEdit.current_price,
        market_cap: cryptoToEdit.market_cap,
      });
      setShowForm(true);
    }
  };

  const handleRemove = (id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this crypto?"
    );
    if (confirmation) {
      removeCryptoe(id);
    }
  };

  const handleInputChange = (e) => {
    setCryptoData({
      ...cryptoData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex justify-center lg:container lg:mx-auto">
      <div className="w-full px-2 md:w-[50rem]">
        <TopTrendingCoins cryptoe={cryptoe} />
        <Cryptolist
          currentCryptos={currentCryptos}
          handleEdit={handleEdit}
          handleRemove={handleRemove}
        />
        <button
          className="flex justify-center items-center font-semibold text-sm mx-auto h-[1.5rem] w-[10rem] md:h-[2rem] md:w-[12rem] border border-gray-300 rounded-md bg-white hover:bg-blue-300 hover:text-white"
          onClick={toggleForm}
        >
          {showForm ? "Hide Form" : "Add Crypto"}
        </button>
        {showForm && (
          <CryptoForm
            cryptoData={cryptoData}
            handleInputChange={handleInputChange}
            addCrypto={addCrypto}
            editCrypto={editCrypto}
            setEditCrypto={setEditCrypto}
            onClose={handleCloseForm}
            className="flex flex-col justify-center items-center border border-gray-300 my-4 p-4"
          />
        )}
        <div className="flex justify-center items-center my-3">
          <Pagination
            pageCount={Math.ceil(cryptoe.length / cryptoPerPage)}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Cryptocrud;
