import Navbar from "@/src/components/Navbar/page";
import Slider from "@/src/components/Slider/page";


const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            {/* Add margin-top to push content below fixed navbar */}
            <div className="mt-20">
                <Slider />
                {/* Add some demo content to test scrolling */}
                <div className="h-screen bg-gray-100 p-8">
                    <h2 className="text-3xl font-bold text-center mt-8">Welcome to Digital Agency</h2>
                    <p className="text-center mt-4">Scroll down to see the navbar change color</p>
                    <div className="h-96"></div>
                    <p className="text-center">Continue scrolling...</p>
                    <div className="h-96"></div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;