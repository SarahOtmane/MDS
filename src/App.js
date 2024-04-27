import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";


const App = () =>{
    return(
        <BrowserRouter>
            <>
                <Header />
                <Routes>
                    <Route path="/landing" element={<LandingPage />} /> 
                    <Route path="/register" element={<SignUp />} />
                    <Route path="/login" element={<SignIn />} />
                </Routes> 
                <Footer />
            </>
        </BrowserRouter>
    )
}


export default App;