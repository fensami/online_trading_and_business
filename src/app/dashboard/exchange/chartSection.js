"use client";
import React, { useState } from "react";
import DeepChart from "./DeepChart";
import TradingViewWidget from "./priceChart";

const ChartSection = () => {
  const [selectedChart, setSelectedChart] = useState("price");

  const handleSelectedChart = (tab) => {
    setSelectedChart(tab);
  };

  return (
    <div className="mx-auto">
      <div className="flex gap-3  font-semibold mb-4">
        <button
          className={`cursor-pointer ${selectedChart === "price"
            ? " btn btn-success btn-sm "
            : "btn btn-sm btn-success btn-outline"
            } mr-4`}
          onClick={() => handleSelectedChart("price")}
        >
          Price Chart
        </button>
        <button
          className={`cursor-pointer ${selectedChart === "deep"
            ? " btn btn-sm btn-success"
            : "btn btn-sm btn-success btn-outline"
            } mr-4`}
          onClick={() => handleSelectedChart("deep")}
        >
          Deep Chart
        </button>
      </div>

      {/* Show content based on selectedChart */}
      {selectedChart === "price" && (
        <div>
          <TradingViewWidget />
        </div>
      )}
      {selectedChart === "deep" && (
        <div>
          <DeepChart />
          hi
        </div>
      )}
    </div>
  );
};

export default ChartSection;
