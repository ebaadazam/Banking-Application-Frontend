// import React, { useState } from 'react';

// const CreateAccount = () => {

//     const [image, setImage] = useState(null);

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = () => {
//                 setImage(reader.result);
//             };
//             reader.readAsDataURL(file);
//         }
//     };

//     const removeImage = () => {
//         setImage(null);
//     };

//     return (
//         <div className="mx-auto max-w-full bg-white rounded-md shadow-lg drop-shadow-md">
//             <div className="px-4 py-3 flex justify-center">
//                 <div>
//                     <h2 className="font-bold" style={{ fontSize: 28, textAlign: "center" }}>Safely create/open your account with us!</h2>
//                     <p className="text-gray-500" style={{ fontSize: 15, textAlign: "center" }}>Getting started with our bank is quick and secure.</p>
//                 </div>

//             </div>
//             <hr className="bg-gray-600" />
//             <div className="px-4 pt-3 pb-6 space-y-3">

//                 <h1 className='mt-6'>Personal Details</h1>
//                 <div className="space-x-3 flex">
//                     <input
//                         type="text"
//                         placeholder="Full Name"
//                         className="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
//                     />
//                 </div>
//                 <div className="space-x-3 flex">
//                     <input
//                         type="number"
//                         placeholder="Phone Number"
//                         className="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
//                     />
//                     <input
//                         type="text"
//                         placeholder="Email Address"
//                         className="flex-1 ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
//                     />
//                 </div>

//                 <div>
//                     <input
//                         type="text"
//                         placeholder="Permament Address"
//                         className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type="text"
//                         placeholder="Designation"
//                         className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
//                     />
//                 </div>

//                 <h1 className='mt-6'>Account Details</h1>
//                 <div>
//                     <input
//                         type="text"
//                         placeholder="Account Number"
//                         className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
//                     />
//                 </div>
//                 <div>
//                     <input
//                         type="text"
//                         placeholder="IFSC Code"
//                         className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
//                     />
//                 </div>
//                 <div>
//                     <input type="text"
//                         placeholder="Account Type"
//                         className="w-full ring-1 ring-gray-400 rounded-md text-md px-2 py-2 outline-none bg-gray-100 focus:placeholder-gray-500"
//                     />
//                 </div>

//                 <div>
//                 </div>
//                 <div>
//                     <div className="text-gray-500" style={{ fontSize: 15, font: "semibold" }}>
//                         Set Account as Active/Inactive <a href> (?) </a>
//                     </div>
//                     <div className="mt-1 flex space-x-3">
//                         <label htmlFor="active" className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400">
//                             <span>Active</span>
//                             <input type="radio" id="active" name="gender" />
//                         </label>
//                         <label htmlFor="inactive" className="flex-1 flex space-x-2 justify-between items-center rounded-md px-2 py-1 border border-gray-400">
//                             <span>Inactive</span>
//                             <input type="radio" id="inactive" name="gender" />
//                         </label>
//                     </div>
//                 </div>

//                 {/* Image */}
//                 <div>
//                     <h1 className="mt-6">Profile Photo</h1>
//                     <div className="flex items-center space-x-4">
//                         {image && (
//                             <div className="relative">
//                                 <img
//                                     src={image}
//                                     alt="Profile Preview"
//                                     className="w-16 h-16 rounded-full border border-gray-300"
//                                 />
//                                 <button
//                                     onClick={removeImage}
//                                     className="absolute -top-2 -right-2 bg-blue-900 text-white rounded-full w-6 h-6 flex items-center justify-center"
//                                 >
//                                     &times;
//                                 </button>
//                             </div>
//                         )}
//                         <input
//                             type="file"
//                             accept="image/*"
//                             onChange={handleImageChange}
//                             className="ring-1 ring-gray-400 rounded-md text-md px-2 py-2 bg-gray-100 file:mr-4 file:py-1 file:px-2 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-gray-200 hover:file:bg-gray-300"
//                         />
//                     </div>
//                 </div>

//                 <div>
//                     <p className="text-gray-600" style={{ fontSize: 11 }}>
//                         People who use our service may have uploaded your contact information to
//                         banking websites.
//                         <a href className="hover:text-blue-900 font-medium hover:underline">Learn more</a>.
//                     </p>
//                     <p className="text-gray-600 mt-4" style={{ fontSize: 11 }}>
//                         By clicking Create Account, you agree to our
//                         <a href className="hover:text-blue-900 font-medium hover:underline">Terms</a>,
//                         <a href className="hover:text-blue-900 font-medium hover:underline">Privacy Policy</a>
//                         and
//                         <a href className="hover:text-blue-900 font-medium hover:underline">Cookies Policy</a>. You may receive SMS notifications from us and can opt out at any
//                         time.
//                     </p>
//                 </div>
//                 <div className="text-center">
//                     <button className="text-white font-bold px-16 py-1 rounded-md" style={{ backgroundColor: '#00A400', fontSize: 18 }}>
//                         Create Account
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CreateAccount;



import React, { useState } from 'react';
import axios from 'axios';

const CreateAccount = () => {
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
    });

    const [error, setError] = useState('');

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
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/banking`, formData);
            console.log('Account Created Successfully:', response.data);
            alert('Account created successfully!');
            setFormData({
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
            });
        } catch (error) {
            console.error('Error creating account:', error);
            alert('Error creating account. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mx-auto max-w-full bg-white rounded-md shadow-lg drop-shadow-md">
            <div className="px-4 py-3 flex justify-center">
                <div>
                    <h2 className="font-bold" style={{ fontSize: 28, textAlign: "center" }}>
                        Safely create/open your account with us!
                    </h2>
                    <p className="text-gray-500" style={{ fontSize: 15, textAlign: "center" }}>
                        Getting started with our bank is quick and secure.
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
                        Create Account
                    </button>
                </div>
            </div>
        </form>
    );
};

export default CreateAccount;
