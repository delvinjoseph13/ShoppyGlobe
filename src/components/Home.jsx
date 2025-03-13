import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white p-8">
            <h1 className="text-5xl font-extrabold mb-4">Welcome to ShoppyGlobe</h1>
            <p className="text-lg text-center max-w-2xl leading-relaxed">
                Discover a world of amazing products with unbeatable prices! Our platform offers a seamless shopping experience, featuring various categories, easy search functionality, and detailed product information.
            </p>



            {/* Navigation Button */}
            <Link to="/products">
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg mt-8 hover:bg-yellow-500 transition">
                    Browse Products
                </button>
            </Link>
        </div>
    );
}

export default Home;
