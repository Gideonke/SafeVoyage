import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogin = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    const { email, password } = formData;

    if (!email || !password) {
      setErrorMessage("Kindly fill all the fields");
      return;
    }

    const url = "http://127.0.0.1:8000/api/userlogin/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          return res.json().then((tell) => {
            setErrorMessage(tell.message || "Credentials provided are incorrect");
          });
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          navigate("/dashboard");
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="h-screen bg-gradient-to-r from-blue-400 to-blue-600 flex justify-center items-center px-4">
      <div className="bg-white shadow-lg rounded-lg flex flex-col lg:flex-row lg:mt-0 mt-32">
        <div className="w-full lg:w-1/2">
          <img
            src="src/assets/images/pexels-igor-starkov-233202-762026.jpg"
            alt="Login Illustration"
            className="h-48 lg:h-full w-full rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8">
          <h1 className="text-4xl font-bold mb-8">Login Here</h1>
          <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleLogin}
              className="rounded-lg py-3 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleLogin}
              className="rounded-lg py-3 px-4 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-full py-3 px-2 mt-6 hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;


