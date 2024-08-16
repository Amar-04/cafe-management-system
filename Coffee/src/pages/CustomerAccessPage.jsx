import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const CustomerAccessPage = ({ onValidate }) => {
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [invalidToken, setInvalidToken] = useState(false);
  const navigate = useNavigate();

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    axios.post('/api/validate-token', { token })
      .then(response => {
        if (response.data.valid && name.trim()) {
          localStorage.setItem('customerName', name);
          onValidate();
          navigate("/");
        } else {
          setInvalidToken(true);
        }
      })
      .catch(() => {
        setInvalidToken(true);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#F8E3B6] gap-8">
      <h1 className="text-3xl font-bold text-[#693712]">Welcome to</h1>
      <img src="./logoo.avif" alt="" />
      <div className="bg-[#FCF2D9] p-8 rounded-lg shadow-lg border-2 border-[#834D1E] w-[95%]">
        <h2 className="text-2xl font-semibold mb-4 text-[#693712]">
          Enter your details:
        </h2>
        {invalidToken && (
          <p className="text-red-500 text-center my-4">
            Invalid token. Please try again.
          </p>
        )}
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Your Name"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#693712] mb-4"
        />
        <input
          type="text"
          value={token}
          onChange={handleTokenChange}
          placeholder="4-digit token"
          autoComplete="off"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#693712] mb-4"
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-[#693712] text-white py-2 rounded-lg hover:bg-[#693712] transition duration-300"
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default CustomerAccessPage;
