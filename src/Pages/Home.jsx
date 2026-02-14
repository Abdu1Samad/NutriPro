import AboutUsSection from "../Components/About-Us-Section";
import HomeHeroSection from "../Components/Home-HeroSection";
import ServicesCard from "../Components/ServicesCards";
import Testimonial from "../Components/Testimonial-section";

function Home(){

    return(
        <>
            <HomeHeroSection />
            <ServicesCard/>
            <AboutUsSection/>
            <Testimonial/>
        </>
    )

}

export default Home;