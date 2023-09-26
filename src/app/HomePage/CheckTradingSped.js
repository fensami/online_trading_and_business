import React from "react";

const CheckTradingSped = () => {
  return (
    <div className="text-center my-8">
      <h1 className="md:text-xl ">
        All spreads are indicative. To view real-time spreads, please refer to
        your terminal.
      </h1>

      <div className="flex items-center gap-5 my-5 justify-center">
        <button className="btn btn-outline btn-accent md:text-xl">
          Check Trading
        </button>
        <button className="btn btn-active btn-accent md:text-xl">
          Trade Now
        </button>
      </div>
    </div>
  );
};

export default CheckTradingSped;
