import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Footer from "./components/Footer";

import SignUp from "./components/Sign/SignUp";
import SignIn from "./components/Sign/SignIn";
import ForgetMdp from "./components/Sign/ForgetMdp";
import ResetMdp from "./components/Sign/ResetMdp";

import CheckCart from "./components/Cart/CheckCart";

import SuccefullOrder from "./components/Order/SuccefullOrder";
import FailedOrder from "./components/Order/FailedOrder";

import AccountOrder from "./components/Account/AccountOrder";
import AccountPassword from "./components/Account/AccountPassword";
import AccountDetails from "./components/Account/AccountDetails";
import AccountAdress from "./components/Account/AccountAdress";

import Mentions from "./components/Legal/Mentions";
import Conditions from "./components/Legal/Conditions";
import Politique from "./components/Legal/Politique";


const App = () => {
    return (
        <BrowserRouter>
            <>  
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/legal" element={<Mentions />}>
                        <Route path="politique" element={<Politique />} />
                        <Route path="condition" element={<Conditions />} />
                    </Route>

                    <Route path="/user" element={<SignUp />}>
                        <Route path="register" element={<SignUp />} />
                        <Route path="login" element={<SignIn />} />

                        <Route path="resetMdp" element={<ForgetMdp />}>
                            <Route path="reset" element={<ResetMdp />} />
                        </Route>

                        <Route path="cart/check" element={<CheckCart />} />

                        <Route path="success-order" element={<SuccefullOrder />} />
                        <Route path="failed-order" element={<FailedOrder />} />

                        <Route path="my-account" element={<AccountOrder />}>
                            <Route path="update-password" element={<AccountPassword />} />
                            <Route path="details" element={<AccountDetails />} />
                            <Route path="address" element={<AccountAdress />} />
                        </Route>
                    </Route>
                </Routes>
                <Footer />
            </>
        </BrowserRouter>
    )
}

export default App;
