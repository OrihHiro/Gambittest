import React from "react";

const CryptoForm = ({
  cryptoData,
  handleInputChange,
  handleImageUpload,
  addCrypto,
  editCrypto,
  onClose,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-1000">
      <div className="bg-white p-10 w-[30rem] h-auto rounded-lg shadow-md">
        <h3 className="flex justify-center items-center text-2xl font-semibold mb-[1rem]">
          Add or Edit Crypto
        </h3>
        <div className="flex flex-col items-center w-full">
          <label className="flex justify-center items-center">
            <div className="w-[6rem] font-bold">Name:</div>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              type="text"
              name="name"
              value={cryptoData.name}
              onChange={handleInputChange}
            />
          </label>
          {/* <label className="flex justify-center items-center">
            <div className="w-[6rem] font-bold">Image:</div>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              type="file"
              accept="image/*"
              name="image"
              onChange={handleImageUpload}
            />
          </label> */}
          <label className="flex justify-center items-center">
            <div className="w-[6rem] font-bold">Symbol:</div>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              type="text"
              name="symbol"
              value={cryptoData.symbol}
              onChange={handleInputChange}
            />
          </label>
          <label className="flex justify-center items-center">
            <div className="w-[6rem] font-bold">Price:</div>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              type="number"
              name="current_price"
              value={cryptoData.current_price}
              onChange={handleInputChange}
            />
          </label>
          {/* <label className="flex justify-center items-center">
            <div className="w-[6rem] font-bold">Market Cap:</div>
            <input
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              type="text"
              name="market_cap"
              value={cryptoData.market_cap}
              onChange={handleInputChange}
            />
          </label> */}
        </div>
        <div className="flex justify-center items-center gap-[0.5rem] mt-[2rem] ">
          <button
            className="text-[0.8rem] font-semibold bg-gray-300 border rounded-md px-[0.1rem] py-[0.4rem] w-[7rem] hover:bg-blue-400 hover:text-white "
            onClick={addCrypto}
          >
            {editCrypto ? "Edit Crypto" : "Add Crypto"}
          </button>
          <button
            className="text-[0.8rem] font-semibold  bg-gray-300 border rounded-md px-[0.1rem] py-[0.4rem] w-[6rem] hover:bg-blue-400 hover:text-white "
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoForm;
