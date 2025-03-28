"use client"

import {  SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">
       <h2 className="text-2xl font-bold text-center mb-6"></h2>
       <SignedIn> 
      <div className="  rounded-2xl  w-96 text-center pr-11">
        <UserButton/>
        <h2 className="text-2xl font-semibold text-gray-800">Welcome Back!</h2>
        <p className="text-gray-500 mt-2">We&apos;re glad to see you again.</p>
        <Link href={'/'}><button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Go to Shooping
        </button></Link>
      </div>
            </SignedIn>
            <SignedOut>
          <div className="mb-4">
            <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
          
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input 
              type="email" 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Enter your email" 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input 
              type="password" 
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="Enter your password" 
            />
          </div>
          
            <SignInButton mode="modal">
          <button 
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
          </SignInButton>
         <p className="text-center text-gray-600 mt-4">Don&apos;t have an account? <a href="#" className="text-blue-500">Sign up</a></p>
          </SignedOut>
          
        
      </div>
      
    </div>
  );
};

export default LoginPage;
