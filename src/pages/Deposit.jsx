import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DepositMoney = () => {
  const { id } = useParams();
  const [amount, setAmount] = useState(""); // Input amount
  const [balance, setBalance] = useState(null); // User's updated balance
  const [message, setMessage] = useState(""); // Status message

  const handleDeposit = async () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      setMessage("Please enter a valid amount.");
      return;
    }

    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}/api/banking/${id}/deposit`, // Dynamic userId
        amount,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setBalance(response.data); // Assuming the API returns the updated balance
      setMessage("Deposit successful!");
    } catch (error) {
      console.error("Error depositing money:", error);
      setMessage("Failed to deposit money. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-md dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
        Deposit Money
      </h1>
      <div className="mt-6">
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Enter Amount:
        </label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="block w-full mt-2 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter deposit amount"
        />
      </div>
      <button
        onClick={handleDeposit}
        className="w-full mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Deposit
      </button>
      {message && (
        <p
          className={`mt-4 text-center font-medium ${
            message.includes("successful") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
      {balance !== null && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Updated Balance:
          </h2>
          <p className="text-xl font-bold text-gray-900 dark:text-blue-400">
            ${balance}
          </p>
        </div>
      )}
    </div>
  );
};

export default DepositMoney;
