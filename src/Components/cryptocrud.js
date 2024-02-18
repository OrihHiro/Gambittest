import React, { useState } from "react";
import Pagination from "./pagination";
import TopTrendingCoins from "./trending";
import Cryptolist from "./cryptolist";
import CryptoForm from "./cryptoform";
import { useStore } from "./Usestore";
import { IoMdSkipForward, IoMdSkipBackward } from "react-icons/io";

const Cryptocrud = () => {
  const InCryptoData = () => ({
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

  const { crypto, setCrypto, updateCrypto, removeCrypto } = useStore();
  const cryptoPerPage = 5;
  const [pageNow, setPageNow] = useState(0);
  const [cryptoData, setCryptoData] = useState(InCryptoData());
  const [editCrypto, setEditCrypto] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handlePageChange = ({ selected }) => {
    setPageNow(selected);
  };

  const handleFirstPage = () => {
    setPageNow(0);
  };

  const handleLastPage = () => {
    const lastPage = Math.ceil(crypto.length / cryptoPerPage) - 1;
    setPageNow(lastPage);
  };

  const currentCryptos = Array.isArray(crypto)
    ? crypto.slice(pageNow * cryptoPerPage, (pageNow + 1) * cryptoPerPage)
    : [];

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditCrypto(null);
    setCryptoData(InCryptoData());
  };

  const addCrypto = () => {
    if (editCrypto) {
      updateCrypto(editCrypto.id, cryptoData);

      setEditCrypto(null);
    } else {
      const newCrypto = {
        ...cryptoData,
      };
      setCrypto([...crypto, newCrypto]);
    }
    setShowForm(false);
    setCryptoData(InCryptoData());
  };

  const handleEdit = (id) => {
    const cryptoToEdit = crypto.find((crypto) => crypto.id === id);
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
      removeCrypto(id);
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
        <TopTrendingCoins crypto={crypto} />
        <Cryptolist
          currentCryptos={currentCryptos}
          handleEdit={handleEdit}
          handleRemove={handleRemove}
        />
        <button
          className="flex justify-center items-center font-semibold text-sm mx-auto h-[1.5rem] w-[10rem] md:h-[2rem] md:w-[12rem] border border-gray-300 rounded-md bg-white hover:bg-blue-200 hover:text-white"
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
            // setEditCrypto={setEditCrypto}
            onClose={handleCloseForm}
            className="flex flex-col justify-center items-center border border-gray-300 my-4 p-4"
          />
        )}
        <div className="flex justify-center items-center mt-6 mb-10">
          <button
            onClick={handleFirstPage}
            className="mx-1 border border-gray-200 rounded-md px-2 py-1"
          >
            <IoMdSkipBackward className="text-sm" />
          </button>
          <Pagination
            pageCount={Math.ceil(crypto.length / cryptoPerPage)}
            handlePageChange={handlePageChange}
            forcePage={pageNow}
          />
          <button
            onClick={handleLastPage}
            className="mx-1 border border-gray-200 rounded-md px-2 py-1"
          >
            <IoMdSkipForward className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cryptocrud;
