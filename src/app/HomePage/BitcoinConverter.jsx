"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [currencies, setCurrencies] = useState([]);
  const [flagIcons, setFlagIcons] = useState({});

  useEffect(() => {
    // Fetch the list of supported currencies
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(
          "https://api.exchangerate-api.com/v4/latest/USD"
        );
        const { rates } = response.data;
        setCurrencies(Object.keys(rates));

        // Fetch and store flag icons
        const flagIconData = await axios.get(
          "https://restcountries.com/v3.1/all"
        );
        const flagIconsData = {};
        flagIconData.data.forEach((country) => {
          flagIconsData[country.cca2] = country.flags.png;
        });
        setFlagIcons(flagIconsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCurrencies();
  }, []);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        );
        const rate = response.data.rates[toCurrency];
        setExchangeRate(rate);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };

    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    // Calculate the converted amount whenever exchangeRate or amount changes
    if (exchangeRate !== null) {
      const converted = amount * exchangeRate;
      setConvertedAmount(converted);
    }
  }, [amount, exchangeRate]);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  // console.log("first", flagIcons);

  return (
    <div className="currency-converter text-center bg-slate-900 md:p-12 p-6 lg:w-1/2 lg:mx-auto mx-6">
      <h1 className="md:text-3xl text-2xl font-semibold text-white mb-6">
        Currency Converter
      </h1>
      <div className="converter">
        <p className="text-left text-gray-200 my-1">Enter Amount</p>
        <input
          className="outline-none h-8 rounded-sm bg-gray-600 text-gray-100 p-4 w-full"
          type="text"
          value={amount}
          onChange={handleAmountChange}
        />
        <div className="flex justify-center items-center my-4 gap-4 w-full">
          <div className="w-full">
            <p className="text-left text-gray-200 my-1">From</p>
            <select
              className="h-8 bg-white px-4 rounded-sm w-full text-gray-900 "
              value={fromCurrency}
              onChange={handleFromCurrencyChange}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {flagIcons[currency] && (
                    <Image
                      src={flagIcons[currency]}
                      alt={`${currency} Flag`}
                      width={30}
                      height={20}
                    />
                  )}
                  {currency}
                </option>
              ))}
            </select>
          </div>
          <div className="text-white font-extrabold mt-6">
            <BsArrowRight />
            <BsArrowLeft />
          </div>
          <div className="w-full">
            <p className="text-left text-gray-200 my-1">To</p>
            <select
              className="h-8 bg-white px-4 rounded-sm w-full text-gray-900"
              value={toCurrency}
              onChange={handleToCurrencyChange}
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>
                  {flagIcons[currency] && (
                    <Image
                      src={flagIcons[currency]}
                      alt={`${currency} Flag`}
                      width={30}
                      height={20}
                    />
                  )}
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
        {convertedAmount !== null && (
          <p className="result text-white text-1xl font-medium ">
            {convertedAmount.toFixed(2)}
          </p>
        )}
        <button className="bg-gray-600 px-4 h-8 text-gray-300 rounded-sm w-full my-4">
          Get Exchange Rate
        </button>
      </div>
    </div>
  );
}

export default CurrencyConverter;
