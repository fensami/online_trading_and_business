"use client";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import "./Banner.css";

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(1); // Start with the second image

  // Array of background images for the carousel
  const backgroundImages = [
    "https://i.ibb.co/yVz4Lk2/banner1.jpg",
    "https://i.ibb.co/ThFR3VK/businessman-holds-money-coin-icons-eur-euro-dark-tone-background-growing-money-concept-business-inve.jpg",
    "https://i.ibb.co/T8g60Kh/blue-bitcoin-digital-currency-world-globe-hologram-384372-79.jpg",
  ];

  useEffect(() => {
    // Set up a timer to switch images every few seconds
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(timer); // Clean up the timer when the component unmounts
  }, []);

  return (
    <div className="banner ">
      {backgroundImages.map((imageUrl, index) => (
        <div
          key={index}
          className={`banner-slide  ${index === currentImage ? "active" : ""}`}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className="banner-text">
            <TypeAnimation
              className="text-red-500 font-bold"
              sequence={[
                "Crypto Exchange",
                1000,
                "Transaction ID",
                1000,
                "Stocks & indices",
                1000,
                "Commodities & Forex",
                1000,
                "Crypto currency Prices",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "3.5em" }}
              repeat={Infinity}
            />
            <h1 className="md:text-5xl text-2xl text-white font-semibold ">
              One broker, countless trading opportunities
            </h1>
            <p className="mt-5 md:text-lg  text-slate-200">
              Get the widest range of markets, trades, and platforms
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
