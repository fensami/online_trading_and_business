"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const BitcoinConverter = () => {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [amount, setAmount] = useState("");
  const [selectedCrypto, setSelectedCrypto] = useState("bitcoin");
  const [cryptoList, setCryptoList] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("usd");
  const [currencyList, setCurrencyList] = useState([]);

  useEffect(() => {
    // Fetch the list of supported cryptocurrencies from the CoinGecko API
    const fetchCryptoList = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/list"
        );
        setCryptoList(response.data);
      } catch (error) {
        console.error("Error fetching cryptocurrency list:", error);
      }
    };

    // Fetch the list of supported fiat currencies
    const fetchCurrencyList = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/supported_vs_currencies"
        );
        setCurrencyList(response.data);
      } catch (error) {
        console.error("Error fetching currency list:", error);
      }
    };

    fetchCryptoList();
    fetchCurrencyList();
  }, []);

  useEffect(() => {
    // Fetch the Bitcoin price whenever selectedCrypto or selectedCurrency changes
    const fetchBitcoinPrice = async () => {
      if (!amount || isNaN(amount)) {
        setBitcoinPrice(null);
        return;
      }

      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${selectedCrypto}&vs_currencies=${selectedCurrency}`
        );
        const price = response.data[selectedCrypto][selectedCurrency];
        setBitcoinPrice(price * amount);
      } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
      }
    };

    fetchBitcoinPrice();
  }, [amount, selectedCrypto, selectedCurrency]);

  return (
    <div className="max-w-5xl mx-auto flex flex-col items-center justify-center bg-[#171f2a] text-white py-12 mt-16">
      <h1 className="md:text-4xl  mb-4 font-bold text-gray-300">
        {" "}
        <span className="text-red-500 ">BITCOIN</span> CALCULATOR
      </h1>
      <p className="text-gray-300 text-center mb-4">
        FIND OUT THE CURRENT BITCOIN VALUE WITH OUR EASY-TO-USE CONVERTER
      </p>
      <div className="md:flex items-center md:space-x-4 grid grid-cols-1 gap-5">
        <div className="flex">
          <input
            type="number"
            className="p-2 outline-none bg-black "
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className="bg-red-500 px-4 font-extrabold">$</button>
        </div>
        <select
          className="p-2 outline-none bg-black w-6/12"
          value={selectedCrypto}
          onChange={(e) => setSelectedCrypto(e.target.value)}
        >
          {cryptoList.map((crypto) => (
            <option key={crypto.id} value={crypto.id}>
              {crypto.name}
            </option>
          ))}
        </select>
        <select
          className="p-2 outline-none bg-red-500"
          value={selectedCurrency}
          onChange={(e) => setSelectedCurrency(e.target.value)}
        >
          {currencyList.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
      {bitcoinPrice !== null && !isNaN(bitcoinPrice) && (
        <p className="mt-4 text-white">
          {amount} {selectedCrypto.toUpperCase()} is equal to {bitcoinPrice}{" "}
          {selectedCurrency.toUpperCase()}.
        </p>
      )}
    </div>
  );
};

export default BitcoinConverter;
