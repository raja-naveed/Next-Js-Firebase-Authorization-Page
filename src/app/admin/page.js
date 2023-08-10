'use client'
import React, { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const  Page=  () =>{
    const { user } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
         
        if (user === null) {
            router.push("/");
        }
    }, [user]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-600">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                {user ? (
                    <h1 className="text-3xl font-semibold text-center text-gray-800">
                        Welcome, {user.displayName || user.email}
                    </h1>
                ) : (
                    <h1 className="text-3xl font-semibold text-center text-gray-800">
                        Only logged in users can view this page
                    </h1>
                )}
                {user && (
                    <div className="mt-6">
                        {/* Your content for logged-in users */}
                        <p className="text-center text-gray-600">
                            You have access to special content here.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Page;
