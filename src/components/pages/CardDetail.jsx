import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import SocialCards from "../items/SocialCards";
import DebitCard from "../items/DebitCard";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaShareSquare,
} from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";
import axios from "axios";

const dummyUserData = {
  accountHolderName: "John Doe",
  designation: "Software Engineer",
  accountNumber: "1234567890",
  ifscCode: "ABCD0123456",
  branchName: "Downtown Branch",
  balance: "$10,000",
  accountType: "Savings",
  accountStatus: "Active",
  address: "123 Main Street, Cityville, USA",
  phoneNumber: "+1 234 567 8901",
  email: "johndoe@example.com",
  gender: "Male",
  imageUrl:
    "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg",
};

const CardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(dummyUserData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  useEffect(() => {
    // Update fetchUserData function
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/banking/${id}`);
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Unable to fetch user details. Showing dummy data.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchUserData();
    }
  }, [id]);

  // added
  // useEffect(() => {
  //   if (userData && userData.length > 0) {
  //     const fetchImages = async () => {
  //       try {
  //         const updatedData = await Promise.all(
  //           userData.map(async (item) => {
  //             try {
  //               const response = await fetch(
  //                 `${import.meta.env.VITE_BASE_URL}/api/banking/${item.id}/image`
  //               );

  //               if (!response.ok) {
  //                 throw new Error(`HTTP error! status: ${response.status}`);
  //               }

  //               const blob = await response.blob(); // Convert to blob
  //               const imageUrl = URL.createObjectURL(blob); // Create URL for blob

  //               return { ...item, imageUrl };
  //             } catch (error) {
  //               console.error("Error fetching image for item:", item.id, error);
  //               return { ...item, imageUrl: "" }; // Fallback on error
  //             }
  //           })
  //         );
  //         setUserData(updatedData);
  //       } catch (err) {
  //         console.error("Error in fetchImages:", err);
  //       }
  //     };

  //     fetchImages();
  //   }
  // }, [userData]);

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/banking/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setShowDeleteDialog(false);
        toast.success("Account deleted successfully!");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        toast.error("Failed to delete account. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      toast.error("An error occurred while deleting the account.");
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen -mt-10">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
        <p className="mt-4 text-lg font-semibold text-gray-600">
          Loading user details...
        </p>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="flex h-screen w-full p-6 bg-gray-50 bg-fixed">
        {/* Left Section */}
        <div className="w-7/12 p-4 bg-white shadow rounded-l-2xl">
          <div className="flex flex-col items-center">
            {/* Image and Name */}
            <div className="flex items-start justify-start gap-4 mb-6 self-start ml-8">
              {/* <img
                src={userData.imageUrl ? userData.imageUrl : "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"}
                alt="Account Holder"
                className="rounded-full w-28 h-28"
              /> */}
              <img
                src={
                  userData.imageUrl
                    ? `${import.meta.env.VITE_BASE_URL}${userData.imageUrl}`
                    : "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg"
                }
                alt="Account Holder"
                className="rounded-full w-28 h-28"
              />
              <div className="-mt-2">
                <h2 className="text-2xl font-semibold relative top-2">
                  {userData.accountHolderName}
                </h2>
                <p className="text-sm text-gray-500 opacity-70 mt-2">
                  {userData.designation}
                </p>
              </div>
            </div>

            {/* Account Information Section */}
            <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start justify-between gap-8 -mt-5">
                <div className="flex-1 -ml-5">
                  <h2 className="text-xl font-semibold text-gray-800 mb-4">
                    Account Details
                  </h2>
                  <ul className="flex flex-col items-start gap-4 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-sm *:font-semibold *:text-[#434955] pb-3">
                    <li>
                      <svg
                        id="map"
                        viewBox="0 0 16 16"
                        className="fill-stone-700 group-hover:fill-[#58b0e0]"
                        height={15}
                        width={15}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                      </svg>
                      <p>Account Number: {userData.accountNumber}</p>
                    </li>
                    <li>
                      <svg
                        id="map"
                        viewBox="0 0 16 16"
                        className="fill-stone-700 group-hover:fill-[#58b0e0]"
                        height={15}
                        width={15}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                      </svg>
                      <p>IFSC Code: {userData.ifscCode}</p>
                    </li>
                    <li>
                      <svg
                        id="map"
                        viewBox="0 0 16 16"
                        className="fill-stone-700 group-hover:fill-[#58b0e0]"
                        height={15}
                        width={15}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                      </svg>
                      <p>Branch Name: {userData.branchName}</p>
                    </li>
                    <li>
                      <svg
                        id="map"
                        viewBox="0 0 16 16"
                        className="fill-stone-700 group-hover:fill-[#58b0e0]"
                        height={15}
                        width={15}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                      </svg>
                      <p>Balance Left: {userData.balance}</p>
                    </li>
                    <li>
                      <svg
                        id="map"
                        viewBox="0 0 16 16"
                        className="fill-stone-700 group-hover:fill-[#58b0e0]"
                        height={15}
                        width={15}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                      </svg>
                      <p>Account Type: {userData.accountType}</p>
                    </li>
                    <li>
                      <svg
                        id="map"
                        viewBox="0 0 16 16"
                        className="fill-stone-700 group-hover:fill-[#58b0e0]"
                        height={15}
                        width={15}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                      </svg>
                      <p>Account Status: {userData.accountStatus}</p>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 border-gray-200 pl-8">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                      Card Details
                    </h2>
                    <DebitCard userData={userData} />
                  </div>
                </div>
              </div>
            </div>

            {/* Deposit and Withdraw button */}
            <div className="flex gap-4 mt-3">
              <Link to={`/account/details/${id}/deposit`}>
                <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg">
                  Deposit
                </button>
              </Link>
              <Link to={`/account/details/${id}/withdraw`}>
                <button className="px-6 py-2 bg-red-600 hover:bg-red-600 text-white rounded-lg">
                  Withdraw
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px bg-gray-300"></div>

        {/* Right Section */}
        <div className="w-5/12 p-4 bg-white shadow rounded-r-2xl">
          <div className="bg-white  rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 -mt-5">
              Personal Information
            </h2>
            <div className="space-y-2">
              <p className="flex items-center text-gray-700 text-sm">
                <FaMapMarkerAlt className="text-brandPrimary mr-2" />
                <span className="font-medium">{userData.address}</span>
              </p>
              <div className="flex items-center gap-6">
                <p className="flex items-center text-gray-700 text-sm">
                  <FaPhone className="text-brandPrimary mr-2" />
                  <span className="font-medium">{userData.phoneNumber}</span>
                </p>
                <p className="flex items-center text-gray-700 text-sm">
                  <FaEnvelope className="text-brandPrimary mr-2" />
                  <span className="font-medium">{userData.email}</span>
                </p>
              </div>
              <p className="flex items-center text-gray-700 text-sm">
                <FaUser className="text-brandPrimary mr-2" />
                <span className="font-medium">{userData.gender}</span>
              </p>
              <p className="flex items-center text-gray-700 text-sm">
                <FaShareSquare className="text-brandPrimary mr-2" />
                <span className="font-medium">Socials</span>
              </p>
              <div className="mt-4 -ml-7 -mb-5">
                <SocialCards userData={userData} />
              </div>
            </div>
          </div>

          {/* Buttons Section */}
          <StyledWrapper>
            <div className="cards">
              <div
                className="card bg-blue-900"
                onClick={() => navigate(`/account/details/${id}/update`)}
              >
                <p className="tip">Update Account</p>
                <p className="second-text">Update your account information</p>
              </div>
              <div className="card bg-red-600" onClick={openDeleteDialog}>
                <p className="tip">Delete Account</p>
                <p className="second-text">Delete your account permanently</p>
              </div>
            </div>
          </StyledWrapper>
        </div>
      </div>

      {/* Delete Dialog */}
      {showDeleteDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              Are you sure you want to delete your account permanently?
            </h2>
            <div className="flex justify-end gap-4">
              <button
                onClick={closeDeleteDialog}
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardDetail;

const StyledWrapper = styled.div`
  .cards {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .cards .blue {
    background-color: #3b82f6;
  }

  .cards .green {
    background-color: #22c55e;
  }

  .cards .card {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 50px;
    width: 250px;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    transition: 400ms;
  }

  .cards .card p.tip {
    font-size: 1em;
    font-weight: 500;
  }

  .cards .card p.second-text {
    font-size: 0.7em;
  }

  .cards .card:hover {
    transform: scale(1.1, 1.1);
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9, 0.9);
  }
`;
