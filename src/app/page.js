import Link from 'next/link';

const HomePage = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-4xl font-semibold mb-4">Welcome to Our Website</h1>
                <p className="text-gray-600 text-lg mb-6">Explore amazing features and services.</p>
                <div className="space-x-4">
                    <Link href="/signup">
                        <a className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">Sign Up</a>
                    </Link>
                    <Link href="/signin">
                        <a className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition">Sign In</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
