import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Home from "./Pages/Home"
import "./App.css"
import { Route, Routes } from "react-router-dom"
import NutriCalc from "./Pages/Nutri-Calc"
import MealPlans from "./Pages/MealPlans"
import Workout from "./Pages/Workout"

function App() {

  return (
    <>

        <div className="appWrapper">
        <Header />
          <main>
          <Routes>              
            <Route path="/" element={<Home/>}/>
            <Route path="/NutriCalc" element={<NutriCalc/>}/>
            <Route path="/MealPlans" element={<MealPlans/>}/>
            <Route path="/Workout" element={<Workout/>}/>
          </Routes>
        </main>
        <Footer />
        </div>
      
    </>
  )

}

export default App