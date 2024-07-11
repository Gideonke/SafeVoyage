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
    <div className="h-[95vh] bg-blue-400 mt-[12vh] flex justify-around items-center">
      <div className="h-[60vh] w-[600px] bg-slate-200 rounded-2xl mt-14">
        <img
          src="src/assets/images/pexels-igor-starkov-233202-762026.jpg"
          alt="Login Illustration"
          className="h-[60vh] w-full rounded-2xl object-cover"
        />
      </div>
      <div className="w-[600px] bg-slate-200 flex justify-center items-center flex-col rounded-2xl">
        <div>
          <h1 className="text-3xl mb-32 text-black mt-8">Login Here</h1>
        </div>
        <form
          className="w-[500px] flex flex-col gap-10"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleLogin}
            className="rounded-2xl py-4 bg-white text-2xl px-4"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleLogin}
            className="rounded-2xl py-4 text-2xl bg-white px-4"
          />
          <p className="text-red-500">{errorMessage}</p>
          <button
            type="submit"
            className="text-2xl mt-10 bg-white rounded-full py-2 px-4 flex justify-center items-center w-[30%] ml-[30%]"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

