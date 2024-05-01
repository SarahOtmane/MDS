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
import AccountOrder from "./components/AccountOrder";
import AccountPassword from "./components/AccountPassword";
import AccountDetails from "./components/AccountDetails";
import AccountAdress from "./components/AccountAdress";


const App = () =>{
    return(
        <BrowserRouter>
            <>
                <Header />
                <Routes>
                    <Route path="/user" >
                        <Route path="/register" element={<SignUp />} />
                        <Route path="/login" element={<SignIn />} />

                        <Route path="/resetMdp" element={<ForgetMdp />} />
                        <Route path="/resetMdp/reset" element={<ResetMdp />} />

                        <Route path="/cart/check" element={<CheckCart />} />
                        <Route path="/success-order" element={<SuccefullOrder />} />
                        <Route path="/failed-order" element={<FailedOrder />} />

                        <Route path="/my-account">
                            <Route index element={<AccountOrder />} />
                            <Route path="update-password" element={<AccountPassword  />} />
                            <Route path="details" element={<AccountDetails  />} />
                            <Route path="adress" element={<AccountAdress  />} />
                            <Route path="update-password" element={<AccountPassword  />} />
                        </Route>
                    </Route>

                    <Route path="/" element={<LandingPage />} /> 

                </Routes> 
                <Footer />
            </>
        </BrowserRouter>
    )
}


export default App;