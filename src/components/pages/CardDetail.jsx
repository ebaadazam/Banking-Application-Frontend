// import React, { useEffect, useState } from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import SocialCards from "./SocialCards";
// import toast, { Toaster } from 'react-hot-toast';

// const CardDetail = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showDeleteDialog, setShowDeleteDialog] = useState(false);

//   // Function to open the confirmation dialog
//   const openDeleteDialog = () => {
//     setShowDeleteDialog(true);
//   };

//   // Function to close the confirmation dialog
//   const closeDeleteDialog = () => {
//     setShowDeleteDialog(false);
//   };

//   useEffect(() => {
//     console.log("Received ID: ", id);
//     const fetchUserData = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/banking/${id}`)
//         const data = await response.json();
//         setUserData(data);
//         console.log(userData)
//       } catch (err) {
//         console.error("Error fetching user data:", err);
//         setError("Unable to fetch user details. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (id) {
//       fetchUserData();
//     }
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen -mt-10">
//         <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
//         <p className="mt-4 text-lg font-semibold text-gray-600">
//           Loading user details...
//         </p>
//       </div>
//     );
//   }


//   if (error) {
//     return <p>{error}</p>;
//   }

//   // Function to handle account deletion
//   const handleDeleteAccount = async () => {
//     try {
//       const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/banking/${id}`, {
//         method: "DELETE",
//       });

//       if (response.ok) {
//         setShowDeleteDialog(false);
//         toast.success('Account deleted successfully!');
//         setTimeout(() => {
//           navigate('/');
//         }, 3000);

//       } else {
//         toast.success('Failed to delete account. Please try again.');
//       }
//     } catch (error) {
//       console.error("Error deleting account:", error);
//       toast.success('An error occurred while deleting the account.');
//     }
//   };

//   return (
//     <>
//       <Toaster position="top-center" />
//       <div className="profile-card w-full h-[580px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
//         <div className="avatar w-full h-[900px] pt-5 flex items-center justify-center flex-col gap-1">
//           <div className="img_container w-full h-full flex items-center justify-center relative z-40 group">
//             {/* Simple Image */}
//             <img
//               src={userData.imageUrl ? userData.imageUrl : '/src/assets/images/dummy.webp'} // Check if imageUrl is available, otherwise use the default image
//               alt="Avatar"
//               className="w-36 h-36 z-40 border-4 border-white rounded-full group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
//             />

//             {/* Animated Lines */}
//             <div className="absolute top-4 w-full h-[6px] bg-[#58b0e0] transition-all duration-300 group-hover:w-[1%]" />
//             <div className="absolute bottom-4 w-full h-[6px] bg-[#58b0e0] transition-all duration-300 group-hover:w-[1%]" />

//             {/* Background Animation */}
//             <div className="absolute bg-blue-900 z-10 w-full h-full  transition-all duration-300 delay-700 group-hover:scale-[1.1] group-hover:delay-0" />
//           </div>
//         </div>

//         {userData ? (
//           <>
//             <div className="headings *:text-center *:leading-4">
//               <p className="text-xl font-serif font-semibold text-[#434955]">{userData.accountHolderName}</p>
//               <p className="text-sm mt-1 font-semibold text-[#434955]">{userData.designation}</p>
//             </div>

//             <div className="w-full items-center justify-center flex">
//               <ul className="flex flex-col items-start gap-4 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
//                 {/* Account Details */}
//                 <li>
//                   <svg id="map" viewBox="0 0 16 16" className="fill-stone-700 group-hover:fill-[#58b0e0]" height={15} width={15} xmlns="http://www.w3.org/2000/svg">
//                     <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
//                   </svg>
//                   <p>Account Number: {userData.accountNumber}</p>
//                 </li>
//                 <li>
//                   <svg id="map" viewBox="0 0 16 16" className="fill-stone-700 group-hover:fill-[#58b0e0]" height={15} width={15} xmlns="http://www.w3.org/2000/svg">
//                     <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
//                   </svg>
//                   <p>IFSC Code: {userData.ifscCode}</p>
//                 </li>
//                 <li>
//                   <svg id="map" viewBox="0 0 16 16" className="fill-stone-700 group-hover:fill-[#58b0e0]" height={15} width={15} xmlns="http://www.w3.org/2000/svg">
//                     <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
//                   </svg>
//                   <p>Balance Left: {userData.balance}</p>
//                 </li>
//                 <li>
//                   <svg id="map" viewBox="0 0 16 16" className="fill-stone-700 group-hover:fill-[#58b0e0]" height={15} width={15} xmlns="http://www.w3.org/2000/svg">
//                     <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
//                   </svg>
//                   <p>Account Type: {userData.accountType}</p>
//                 </li>

//                 {/* Other Details Section */}
//                 <li className="flex flex-col gap-2">
//                   <h3 className="text-sm font-bold text-stone-700">Other Details</h3>
//                   {/* Phone and Email Row */}
//                   <div className="flex gap-4 items-center">
//                     <div className="flex items-center gap-2">
//                       <svg id="phone" viewBox="0 0 24 24" className="fill-stone-700 group-hover:fill-[#58b0e0]" height={15} width={15} xmlns="http://www.w3.org/2000/svg">
//                         <path d="M0 0h24v24H0V0z" fill="none" />
//                         <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z" />
//                       </svg>
//                       <p>{userData.phoneNumber}</p>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <svg className="fill-stone-700 group-hover:fill-[#58b0e0]" height={15} width={15} id="mail" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z" fill="#231f20" />
//                         <path d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z" fill="#231f20" />
//                       </svg>
//                       <p>{userData.email}</p>
//                     </div>
//                   </div>

//                   {/* Address */}
//                   <div className="flex items-center gap-2 -ml-12">
//                     <svg id="map" viewBox="0 0 16 16" className="fill-stone-700 group-hover:fill-[#58b0e0]" height={19} width={15} xmlns="http://www.w3.org/2000/svg">
//                       <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
//                     </svg>
//                     <p>{userData.address}</p>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//             <div className="flex justify-center items-center space-x-16 py-4 -mt-4">
//               {/* Update Account */}
//               <Link to={`/account/details/${id}/update`} className="group">
//                 <p className="text-[15px] font-semibold text-gray-600 transition duration-200 group-hover:text-blue-600">
//                   Update Account
//                 </p>
//               </Link>

//               {/* Delete Account */}
//               <p
//                 onClick={openDeleteDialog}
//                 className="text-[15px] font-semibold text-gray-600 transition duration-200 cursor-pointer group-hover:text-red-600"
//               >
//                 Delete Account
//               </p>
//             </div>


//             {showDeleteDialog && (
//               <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//                 <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
//                   <h2 className="text-lg font-semibold mb-4">
//                     Are you sure you want to delete your account permanently?
//                   </h2>
//                   <div className="flex justify-end gap-4">
//                     <button
//                       onClick={closeDeleteDialog}
//                       className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       onClick={handleDeleteAccount}
//                       className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
//                     >
//                       Yes, Delete
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <SocialCards />

//             {/* Buttons Section */}
//             <div className="flex gap-4 ">
//               <Link to={`/account/details/${id}/deposit`}>
//                 <button
//                   className="px-6 py-2 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-400 transition-all"
//                 >
//                   Deposit
//                 </button>
//               </Link>

//               <Link to={`/account/details/${id}/withdraw`}>
//                 <button
//                   className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-300 transition-all"
//                 >
//                   Withdraw
//                 </button>
//               </Link>
//             </div>
//           </>
//         ) : (
//           <p>No user data available.</p>
//         )
//         }
//         <hr className="w-full group-hover:h-5 h-3 bg-[#58b0e0] group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
//       </div>
//     </>
//   );
// }

// export default CardDetail;

import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import SocialCards from "../items/SocialCards";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaUser, FaShareSquare } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import styled from 'styled-components';
import DebitCard from '../items/DebitCard';

const CardDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
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
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/banking/${id}`);
        const data = await response.json();
        setUserData(data);
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Unable to fetch user details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchUserData();
    }
  }, [id]);

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/banking/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setShowDeleteDialog(false);
        toast.success('Account deleted successfully!');
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        toast.error('Failed to delete account. Please try again.');
      }
    } catch (error) {
      console.error("Error deleting account:", error);
      toast.error('An error occurred while deleting the account.');
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
      <div className="flex h-screen w-screen p-6 bg-gray-50">
        {/* Left Section */}
        <div className="w-7/12 p-4 bg-white shadow rounded-l-2xl">
          <div className="flex flex-col items-center">
            {/* Image and Name */}
            <div className="flex items-start justify-start gap-4 mb-6 self-start ml-8">
  <img
    src={userData.imageUrl ? userData.imageUrl : "https://loremflickr.com/150/150/portrait"}
    alt="Account Holder"
    className="rounded-full w-28 h-28"
  />
  <div className="-mt-2">
    <h2 className="text-2xl font-semibold relative top-2">{userData.accountHolderName}</h2>
    <p className="text-sm text-gray-500 opacity-70 mt-2">{userData.designation}</p>
  </div>
</div>


            {/* Account Information Section */}
            <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <ul className="flex flex-col items-start gap-4 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
                    <li>
                      <svg id="map" viewBox="0 0 16 16" className="fill-stone-700 group-hover:fill-[#58b0e0]" height={15} width={15} xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                      </svg>
                      <p>Account Number: {userData.accountNumber}</p>
                    </li>
                    <li>
                      <svg id="map" viewBox="0 0 16 16" className="fill-stone-700 group-hover:fill-[#58b0e0]" height={15} width={15} xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                      </svg>
                      <p>IFSC Code: {userData.ifscCode}</p>
                    </li>
                    <li>
                      <svg id="map" viewBox="0 0 16 16" className="fill-stone-700 group-hover:fill-[#58b0e0]" height={15} width={15} xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                      </svg>
                      <p>Branch Name: {userData.branchName}</p>
                    </li>
                    <li>
                      <svg id="map" viewBox="0 0 16 16" className="fill-stone-700 group-hover:fill-[#58b0e0]" height={15} width={15} xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                      </svg>
                      <p>Balance Left: {userData.balance}</p>
                    </li>
                    <li>
                      <svg id="map" viewBox="0 0 16 16" className="fill-stone-700 group-hover:fill-[#58b0e0]" height={15} width={15} xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                      </svg>
                      <p>Account Type: {userData.accountType}</p>
                    </li>
                    <li>
                      <svg id="map" viewBox="0 0 16 16" className="fill-stone-700 group-hover:fill-[#58b0e0]" height={15} width={15} xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                      </svg>
                      <p>Account Status: {userData.accountStatus}</p>
                    </li>
                  </ul>
                </div>
                
                <div className="flex-1 border-l border-gray-200 pl-8">
                  <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-gray-800">Debit Card Information</h2>
                    <DebitCard/>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Deposit and Withdraw button */}
            <div className="flex gap-4 mt-6">
              <Link to={`/account/details/${id}/deposit`}>
                <button className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg">Deposit</button>
              </Link>
              <Link to={`/account/details/${id}/withdraw`}>
                <button className="px-6 py-2 bg-red-600 hover:bg-red-600 text-white rounded-lg">Withdraw</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-px bg-gray-300"></div>

        {/* Right Section */}
        <div className="w-5/12 p-4 bg-white shadow rounded-r-2xl">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
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
                <SocialCards />
              </div>
            </div>
          </div>

          {/* Buttons Section */}
          <StyledWrapper>
            <div className="cards mt-4">
              <div className="card bg-blue-900" onClick={() => navigate(`/account/details/${id}/update`)}>
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
    font-size: .7em;
  }

  .cards .card:hover {
    transform: scale(1.1, 1.1);
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9, 0.9);
  }
`;