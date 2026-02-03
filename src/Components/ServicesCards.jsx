
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Css/ServicesCards.css"
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
function ServicesCard(){

    return(
        <>
            <section className="ServicesCardsSection">
                <h1>our services</h1>
                <div className="ServicesCardscontainer">
                    <div className="card1 card">
                          <div className="cardContent">
                            <div className="card1Icon">
                                <i class="bi bi-speedometer"></i>
                            </div>
                            <div className="card1heading heading">
                                <h3>BMI Calculator</h3>
                            </div>
                            <div className="card1para">
                                <p>Quick and easy way to check if your weight is in the healthy range for your height.</p>
                            </div>
                            <div className="card1btn">
                                <button>Check Now</button>
                            </div>
                          </div>  
                    </div>
                    {/* card-2  */}
                    <div className="card2 card">
                        <div className="cardContent">
                            <div className="card2Icon">
                                <i class="bi bi-lightning-charge-fill"></i>
                            </div>
                            <div className="card2heading heading">
                                <h3>BMR Tracker</h3>
                            </div>
                            <div className="card2para">
                                <p>how many calories your body burns at rest to optimize your fat loss or muscle gain.</p>
                            </div>
                            <div className="card2btn">
                                <button>Calculate BMR</button>
                            </div>
                          </div>  
                    </div>
                    <div className="card3 card">
                        <div className="cardContent">
                            <div className="card3Icon">
                                <FontAwesomeIcon icon={faDumbbell} size="2x" className="Thirdicon"/>
                            </div>
                            <div className="card3heading heading">
                                <h3>Workout Guides</h3>
                            </div>
                            <div className="card3para">
                                <p>Get access to professional exercise routines tailored for all fitness levels.</p>
                            </div>
                            <div className="card3btn">
                                <button>Start Training</button>
                            </div>
                          </div>  
                    </div>
                </div>
            </section>
        </>
    )

}

export default ServicesCard