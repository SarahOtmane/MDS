import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Footer from "./components/Footer";

import Concept from "./components/Accueil/Concept";

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

import RepaChoice from "./components/Reparation/RepaChoice";


const App = () => {
    return (
        <BrowserRouter>
            <>  
                <Header />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/home" element={<Home />} />
                    <Route path='/concept' element={<Concept />} />
                    <Route path="/legal">
                        <Route path="mentions" element={<Mentions />} />
                        <Route path="politique" element={<Politique />} />
                        <Route path="condition" element={<Conditions />} />
                    </Route>

                    <Route path="/user">
                        <Route path="register" element={<SignUp />} />
                        <Route path="login" element={<SignIn />} />

                        <Route path="password">
                            <Route path="forget" element={<ForgetMdp />} />
                            <Route path="reset" element={<ResetMdp />} />
                        </Route>

                        <Route path="cart">
                            <Route path="check" element={<CheckCart />} />
                        </Route>

                        <Route path="order">
                            <Route path="success" element={<SuccefullOrder />} />
                            <Route path="failed" element={<FailedOrder />} />
                        </Route>

                        <Route path="my-account">
                            <Route path="order" element={<AccountOrder />} />
                            <Route path="update-password" element={<AccountPassword />} />
                            <Route path="details" element={<AccountDetails />} />
                            <Route path="adress" element={<AccountAdress />} />
                        </Route>

                        <Route path="reparation">
                            <Route path="choice" element={<RepaChoice />} />
                        </Route>
                    </Route>
                </Routes>
                <Footer />
            </>
        </BrowserRouter>
    )
}

export default App;
