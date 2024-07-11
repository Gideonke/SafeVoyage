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
            .then((data) => {
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
        <div className="h-[95vh] bg-blue-400 mt-[12vh]">
            <h1 className="text-3xl flex justify-center text-white mt-10">
                Sign Up Here
            </h1>
            <div className="flex justify-around items-center">
                <div className="bg-slate-200 rounded-2xl min-h-[40vh]">
                    <form
                        className="w-[600px] flex flex-col gap-5 mt-14 items-center text-2xl"
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            name="first_name"
                            placeholder="First Name"
                            className="rounded-2xl py-4"
                            value={formData.first_name}
                            onChange={handleChange}
                        />
                        {errors.first_name && <p className="text-red-500">{errors.first_name}</p>}
                        
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Last Name"
                            className="rounded-2xl py-4"
                            value={formData.last_name}
                            onChange={handleChange}
                        />
                        {errors.last_name && <p className="text-red-500">{errors.last_name}</p>}
                        
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="rounded-2xl py-4"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-500">{errors.email}</p>}
                        
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="rounded-2xl py-4"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="text-red-500">{errors.password}</p>}
                        
                        <p className="text-2xl">Sign in as:</p>
                        <div className="flex gap-4">
                            <input
                                type="radio"
                                name="userType"
                                value="Agency"
                                className="cursor-pointer"
                                onChange={handleChange}
                            />
                            <p>Agency</p>
                        </div>
                        <div className="flex gap-4">
                            <input
                                type="radio"
                                name="userType"
                                value="Client"
                                className="cursor-pointer"
                                onChange={handleChange}
                            />
                            <p>Client</p>
                        </div>
                        {errors.userType && <p className="text-red-500">{errors.userType}</p>}
                        
                        <button
                            type="submit"
                            className="text-2xl mt-10 bg-white rounded-full py-2 px-4 flex justify-center items-center"
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
                <div className="h-[50vh] w-[40vw] bg-slate-200 rounded-2xl mt-14">
                    <img src="src/assets/images/pexels-ahmedmuntasir-912050.jpg" className="h-[50vh] w-[800px]" alt="Sign Up"/>
                </div>
            </div>

            <Modal show={showAgencyForm} onClose={() => setShowAgencyForm(false)}>
                <form className="w-[600px] flex flex-col gap-5 mt-14 items-center text-2xl" onSubmit={handleAgencySubmit}>
                    <input
                        type="text"
                        name="agency_name"
                        placeholder="Agency Name"
                        className="rounded-2xl py-4"
                        value={agencyData.agency_name}
                        onChange={handleAgencyChange}
                    />
                    {errors.agency_name && <p className="text-red-500">{errors.agency_name}</p>}
                    
                    <input
                        type="text"
                        name="description"
                        placeholder="Description"
                        className="rounded-2xl py-4"
                        value={agencyData.description}
                        onChange={handleAgencyChange}
                    />
                    {errors.description && <p className="text-red-500">{errors.description}</p>}
                    
                    <input
                        type="email"
                        name="agency_email"
                        placeholder="Email"
                        className="rounded-2xl py-4"
                        value={agencyData.agency_email}
                        onChange={handleAgencyChange}
                    />
                    {errors.agency_email && <p className="text-red-500">{errors.agency_email}</p>}
                    
                    <input
                        type="text"
                        name="registrationNumber"
                        placeholder="Registration Number"
                        className="rounded-2xl py-4"
                        value={agencyData.registrationNumber}
                        onChange={handleAgencyChange}
                    />
                    {errors.registrationNumber && <p className="text-red-500">{errors.registrationNumber}</p>}
                    
                    <input
                        type="text"
                        name="address"
                        placeholder="Physical Address"
                        className="rounded-2xl py-4"
                        value={agencyData.address}
                        onChange={handleAgencyChange}
                    />
                    {errors.address && <p className="text-red-500">{errors.address}</p>}
                    
                    <input
                        type="text"
                        name="country_of_registration"
                        placeholder="Country of Registration"
                        className="rounded-2xl py-4"
                        value={agencyData.country_of_registration}
                        onChange={handleAgencyChange}
                    />
                    {errors.country_of_registration && <p className="text-red-500">{errors.country_of_registration}</p>}
                    
                    <button
                        type="submit"
                        className="text-2xl mt-10 bg-white rounded-full py-2 px-4 flex justify-center items-center"
                    >
                        Submit
                    </button>
                </form>
            </Modal>
        </div>
    );
}

export default Register;


