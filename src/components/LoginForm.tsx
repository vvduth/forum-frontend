import React, { useState } from "react";
import axios from "axios";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const [userName, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate() ;
  const { addUser } = useAuthStore();

  const loginHandler = async (e: any) => {
    
    e.preventDefault();
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(
      `https://tamk-fullstack-project-backend.herokuapp.com/api/auth/signin`,
      { username: userName, password },
      config as any
    );
    console.log(response.data);
    const fullProfile = {name: userName , token : response.data}

    addUser(fullProfile);
    navigate("/", {replace: true})
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Login</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          value={userName}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Email"
          name="email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
          placeholder="Password"
          name="password"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <input
            onChange={() => {}}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
          />
          <label className="text-gray-500 cursor-pointer" htmlFor="storeData">
            {" "}
            Save my name, email in this browser for the next time I comment.
          </label>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 mb-4">
        <a href="/signup">
          <span className="text-gray-500 cursor-pointer hover:underline">
            New to these stuff? Create new account
          </span>
        </a>
      </div>

      <div className="mt-8">
        <button
          type="button"
          onClick={loginHandler}
          className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
