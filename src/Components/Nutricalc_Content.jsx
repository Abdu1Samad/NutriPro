
import { useState } from "react"
import "../Css/NutriCalcContent.css"

function NutriCalc_Content() {

    const [step , setStep] = useState(1)

    return (

        <>

            <section className="NutriCalc-contentSection">
                <form action="" className="NutriCalc-ContentContainer">
                    {/* content1  */}
                    <div className={`NutriCalcFormContent-1 ${step === 1? 'activeStep' : '' }`}>
                        <h3 className="NutriCalcMainHeadings">Personal Profile</h3>
                        <p className="NutriCalcpara">Tell us a bit about yourself to personalize your experience.</p>
                        <input type="text" name="" id=""  className="name" placeholder="Enter your name" />
                        <input type="number" name="" id="" className="age" min="1" max="100" placeholder="Enter your age" />
                        <div className="NutriCalcGend">
                            <label htmlFor="">Male</label>
                            <input type="radio" name="GendSelection" id="" />
                            <label htmlFor="">Female</label>
                            <input type="radio" name="GendSelection" id="" />
                        </div>
                    </div>
                    {/* content2  */}
                    <div className={`NutriCalcFormContent-2 ${step === 2 ? 'activeStep': ''}`}>
                        <h3 className="NutriCalcMainHeadings">Body Measurments</h3>
                        <p className="NutriCalcpara">We need these to calculate your BMI score.</p>
                        {/* heightbox  */}
                        <label className="option2LableHeightLabel" htmlFor="">How Tall Are You</label>
                        <div className="NutriCalcHeightBox">
                            <div className="height-ftInput">
                                <input type="text" name="" id="" />
                                <span>Ft</span>
                            </div>
                            <div className="height-InInput">
                                <input type="text" name="" id="" />
                                <span>In</span>
                            </div>
                        </div>
                        {/* weightBox */}
                        <div className="NutriCalcWeightBox">
                            <div className="weightinputforkg">
                                <label className="weightLabel" htmlFor="">How Much Do You Weight</label>
                                <input type="text" name="" id="" />
                                <span>Kg</span>
                            </div>
                        </div>
                    </div>
                    {/* content3  */}
                    <div className={`NutriCalcFormContent-3 ${step === 3 ? 'activeStep' : ''}`}>
                        <h3 className="NutriCalcMainHeadings">Lifestyle & Goals</h3>
                        <p className="NutriCalcpara">Final step to customize your calorie plan.</p>

                        {/* Activity Level Selection */}
                        <div className="NutriCalcActivityBox">
                            <label>How active are you?</label>
                            <select className="activity-select">
                                <option value="1.2">Sedentary (Little or no exercise)</option>
                                <option value="1.375">Lightly Active (1-3 days/week)</option>
                                <option value="1.55">Moderately Active (3-5 days/week)</option>
                                <option value="1.725">Very Active (6-7 days/week)</option>
                                <option value="1.9">Extra Active (Physical Job + Training)</option>
                            </select>
                        </div>

                        {/* Goal Selection */}
                        <div className="NutriCalcGoalBox">
                            <label>What is your goal?</label>
                            <div className="goal-options">
                                <div className="goal-card">
                                    <input type="radio" name="goal" id="lose" value="lose" />
                                    <label htmlFor="lose">Lose Weight</label>
                                </div>
                                <div className="goal-card">
                                    <input type="radio" name="goal" id="maintain" value="maintain" />
                                    <label htmlFor="maintain">Maintain</label>
                                </div>
                                <div className="goal-card">
                                    <input type="radio" name="goal" id="gain" value="gain" />
                                    <label htmlFor="gain">Gain Weight</label>
                                </div>
                                <div className="goal-card">
                                    <input type="radio" name="goal" id="muscle" value="muscle" />
                                    <label htmlFor="muscle">Build Muscle</label>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buttons  */}
                    <div className="NextBackBtn">

                        {step === 1 ? (<input type="button" disabled value="Back" />):
                         (<input type="button"  value="Back"  onClick={()=> setStep(step - 1)}/>)   
                        }

                        {step < 3 ? ( <input type="button" value="Next" onClick={()=> setStep(step + 1)}/>):
                        (
                            <input type="button" value="Show Result"/>    
                        )
                        }

                    </div>



                </form>
            </section>

        </>

    )

}

export default NutriCalc_Content