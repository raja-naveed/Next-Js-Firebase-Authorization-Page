'use client';
import React, { useState } from "react";
import signUp from "@/firebase/auth/signup";
import { useRouter } from 'next/navigation'
import Link from "next/link";

const  Page= ()=> {
    // await new Promise((resolve) => setTimeout(resolve, 2000));

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter()

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

    const handleForm = async (event) => {
        event.preventDefault();
    
        const { result, error } = await signUp(email, password);
    
        if (error) {
            if (error.code === 'auth/operation-not-allowed') {
                console.log('This authentication method is not allowed. Please check your Firebase project settings.');
            } else {
                console.error('An authentication error occurred:', error);
                // Handle other errors
            }
            return; // Return early to prevent further execution
        }
    
        // Successful sign-up
        console.log(result);
        return router.push("/admin");
    };


    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create an Account</h1>
                <form onSubmit={handleForm} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            value={email}
                            onChange={handleEmailChange}
                            required
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@mail.com"
                            className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                            className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:outline-none"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-sm text-gray-600 text-center">
                    Already have an account? <Link href="/signin" className="text-blue-500">Log in</Link>
                </p>
            </div>
        </div>
    );
}

export default Page;
