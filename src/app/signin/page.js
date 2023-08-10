"use client";
import React, { useState } from "react";
import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";

const Page = () => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State to hold error message
  const router = useRouter();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {


    setPassword(event.target.value);

  };

  const handleForm = async (event) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      setErrorMessage("Invalid email or password."); // Update error message
      console.log(error);
      return;
    }

    // else successful
    console.log(result);
    router.push("/admin");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xs p-6 bg-white shadow-md rounded-lg">
        <h1 className="mb-6 text-2xl font-semibold text-center">Sign In</h1>
        <form onSubmit={handleForm} className="space-y-4">
          <label htmlFor="email" className="block">
            <span className="text-sm font-medium text-gray-700">Email</span>
            <input
              value={email}
              onChange={handleEmailChange}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200"
            />
          </label>
          <label htmlFor="password" className="block">
            <span className="text-sm font-medium text-gray-700">Password</span>
            <input
              value={password}
              onChange={handlePasswordChange}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200"
            />
          </label>
          <button
            type="submit"
            className="w-full py-2 px-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Sign In
          </button>
          {errorMessage && (
                        <p className="text-red-500 text-sm">{errorMessage}</p>
                    )}
        </form>
      </div>
    </div>
  );
};

export default Page;
