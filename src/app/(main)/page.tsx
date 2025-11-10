import About from "@/src/components/About/page";
import AtAGlance from "@/src/components/AtAGlance/page";
import BlogSection from "@/src/components/Blog/page";
import GrowBusiness from "@/src/components/GrowBusiness/page";
import Review from "@/src/components/Review/page";
import Slider from "@/src/components/Slider/page";
import WeOffer from "@/src/components/WeOffer/page";


const HomePage = () => {
    return (
        <div className="min-h-screen">
            <Slider />
            <About />
            <WeOffer />
            <AtAGlance />
            <GrowBusiness />
            <Review />
            <BlogSection />
        </div>
    );
};

export default HomePage;