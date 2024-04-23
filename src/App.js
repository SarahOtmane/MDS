import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import './css/responsive.css';
import './css/mobile.css';

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";


const App = () =>{
    return(
        <BrowserRouter>
            <>
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} /> 
                </Routes> 
                <Footer />
            </>
        </BrowserRouter>
    )
}


export default App;