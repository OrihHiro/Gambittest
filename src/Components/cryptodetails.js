import React from "react";
import { useParams } from "react-router-dom";
import { useStore } from "./Usestore";

const Cryptodetails = () => {
  const { id } = useParams();
  const cryptoe = useStore((state) => state.cryptoe);
  console.log("id from URL parameters:", id, typeof id);
  console.log(
    "Cryptoe array:",
    cryptoe.map((crypto) => crypto.id)
  );
  const selectedCrypto = cryptoe.find(
    (crypto) => String(crypto.id) === String(id)
  );
  console.log("Selected Crypto:", selectedCrypto);

  const formatNumber = (number) => {
    console.log("Number:", number);
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

  console.log("Selected Crypto:", selectedCrypto);

  return (
    <div className="p-0 m-0">
      {selectedCrypto ? (
        <div className="flex flex-col items-center w-[100%] mx-auto my-0 p-[1rem] text-lg">
          <div className="flex flex-col my-[0.8rem] p-[1.5rem] w-full sm:w-[50%] border shadow-md rounded-md">
            <h1 className="flex justify-start text-4xl pl-[1rem] font-extrabold">
              {selectedCrypto.name}
            </h1>
          </div>
          <div className="flex flex-col my-[0.8rem] p-[1.5rem] w-full sm:w-[50%] border shadow-md rounded-md">
            <div className="flex items-center justify-between ml-[1rem]">
              <div className="">
                <p className="flex justify-center items-center text-white py-[0.2rem] px-[1rem] bg-blue-500 rounded-md mb-1">
                  #Rank {selectedCrypto.market_cap_rank}
                </p>
                <p className="text-[1.2rem] font-semibold ml-1">
                  {selectedCrypto.name} {selectedCrypto.symbol}
                </p>
              </div>
              <p className="text-[1.3rem] mx-5 font-extrabold">
                $ {selectedCrypto.current_price}
              </p>
            </div>
          </div>
          <div className="flex flex-col my-[0.8rem] p-[2rem] w-full h-90 sm:w-[50%] border shadow-md rounded-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
              <div className="">
                <div className="flex items-center border-b text-sm md:text-base border-gray-300 justify-between my-3 md:my-5 px-1">
                  <h4 className="font-bold">24H %:</h4>
                  <p>{selectedCrypto.price_change_percentage_24h}%</p>
                </div>
                <div className="flex items-center  border-b text-sm md:text-base  border-gray-300 justify-between my-3 md:my-5 px-1">
                  <h4 className="font-bold">Market Cap:</h4>
                  <p>${formatNumber(selectedCrypto.market_cap)}</p>
                </div>
                <div className="flex items-center  border-b text-sm md:text-base  border-gray-300 justify-between my-3 md:my-5 px-1">
                  <h4 className="font-bold">Supply:</h4>
                  <p>{formatNumber(selectedCrypto.circulating_supply)}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center  border-b text-sm md:text-base  border-gray-300 justify-between my-3 md:my-5 px-1">
                  <h4 className="font-bold">24 Hour High:</h4>
                  <p>${selectedCrypto.high_24h}</p>
                </div>
                <div className="flex items-center  border-b text-sm md:text-base border-gray-300 justify-between my-3 md:my-5 px-1">
                  <h4 className="font-bold">24 Hour Low:</h4>
                  <p>${selectedCrypto.low_24h}</p>
                </div>
                <div className="flex items-center  border-b text-sm md:text-base border-gray-300 justify-between my-3 md:my-5 px-1">
                  <h4 className="font-bold">All Time High:</h4>
                  <p>${selectedCrypto.ath}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Crypto Not Found</div>
      )}
    </div>
  );
};

export default Cryptodetails;
