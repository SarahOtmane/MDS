import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import ForgetMdp from "./components/ForgetMdp";
import ResetMdp from "./components/ResetMdp";
import CheckCart from "./components/CheckCart";
import SuccefullOrder from "./components/SuccefullOrder";
import FailedOrder from "./components/FailedOrder";
import Commandes from "./components/Commandes";
import AccountPassword from "./components/AccountPassword";
import AccountDetails from "./components/AccountDetails";
import AccountAdress from "./components/AccountAdress";


const App = () =>{
    return(
        <BrowserRouter>
            <>
                <Header />
                <Routes>
                    <Route path="/landing" element={<LandingPage />} /> 

                    <Route path="/register" element={<SignUp />} />
                    <Route path="/login" element={<SignIn />} />

                    <Route path="/resetMdp" element={<ForgetMdp />} />
                    <Route path="/resetMdp/reset" element={<ResetMdp />} />
                    
                    <Route path="/cart/check" element={<CheckCart />} />
                    <Route path="/success-order" element={<SuccefullOrder />} />
                    <Route path="/failed-order" element={<FailedOrder />} />

                    <Route path="/my-account" element={<Commandes />} />
                    <Route path="/my-account/update-password" element={<AccountPassword />} />
                    <Route path="/my-account/details" element={<AccountDetails />} />
                    <Route path="/my-account/adress" element={<AccountAdress />} />
                </Routes> 
                <Footer />
            </>
        </BrowserRouter>
    )
}


export default App;