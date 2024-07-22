import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';

function Register() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        userType: ''
    });
    const [agencyData, setAgencyData] = useState({
        agency_name: '',
        description: '',
        agency_email: '',
        registrationNumber: '',
        address: '',
        country_of_registration: ''
    });
    const [errors, setErrors] = useState({});
    const [showAgencyForm, setShowAgencyForm] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAgencyChange = (e) => {
        setAgencyData({
            ...agencyData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate(formData);
        if (Object.keys(newErrors).length === 0) {
            const url = "http://127.0.0.1:8000/api/userregistration/";
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            };
            fetch(url, options).then((res) => {
                if (!res.ok) {
                    return res.json().then(message => {
                        setErrors({ ...errors, email: message.email[0] });
                    });
                }
                return res.json().then((data) => {
                    if (formData.userType === 'Agency') {
                        setShowAgencyForm(true);
                    } else {
                        navigate("/login");
                    }
                }).catch((err) => console.log(err));
            });
        } else {
            setErrors(newErrors);
        }
    };

    const handleAgencySubmit = (e) => {
        e.preventDefault();
        const newErrors = validateAgency(agencyData);
        if (Object.keys(newErrors).length === 0) {
            const combinedData = { ...formData, ...agencyData };
            submitRegistration(combinedData);
        } else {
            setErrors(newErrors);
        }
    };

    const submitRegistration = (data) => {
        const url = "http://127.0.0.1:8000/api/travelagency/";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        };
        fetch(url, options)
            .then((res) => {
                if (!res.ok) {
                    return res.json().then(message => {
                        setErrors({ ...errors, email: message.email ? message.email[0] : 'Error' });
                    });
                }
                return res.json();
            })
            .then(() => {
                navigate("/login");
            })
            .catch((err) => console.log(err));
    };

    const validate = (data) => {
        const errors = {};
        if (!data.first_name) errors.first_name = 'First name is required';
        if (!data.last_name) errors.last_name = 'Last name is required';
        if (!data.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!data.password) errors.password = 'Password is required';
        if (!data.userType) errors.userType = 'User type is required';
        return errors;
    };

    const validateAgency = (data) => {
        const errors = {};
        if (!data.agency_name) errors.agency_name = 'Agency name is required';
        if (!data.description) errors.description = 'Description is required';
        if (!data.agency_email) {
            errors.agency_email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.agency_email)) {
            errors.agency_email = 'Email address is invalid';
        }
        if (!data.registrationNumber) errors.registrationNumber = 'Registration number is required';
        if (!data.address) errors.address = 'Address is required';
        if (!data.country_of_registration) errors.country_of_registration = 'Country of registration is required';
        return errors;
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-400 to-blue-600">
            <h1 className="text-4xl font-bold text-white mt-12">Sign Up</h1>
            <div className="bg-white rounded-lg shadow-lg p-8 mt-36 w-full max-w-lg">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            placeholder="Enter your first name"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                        {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Enter your last name"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={formData.last_name}
                            onChange={handleChange}
                        />
                        {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
                    </div>
                    <fieldset className="space-y-2">
                        <legend className="text-sm font-medium text-gray-700">Sign in as:</legend>
                        <div className="flex gap-4">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="userType"
                                    value="Agency"
                                    className="form-radio"
                                    onChange={handleChange}
                                />
                                <span className="text-sm">Agency</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name="userType"
                                    value="Client"
                                    className="form-radio"
                                    onChange={handleChange}
                                />
                                <span className="text-sm">Client</span>
                            </label>
                        </div>
                        {errors.userType && <p className="text-red-500 text-sm">{errors.userType}</p>}
                    </fieldset>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
            <Modal show={showAgencyForm} onClose={() => setShowAgencyForm(false)}>
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                    <h2 className="text-2xl font-bold mb-6">Agency Details</h2>
                    <form className="space-y-6" onSubmit={handleAgencySubmit}>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Agency Name</label>
                            <input
                                type="text"
                                name="agency_name"
                                placeholder="Enter agency name"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                value={agencyData.agency_name}
                                onChange={handleAgencyChange}
                            />
                            {errors.agency_name && <p className="text-red-500 text-sm">{errors.agency_name}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <input
                                type="text"
                                name="description"
                                placeholder="Enter a brief description"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                value={agencyData.description}
                                onChange={handleAgencyChange}
                            />
                            {errors.description && <p className="text-red-500 text-sm">{errors.description}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="agency_email"
                                placeholder="Enter agency email"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                value={agencyData.agency_email}
                                onChange={handleAgencyChange}
                            />
                            {errors.agency_email && <p className="text-red-500 text-sm">{errors.agency_email}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Registration Number</label>
                            <input
                                type="text"
                                name="registrationNumber"
                                placeholder="Enter registration number"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                value={agencyData.registrationNumber}
                                onChange={handleAgencyChange}
                            />
                            {errors.registrationNumber && <p className="text-red-500 text-sm">{errors.registrationNumber}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Address</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Enter physical address"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                value={agencyData.address}
                                onChange={handleAgencyChange}
                            />
                            {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Country of Registration</label>
                            <input
                                type="text"
                                name="country_of_registration"
                                placeholder="Enter country of registration"
                                className="w-full p-3 border border-gray-300 rounded-lg"
                                value={agencyData.country_of_registration}
                                onChange={handleAgencyChange}
                            />
                            {errors.country_of_registration && <p className="text-red-500 text-sm">{errors.country_of_registration}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </Modal>
        </div>
    );
}

export default Register;

