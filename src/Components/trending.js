import React from "react";
import { Link } from "react-router-dom";

const TopTrendingCoins = ({ cryptoe }) => {
  // Function to get the top 3 trending coins
  const getTopTrendingCoins = () => {
    // Sort the cryptoe array based on a certain criteria, e.g., price change percentage
    const sortedCryptoe = cryptoe.slice().sort((a, b) => {
      // Assuming price_change_percentage_24h is the field to consider
      return b.price_change_percentage_24h - a.price_change_percentage_24h;
    });

    // Get the top 3 coins
    const topTrendingCoins = sortedCryptoe.slice(0, 4);

    return topTrendingCoins;
  };

  const topTrendingCoins = getTopTrendingCoins();

  return (
    <div>
      <h2 className="flex justify-center text-2xl font-bold mb-3">
        Top 4 Trending Coins This Week
      </h2>
      <div className="flex justify-center w-full items-center mb-4">
        <div className="flex justify-between items-center w-full">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
            {topTrendingCoins.map((coin, index) => (
              <Link to={`/cryptodetails/${coin.id}`} key={index}>
                <div
                  key={index}
                  className="flex-1 flex justify-center items-center border border-gray-300 rounded-md p-3"
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
                      <p className="text-xs md:text-sm font-sm my-2 mx-1">
                        {coin.price_change_percentage_24h}
                      </p>
                    </div>
                    <p className="text-sm md:text-base">
                      ${coin.current_price}
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
