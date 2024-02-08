import React from "react";

const Header = () => {
  return (
    <header className="flex justify-center items-center bg-gray-900 text-white h-[10rem] md:h-40 mb-2">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 font-poppins">
          CoinDitto
        </h1>
        <p className="text-m md:text-lg font-poppins">
          Access the most up-to-date cryptocurrency data conveniently in one
          place.
        </p>
      </div>
    </header>
  );
};

export default Header;
