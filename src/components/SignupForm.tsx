import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";

const SignupForm = () => {
  const [userName, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const navigate = useNavigate() ;
  const { addUser } = useAuthStore();

  const registerHandler = async (e: any) => {
    
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `https://tamk-fullstack-project-backend.herokuapp.com/api/auth/signup`,
      { email, username: userName, password },
      config as any
    );
    console.log(response.data);
    

    
    navigate("/login", {replace: true})
  };
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Sign up</h3>

      <div className="grid grid-rows-1 gap-4 mb-4">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="py-2 px-4 outline-none w-1/2 rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
        />
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="py-2 px-4 outline-none w-1/2 rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Username"
          name="username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="py-2 px-4 outline-none w-1/2 rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Password"
          name="password"
        />
      </div>
      
      <div className="grid grid-cols-1 gap-4 mb-4">
        <a href="/login">
          <span className="text-gray-500 cursor-pointer hover:underline">
            Already have an account? Log in now.
          </span>
        </a>
      </div>

      <div className="mt-8">
        <button
          type="button"
          onClick={registerHandler}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
