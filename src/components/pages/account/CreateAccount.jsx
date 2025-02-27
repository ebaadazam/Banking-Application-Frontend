import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const CreateAccount = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        accountHolderName: '',
        phoneNumber: '',
        email: '',
        address: '',
        designation: '',
        gender: '',
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData({
                ...formData,
                [parent]: {
                    ...formData[parent],
                    [child]: value,
                },
            });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

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

    const removeImage = () => {
        setFormData({ ...formData, imageUrl: null });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     for (const key in formData) {
    //         if (key !== 'imageUrl' && !formData[key]) {
    //             setError(`Please fill in the ${key.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`);
    //             return;
    //         }
    //     }
    //     setError('');

    //     try {
    //         const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/banking`, formData);
    //         console.log('Account Created Successfully:', response.data);
    //         toast.success('Account created successfully!');
    //         setTimeout(() => {
    //             navigate('/');
    //         }, 3000);
    //         setFormData({
    //             accountHolderName: '',
    //             phoneNumber: '',
    //             email: '',
    //             address: '',
    //             designation: '',
    //             gender: '',
    //             accountNumber: '',
    //             ifscCode: '',
    //             accountType: '',
    //             accountStatus: '',
    //             imageUrl: null,
    //             debitCard: {
    //                 cardNumber: '',
    //                 cardName: '',
    //                 validity: '',
    //             },
    //             socialLinks: {
    //                 instagram: '',
    //                 facebook: '',
    //                 twitter: '',
    //                 whatsApp: '',
    //             },
    //         });
    //     } catch (error) {
    //         console.error('Error creating account:', error);
    //         toast.error('Error creating account. Please try again.');
    //     }
    // };
    
    const dataURLtoFile = (dataurl, filename) => {
        const arr = dataurl.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        for (const key in formData) {
            if (key !== 'imageUrl' && !formData[key]) {
                setError(`Please fill in the ${key.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`);
                return;
            }
        }
        setError('');
    
        const formDataToSend = new FormData();
        formDataToSend.append('accountDTO', new Blob([JSON.stringify(formData)], { type: 'application/json' }));
        if (formData.imageUrl) {
            const file = dataURLtoFile(formData.imageUrl, 'profile.jpg');
            formDataToSend.append('file', file);
        }
    
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/banking`, formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Account Created Successfully:', response.data);
            toast.success('Account created successfully!');
            setTimeout(() => {
                navigate('/');
            }, 3000);
            setFormData({
                accountHolderName: '',
                phoneNumber: '',
                email: '',
                address: '',
                designation: '',
                gender: '',
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
        } catch (error) {
            console.error('Error creating account:', error);
            toast.error('Error creating account. Please try again.');
        }
    };

    return (
        <>
            <Toaster position="top-center" />
            <form onSubmit={handleSubmit} className="mx-auto max-w-full bg-white rounded-lg shadow-lg p-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">Safely Create Your Account</h2>
                    <p className="text-gray-600 mt-2">Getting started with our bank is quick and secure.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Personal Details */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-700">Personal Details</h3>
                        <input
                            type="text"
                            name="accountHolderName"
                            value={formData.accountHolderName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            placeholder="Phone Number"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Permanent Address"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="text"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            placeholder="Designation"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        {/* <div>
                            <h4 className="text-lg font-semibold text-gray-700 mb-2">Gender</h4>
                            <div className="flex space-x-4">
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        checked={formData.gender === 'Male'}
                                        onChange={handleChange}
                                        className="mr-2"
                                        required
                                    />
                                    Male
                                </label>
                                <label className="flex items-center">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        checked={formData.gender === 'Female'}
                                        onChange={handleChange}
                                        className="mr-2"
                                        required
                                    />
                                    Female
                                </label>
                            </div>
                        </div> */}
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
                    </div>

                    {/* Account Details */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-gray-700">Account Details</h3>
                        <input
                            type="text"
                            name="accountNumber"
                            value={formData.accountNumber}
                            onChange={handleChange}
                            placeholder="Account Number"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="text"
                            name="ifscCode"
                            value={formData.ifscCode}
                            onChange={handleChange}
                            placeholder="IFSC Code"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="text"
                            name="accountType"
                            value={formData.accountType}
                            onChange={handleChange}
                            placeholder="Account Type"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                                        required />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Debit Card Section */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Debit Card Details</h3>
                    <div className="bg-gradient-to-r from-blue-900 to-purple-600 p-6 rounded-lg text-white">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-semibold">Debit Card</span>
                            <span className="text-sm">VISA</span>
                        </div>
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="debitCard.cardNumber"
                                value={formData.debitCard.cardNumber}
                                onChange={handleChange}
                                placeholder="Card Number"
                                className="w-full p-3 bg-transparent border border-white rounded-lg placeholder-white focus:outline-none"
                                required
                            />
                            <input
                                type="text"
                                name="debitCard.cardName"
                                value={formData.debitCard.cardName}
                                onChange={handleChange}
                                placeholder="Card Holder Name"
                                className="w-full p-3 bg-transparent border border-white rounded-lg placeholder-white focus:outline-none"
                                required
                            />
                            <input
                                type="text"
                                name="debitCard.validity"
                                value={formData.debitCard.validity}
                                onChange={handleChange}
                                placeholder="Validity (MM/YY)"
                                className="w-full p-3 bg-transparent border border-white rounded-lg placeholder-white focus:outline-none"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Social Links Section */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Social Links</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="flex items-center space-x-2">
                            <FaInstagram className="text-pink-600 text-2xl" />
                            <input
                                type="text"
                                name="socialLinks.instagram"
                                value={formData.socialLinks.instagram}
                                onChange={handleChange}
                                placeholder="Instagram URL"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaFacebook className="text-blue-600 text-2xl" />
                            <input
                                type="text"
                                name="socialLinks.facebook"
                                value={formData.socialLinks.facebook}
                                onChange={handleChange}
                                placeholder="Facebook URL"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaTwitter className="text-blue-400 text-2xl" />
                            <input
                                type="text"
                                name="socialLinks.twitter"
                                value={formData.socialLinks.twitter}
                                onChange={handleChange}
                                placeholder="Twitter URL"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaWhatsapp className="text-green-500 text-2xl" />
                            <input
                                type="text"
                                name="socialLinks.whatsApp"
                                value={formData.socialLinks.whatsApp}
                                onChange={handleChange}
                                placeholder="WhatsApp URL"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Profile Photo Section */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">Profile Photo</h3>
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
                                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                >
                                    &times;
                                </button>
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>

                {/* Error Message */}
                {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

                {/* Submit Button */}
                <div className="mt-8 text-center">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Create Account
                    </button>
                </div>
            </form>
        </>
    );
};

export default CreateAccount;