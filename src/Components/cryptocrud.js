import React, { useState } from "react";
import Pagination from "./pagination";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
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

  const formatNumber = (number) => {
    if (typeof number !== "number" || isNaN(number)) {
      return "N/A"; // or any default value you prefer
    }

    if (number >= 1e9) {
      return `${(number / 1e9).toFixed(2)}B`;
    } else if (number >= 1e6) {
      return `${(number / 1e6).toFixed(2)}M`;
    } else if (number <= 1e4) {
      return number;
    } else {
      return number.toString();
    }
  };

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

  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    setCryptoData({
      ...cryptoData,
      image: selectedFile,
    });
  };
  return (
    <div className="flex justify-center lg:container lg:mx-auto">
      <div className="w-full px-2 md:w-[50rem]">
        <div className="flex justify-between items-center text-xs md:text-lg font-bold h-12 md:h-16 border-gray-300 bg-blue-200 rounded-t-lg">
          <div className="flex justify-center items-center">
            <h3 className="ml-2 text-xs md:text-lg">Rank</h3>
            <h3 className="ml-8 text-xs md:text-lg">Coin</h3>
            <h3 className="ml-[3rem] text-xs md:text-lg md:ml-[7rem]">
              Symbol
            </h3>
            <h3 className="ml-[2rem] text-xs md:text-lg md:ml-[5rem]">Price</h3>
            <h3 className="ml-[2rem] text-xs md:text-lg md:ml-[5rem]">
              Market Cap
            </h3>
          </div>
        </div>
        <ul className="p-0">
          {currentCryptos.map((crypto) => (
            <li
              className="flex justify-between items-center text-xs md:text-sm h-16 md:h-20 px-2 my-2 rounded-lg text-black ring ring-blue-50 shadow-md border-t border-gray-300 border-b transition-transform duration-500 hover:scale-105 list"
              key={crypto.id}
            >
              <Link to={`/cryptodetails/${crypto.id}`}>
                <div className="flex justify-center items-center">
                  <p className="w-5 mx-3 md:text-sm">
                    {crypto.market_cap_rank}
                  </p>
                  <img
                    className="w-[2rem] h-auto ml-1 md:ml-2 md:w-[2.5rem]"
                    src={crypto.image}
                    alt={crypto.name}
                  />
                  <p className="w-[4rem] ml-3 md:text-sm md:ml-2">
                    {crypto.name}
                  </p>
                  <div className="flex items-center text-center">
                    <p className="w-[4rem] md:text-sm md:ml-[4rem]">
                      {crypto.symbol}
                    </p>
                    <p className="w-[5rem] md:text-sm md:ml-[4rem]">
                      ${crypto.current_price}
                    </p>
                    <p className="w-[5rem] md:text-sm md:ml-[4rem]">
                      ${formatNumber(crypto.market_cap)}
                    </p>
                  </div>
                </div>
              </Link>
              <div className="flex justify-center items-center ml-3">
                <button
                  className="text-sm md:text-xl md:p-2 hover:text-blue-500"
                  onClick={() => handleEdit(crypto.id)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-sm md:text-xl md:p-2 hover:text-red-500"
                  onClick={() => handleRemove(crypto.id)}
                >
                  <MdDelete />
                </button>
              </div>
            </li>
          ))}
        </ul>
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
            handleImageUpload={handleImageUpload}
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
