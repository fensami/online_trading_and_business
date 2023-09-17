"use client";
import useAuth from "@/hooks/useAuth";
import React, { useEffect, useState } from "react";

const UserBalanceSection = () => {
  const [usersBalance, setUsersBalance] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  console.log("first", user);

  useEffect(() => {
    fetch("https://online-trading-and-business-five.vercel.app/api/exchange")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setUsersBalance(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const userWithBalance = user
    ? usersBalance.find((findUser) => findUser.email === user.email)
    : null;

  console.log(userWithBalance, "serch uert");

  return (
    <div>
      <h1 className="text-2xl font-semibold">Total Balance:</h1>
      <h1 className="text-[28px] font-semibold">
        ${userWithBalance ? userWithBalance.total_balance : "00.00"}
      </h1>
      <p className="text-[#10b981">
        ${userWithBalance ? userWithBalance.withdraw_balance : "00.00"}
      </p>
      <button className=" text-white my-2">Total Withdraw</button>
    </div>
  );
};

export default UserBalanceSection;
