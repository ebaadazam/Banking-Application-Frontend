import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Withdraw = () => {
  const { id } = useParams();
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleWithdraw = async () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      setMessage("Please enter a valid amount.");
      return;
    }

    try {
      await axios.put(
        `${import.meta.env.VITE_BASE_URL}/api/banking/${id}/withdraw`,
        { amount: parseFloat(amount) },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setMessage("Withdrawal successful! Please check your updated balance");
    } catch (error) {
      console.error("Error withdrawing money:", error);
      setMessage("Failed to withdraw money. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-500 to-green-700">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8 dark:bg-gray-800 dark:shadow-gray-900">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Withdraw Money
        </h1>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-2">
          Securely withdraw money from your account
        </p>
        <div className="mt-6">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Enter Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 dark:bg-gray-900 dark:border-gray-600 dark:text-white"
            placeholder="Enter withdrawal amount"
          />
        </div>
        <button
          onClick={handleWithdraw}
          className="w-full mt-6 py-3 px-6 bg-gradient-to-r from-green-600 to-green-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out"
        >
          Withdraw
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
      </div>
    </div>
  );
};

export default Withdraw;
