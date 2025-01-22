import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SocialCards from "./SocialCards";
const CardDetail = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Received ID: ", id);
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/banking/${id}`)
        const data = await response.json();
        setUserData(data);
        console.log(userData)
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


  if (loading) {
    return <p>Loading user details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="profile-card w-full h-[580px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 bg-white flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
      <div className="avatar w-full h-[900px] pt-5 flex items-center justify-center flex-col gap-1">
        <div className="img_container w-full h-full flex items-center justify-center relative z-40 group">
          {/* Simple Image */}
          <img
            src={userData.imageUrl ? userData.imageUrl : '/src/assets/images/dummy.webp'} // Check if imageUrl is available, otherwise use the default image
            alt="Avatar"
            className="w-36 h-36 z-40 border-4 border-white rounded-full group-hover:border-8 group-hover:transition-all group-hover:duration-300 transition-all duration-300"
          />

          {/* Animated Lines */}
          <div className="absolute top-4 w-full h-[6px] bg-[#58b0e0] transition-all duration-300 group-hover:w-[1%]" />
          <div className="absolute bottom-4 w-full h-[6px] bg-[#58b0e0] transition-all duration-300 group-hover:w-[1%]" />

          {/* Background Animation */}
          <div className="absolute bg-blue-900 z-10 w-full h-full  transition-all duration-300 delay-700 group-hover:scale-[1.1] group-hover:delay-0" />
        </div>
      </div>

      {userData ? (
        <>
          <div className="headings *:text-center *:leading-4">
            <p className="text-xl font-serif font-semibold text-[#434955]">{userData.accountHolderName}</p>
            <p className="text-sm mt-1 font-semibold text-[#434955]">{userData.designation}</p>
          </div>

          <div className="w-full items-center justify-center flex">
            <ul className="flex flex-col items-start gap-4 has-[:last]:border-b-0 *:inline-flex *:gap-2 *:items-center *:justify-center *:border-b-[1.5px] *:border-b-stone-700 *:border-dotted *:text-xs *:font-semibold *:text-[#434955] pb-3">
              {/* Account Details */}
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
                <p>Balance Left: {userData.balance}</p>
              </li>
              <li>
                <svg id="map" viewBox="0 0 16 16" className="fill-stone-700 group-hover:fill-[#58b0e0]" height={15} width={15} xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                </svg>
                <p>Account Type: {userData.accountType}</p>
              </li>

              {/* Other Details Section */}
              <li className="flex flex-col gap-2">
                <h3 className="text-sm font-bold text-stone-700">Other Details</h3>
                {/* Phone and Email Row */}
                <div className="flex gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <svg id="phone" viewBox="0 0 24 24" className="fill-stone-700 group-hover:fill-[#58b0e0]" height={15} width={15} xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0h24v24H0V0z" fill="none" />
                      <path d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z" />
                    </svg>
                    <p>{userData.phoneNumber}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="fill-stone-700 group-hover:fill-[#58b0e0]" height={15} width={15} id="mail" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16,14.81,28.78,6.6A3,3,0,0,0,27,6H5a3,3,0,0,0-1.78.6Z" fill="#231f20" />
                      <path d="M16.54,16.84h0l-.17.08-.08,0A1,1,0,0,1,16,17h0a1,1,0,0,1-.25,0l-.08,0-.17-.08h0L2.1,8.26A3,3,0,0,0,2,9V23a3,3,0,0,0,3,3H27a3,3,0,0,0,3-3V9a3,3,0,0,0-.1-.74Z" fill="#231f20" />
                    </svg>
                    <p>{userData.email}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-2 -ml-12">
                  <svg id="map" viewBox="0 0 16 16" className="fill-stone-700 group-hover:fill-[#58b0e0]" height={19} width={15} xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 0C5.2 0 3 2.2 3 5s4 11 5 11 5-8.2 5-11-2.2-5-5-5zm0 8C6.3 8 5 6.7 5 5s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" />
                  </svg>
                  <p>{userData.address}</p>
                </div>
              </li>
            </ul>
          </div>
          <SocialCards />

          {/* Buttons Section */}
          <div className="flex gap-4 ">
            <Link to={`/account/details/${id}/deposit`}>
              <button
                className="px-6 py-2 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-400 transition-all"
              >
                Deposit
              </button>
            </Link>

            <Link to={`/account/details/${id}/withdraw`}>
              <button
                className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-300 transition-all"
              >
                Withdraw
              </button>
            </Link>
          </div>
        </>
      ) : (
        <p>No user data available.</p>
      )
      }
      <hr className="w-full group-hover:h-5 h-3 bg-[#58b0e0] group-hover:transition-all group-hover:duration-300 transition-all duration-300" />
    </div>
  );
}

export default CardDetail;
