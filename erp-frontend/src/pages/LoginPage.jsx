import React from 'react';
// Using a placeholder icon from react-icons. 
// You should replace this with your actual logo <img />
import { FaMoon } from 'react-icons/fa';

// --- IMPORTANT ---
// Replace this with the path to your actual background image
const backgroundImageUrl = 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
// This is a placeholder bathroom/home-care-style image.

function LoginPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Main Login Card */}
      <div className="flex w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden m-4">
        
        {/* Left Column (Blue Section) */}
        <div className="hidden md:flex w-full md:w-5/12 bg-indigo-900 text-white p-12 flex-col justify-center items-center">
          
          {/* Logo */}
          <div className="bg-white rounded-full p-4 mb-6">
            {/* REPLACE THIS DIV WITH YOUR LOGO
              <img src="/path/to/luna-logo.png" alt="Luna Logo" className="w-20 h-20" /> 
            */}
            <FaMoon className="text-6xl text-indigo-900" />
          </div>
          
          <h1 className="text-3xl font-bold mb-2 text-center">Luna Industries</h1>
          <p className="text-lg text-indigo-100 text-center">
            Premium Home and Body Care
          </p>
        </div>

        {/* Right Column (White Section) */}
        <div className="w-full md:w-7/12 bg-white p-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">ERP System</h2>
          
          <form>
            {/* User ID Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="userId">
                User ID
              </label>
              <input
                type="text"
                id="userId"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="21/04820"
                defaultValue="21/04820"
              />
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="••••••••"
                defaultValue="••••••••"
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black font-bold py-3 px-4 rounded-lg hover:bg-yellow-600 transition-colors"
            >
              SIGN IN
            </button>
          </form>

          {/* Links */}
          <div className="text-center mt-6">
            <a href="#" className="text-sm text-indigo-600 hover:underline">
              Forgot Password?
            </a>
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">
            is now working. You can reset your password using your registered KC
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;