import React from "react";
import { useState } from "react";

const DebtorsTable = ({ name }) => {
  const [showInfo, setShowInfo] = useState(null);

  const handleClick = () => {
    if (showInfo === null) {
      setShowInfo(true);
    } else if (showInfo) {
      setShowInfo(false);
    } else {
      setShowInfo(true);
    }
  };

  return (
    <div className="w-full bg-[#C0C0C3] bg-opacity-20 border-white/10 border-[1px] shadow-md shadow-black/80 rounded-md">
      <div
        className={`cursor-pointer flex justify-between items-center`}
        onClick={handleClick}
      >
        <span>{name}</span>
        <i
          className={`mr-auto bi bi-arrow-up-short text-2xl transition-all duration-100
      ${showInfo ? "rotate-180" : ""}`}
        ></i>
      </div>
      <p
        className={`
    ${
      showInfo ? "h-[5rem]" : "h-0"
    } transition-all duration-75 overflow-hidden`}
      >
        algo
      </p>
    </div>
  );
};

export default DebtorsTable;
