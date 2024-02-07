import React from "react";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Cryptolist = ({ currentCryptos, handleEdit, handleRemove }) => {
  const formatNumber = (number) => {
    if (typeof number !== "number" || isNaN(number)) {
      return "N/A";
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
  return (
    <div>
      <div className="flex justify-between items-center text-xs md:text-lg font-bold h-12 md:h-16 border-gray-300 bg-blue-200 rounded-t-lg">
        <div className="flex justify-center items-center">
          <h3 className="ml-2 text-xs md:text-lg">Rank</h3>
          <h3 className="ml-8 text-xs md:text-lg">Coin</h3>
          <h3 className="ml-[3rem] text-xs md:text-lg md:ml-[7rem]">Symbol</h3>
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
                <p className="w-5 mx-3 md:text-sm">{crypto.market_cap_rank}</p>
                <img
                  className="w-[2rem] h-auto ml-1 md:ml-2 md:w-[2.5rem]"
                  src={crypto.image}
                  alt={crypto.name}
                />
                <p className="w-[4rem] ml-3 md:text-sm md:ml-2 font-semibold">
                  {crypto.name}
                </p>
                <div className="flex items-center text-center">
                  <p className="w-[4rem] md:text-sm md:ml-[4rem]">
                    {crypto.symbol}
                  </p>
                  <p
                    className={`w-[6rem] md:text-sm md:ml-[4rem] font-bold ${
                      crypto.price_change_percentage_24h < 0
                        ? "text-red-700"
                        : "text-blue-500"
                    }`}
                  >
                    ${" "}
                    {typeof crypto.current_price === "number"
                      ? crypto.current_price.toFixed(2)
                      : crypto.current_price}
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
    </div>
  );
};

export default Cryptolist;
