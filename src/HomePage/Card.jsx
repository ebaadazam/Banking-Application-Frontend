import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
const Card = () => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true); // To handle loading state

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/banking`);
        const data = await response.json();
        setAccounts(data);
        setLoading(false);
        console.log('Unique Accounts:', uniqueData);
      } catch (error) {
        console.error('Error fetching user accounts:', error);
        setLoading(false);
      } finally{
        setLoading(false);
      }
    };

    fetchAccounts();
  }, []);

  if (loading) {
    return <Loader />
  }

  return (
    <>
      {accounts.map((account) => (
        <div key={account.id} className="grid grid-cols-1 gap-6">
          <div className="relative max-w-sm border border-gray-200 rounded-lg bg-white p-4">
            {/* Status Button */}
            <div className="absolute top-2 right-2">
              <button
                className={`px-4 py-1 text-sm border border-green-500 hover:bg-green-200 font-semibold rounded-2xl ${account.accountStatus === 'Active'
                  ? 'bg-white text-green-400'
                  : 'bg-red-500 text-white'
                  }`}
              >
                {account.accountStatus}
              </button>
            </div>

            {/* Account Details */}
            <div className="flex items-center gap-4">
              <img
                src="/src/assets/images/bank_logo.png"
                alt="Bank Logo"
                className="w-6 h-6"
              />
              <p className="font-semibold text-gray-600">
                {account.accountHolderName}
              </p>
            </div>

            {/* Account Description */}
            <p className="mt-4 text-gray-600">
              This Account is currently managed by {account.accountHolderName}
              <br />
              Last Updated: {account.lastUpdatedDate}.
              <br />
              Click to open the Account details
            </p>

            {/* Action Button */}
            <div className="mt-6">
              <Link to={`/account/details/${account.id}`}>
                <button className="relative bg-gray-300 w-48 rounded-2xl h-10 text-black text-md font-semibold group">
                  <div className="bg-blue-900 rounded-xl h-8 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1024 1024"
                      className="w-6 h-6"
                    >
                      <path
                        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                        fill="#000000"
                      />
                      <path
                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                        fill="#000000"
                      />
                    </svg>
                  </div>
                  <p className="translate-x-2">View More</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;


// Loader
const Loader = () => {
  return (
    <StyledWrapper>
      <div className='absolute top-1/2 left-1/2 right-1/2 transform -translate-y-1/2'>
        <div className="loader flex justify-center items-center -mr-00">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </div>
      </div>
    </StyledWrapper>
  );
};
const StyledWrapper = styled.div`
  display: flex;
  justify-content: flex-end; /* Aligns content to the right */
  align-items: center; /* Centers content vertically */
  height: 50vh;
  width: 100%; /* Ensure it takes the full width of the screen */

  .loader {
    --dim: 3rem;
    width: var(--dim);
    height: var(--dim);
    position: absolute;
    animation: spin988 2s linear infinite;
  }

  .loader .circle {
    --color: #1e3a8a;  /* Dark blue color */
    --dim: 1.2rem;
    width: var(--dim);
    height: var(--dim);
    background-color: var(--color);
    border-radius: 50%;
    position: absolute;
  }

  .loader .circle:nth-child(1) {
    top: 0;
    left: 0;
  }

  .loader .circle:nth-child(2) {
    top: 0;
    right: 0;
  }

  .loader .circle:nth-child(3) {
    bottom: 0;
    left: 0;
  }

  .loader .circle:nth-child(4) {
    bottom: 0;
    right: 0;
  }

  @keyframes spin988 {
    0% {
      transform: scale(1) rotate(0);
    }

    20%, 25% {
      transform: scale(1.3) rotate(90deg);
    }

    45%, 50% {
      transform: scale(1) rotate(180deg);
    }

    70%, 75% {
      transform: scale(1.3) rotate(270deg);
    }

    95%, 100% {
      transform: scale(1) rotate(360deg);
    }
  }
`;
