import React from "react";
import { Link } from "react-router-dom";

const TopTrendingCoins = ({ cryptoe }) => {
  const getTopTrendingCoins = () => {
    const sortedCryptoe = cryptoe.slice().sort((a, b) => {
      return b.price_change_percentage_24h - a.price_change_percentage_24h;
    });
    const topTrendingCoins = sortedCryptoe.slice(0, 4);
    return topTrendingCoins;
  };

  const topTrendingCoins = getTopTrendingCoins();

  return (
    <div className="my-3">
      <h2 className="flex justify-start text-2xl font-semibold mb-3">
        Top 4 Trending Coins Today
      </h2>
      <div className="flex justify-center w-full items-center mb-4">
        <div className="flex justify-between items-center w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {topTrendingCoins.map((coin, index) => (
              <Link to={`/cryptodetails/${coin.id}`} key={index}>
                <div
                  key={index}
                  className="flex-1 flex justify-center items-center border border-gray-300 ring ring-blue-50 transition-transform duration-500 hover:scale-105 rounded-md p-3"
                >
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className="w-10 h-10 md:w-12 md:h-12"
                      src={coin.image}
                      alt={coin.name}
                    />
                    <div className="flex justify-center items-center">
                      <p className="text-xs md:text-sm font-semibold my-2 mx-1">
                        {coin.symbol}
                      </p>
                      <p
                        className={`text-xs md:text-sm my-2 mx-1 ${
                          coin.price_change_percentage_24h < 0
                            ? "text-red-700"
                            : "text-blue-500"
                        }`}
                      >
                        {coin.price_percentage_24h < 0 ? "-" : "+"}
                        {coin.price_change_percentage_24h !== undefined &&
                          coin.price_change_percentage_24h.toFixed(2)}
                        %
                      </p>
                    </div>
                    <p className="text-sm md:text-base font-semibold">
                      $
                      {typeof coin.current_price === "number"
                        ? coin.current_price.toFixed(2)
                        : coin.current_price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopTrendingCoins;
