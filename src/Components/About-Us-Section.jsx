import AboutUsSectionImg from "../assets/images/AboutUs-Section.jpg"
import "../Css/AboutUsSection.css"

function AboutUsSection(){

    return(

        <>

            <section className="AboutUsSection">
                <div className="AboutUsContainer">
                    {/* left */}
                    <div className="AboutUsLeftBox">
                       <div className="AboutUsImg">
                        <img src={AboutUsSectionImg} alt="" />
                       </div> 
                    </div>
                    {/* right */}
                    <div className="AboutUsRightBox">
                        <div className="AboutUsContent">
                            <div className="heading">
                                <h1>Where <span>Smart Nutrition</span> Meets Real Results.</h1>
                            </div>
                            <div className="para">
                                <p>At NutriPro, we believe that fitness is not a destination, but a lifestyle. Our mission is to simplify your health journey by providing personalized meal plans, smart tracking tools, and expert-backed insights. Whether you're looking to optimize your nutrition, balance your BMI, or master your workouts, we are here to empower every step of your progress.</p>
                            </div>
                            <div className="btn">
                                <button>Join Our Community</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
        </>

    )

}

export default AboutUsSection