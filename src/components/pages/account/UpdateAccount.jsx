import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const UpdateAccount = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        accountHolderName: '',
        phoneNumber: '',
        email: '',
        address: '',
        designation: '',
        accountNumber: '',
        ifscCode: '',
        accountType: '',
        accountStatus: '',
        imageUrl: null,
        debitCard: {
            cardNumber: '',
            cardName: '',
            validity: '',
        },
        socialLinks: {
            instagram: '',
            facebook: '',
            twitter: '',
            whatsApp: '',
        },
    });

    useEffect(() => {
        const fetchAccountDetails = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/banking/${id}`); // Use id in API request
                setFormData(response.data); // assuming response.data contains the account details
            } catch (error) {
                console.error('Error fetching account details:', error);
                setError('Error fetching account details.');
            }
        };
        fetchAccountDetails();
    }, [id]); // Re-fetch when the id changes

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle profile image change
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFormData({ ...formData, imageUrl: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    // Remove profile image
    const removeImage = () => {
        setFormData({ ...formData, imageUrl: null });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check for missing required fields
        for (const key in formData) {
            if (key !== 'imageUrl' && !formData[key]) {
                setError(`Please fill in the ${key.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`);
                return;
            }
        }
        setError('');

        try {
            const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/api/banking/${id}`, formData); // Use id in PUT request
            console.log('Account Updated Successfully:', response.data);
            toast.success('Account updated successfully!');
            setTimeout(() => {
                navigate(`/account/details/${id}`);
            }, 3000);
        } catch (error) {
            console.error('Error updating account:', error);
            alert('Error updating account. Please try again.');
        }
    };

    return (
        <>
            <Toaster position="top-center" />
            <form onSubmit={handleSubmit} className="mx-auto max-w-full bg-white rounded-md shadow-lg drop-shadow-md">
                <div className="px-4 py-3 flex justify-center">
                    <div>
                        <h2 className="font-bold" style={{ fontSize: 28, textAlign: 'center' }}>
                            Update your account details
                        </h2>
                        <p className="text-gray-500" style={{ fontSize: 15, textAlign: 'center' }}>
                            Update your banking details below.
                        </p>
                    </div>
                </div>
                <hr className="bg-gray-600" />
                <div className="px-4 pt-3 pb-6 space-y-3">
                    <h1 className="mt-6">Personal Details</h1>
                    <input
                        type="text"
                        name="accountHolderName"
                        value={formData.accountHolderName}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                        required
                    />
                    <div className="space-x-3 flex">
                        <input
                            type="number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Permanent Address"
                        className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                        required
                    />
                        <input
                            type="text"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            placeholder="Designation"
                            className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                            required
                        />
                          <div>
                        <h1 className="mt-6">Gender</h1>
                        <div className="mt-1 flex space-x-3">
                            <label htmlFor="male" className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400 focus:placeholder-gray-500">
                                <span>Male</span>
                                <input
                                    type="radio"
                                    id="male"
                                    name="gender"
                                    value="Male"
                                    checked={formData.gender === 'Male'}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label htmlFor="female" className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400 focus:placeholder-gray-500">
                                <span>Female</span>
                                <input
                                    type="radio"
                                    id="female"
                                    name="gender"
                                    value="Female"
                                    checked={formData.gender === 'Female'}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                    </div>

                    <h1 className="mt-6">Account Details</h1>
                    <input
                        type="text"
                        name="accountNumber"
                        value={formData.accountNumber}
                        onChange={handleChange}
                        placeholder="Account Number"
                        className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                        required
                    />
                    <input
                        type="text"
                        name="ifscCode"
                        value={formData.ifscCode}
                        onChange={handleChange}
                        placeholder="IFSC Code"
                        className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                        required
                    />
                    <input
                        type="text"
                        name="accountType"
                        value={formData.accountType}
                        onChange={handleChange}
                        placeholder="Account Type"
                        className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                        required
                    />
                    <div>
                        <h1 className="mt-6">Account Status</h1>
                        <div className="mt-1 flex space-x-3">
                            <label htmlFor="active" className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400">
                                <span>Active</span>
                                <input
                                    type="radio"
                                    id="active"
                                    name="accountStatus"
                                    value="Active"
                                    checked={formData.accountStatus === 'Active'}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label htmlFor="inactive" className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400">
                                <span>Inactive</span>
                                <input
                                    type="radio"
                                    id="inactive"
                                    name="accountStatus"
                                    value="Inactive"
                                    checked={formData.accountStatus === 'Inactive'}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                    </div>

                    <h1 className="mt-6">Debit Card Details</h1>
                    <input
                        type="text"
                        name="debitCard.cardNumber"
                        value={formData.debitCard.cardNumber}
                        onChange={handleChange}
                        placeholder="Card Number"
                        className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                        required
                    />
                    <input
                        type="text"
                        name="debitCard.cardName"
                        value={formData.debitCard.cardName}
                        onChange={handleChange}
                        placeholder="Card Name"
                        className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                        required
                    />
                    <input
                        type="text"
                        name="debitCard.validity"
                        value={formData.debitCard.validity}
                        onChange={handleChange}
                        placeholder="Validity (MM/YY)"
                        className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                        required
                    />

                    <h1 className="mt-6">Social Links</h1>
                    <input
                        type="text"
                        name="socialLinks.instagram"
                        value={formData.socialLinks.instagram}
                        onChange={handleChange}
                        placeholder="Instagram URL"
                        className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                    />
                    <input
                        type="text"
                        name="socialLinks.facebook"
                        value={formData.socialLinks.facebook}
                        onChange={handleChange}
                        placeholder="Facebook URL"
                        className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                    />
                    <input
                        type="text"
                        name="socialLinks.twitter"
                        value={formData.socialLinks.twitter}
                        onChange={handleChange}
                        placeholder="Twitter URL"
                        className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                    />
                    <input
                        type="text"
                        name="socialLinks.whatsApp"
                        value={formData.socialLinks.whatsApp}
                        onChange={handleChange}
                        placeholder="WhatsApp URL"
                        className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
                    />

                    <h1 className="mt-6">Profile Photo</h1>
                    <div className="flex items-center space-x-4">
                        {formData.imageUrl && (
                            <div className="relative">
                                <img
                                    src={formData.imageUrl}
                                    alt="Profile Preview"
                                    className="w-16 h-16 rounded-full border border-gray-300"
                                />
                                <button
                                    onClick={removeImage}
                                    className="absolute -top-2 -right-2 bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                >
                                    &times;
                                </button>
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="ring-1 ring-gray-400 rounded-md text-md px-2 py-2 bg-gray-100 file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-200 hover:file:bg-gray-300"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="text-white font-bold px-16 py-1 rounded-md"
                            style={{ backgroundColor: '#00A400', fontSize: 18 }}
                        >
                            Update Account
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default UpdateAccount;
