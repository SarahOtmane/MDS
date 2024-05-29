import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

import Concept from "./components/Accueil/Concept";
import Aide from "./components/Accueil/Aide";
import Repare from "./components/Accueil/Repare";
import Rejoindre from "./components/Accueil/Rejoindre";

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

import Couture from "./components/Reparation/Couture";
import CouturePics from "./components/Reparation/CouturePics";

import Error404 from "./components/Error/Error404";
import Error403 from "./components/Error/Error403";
import Error500 from "./components/Error/Error500";
import Error401 from "./components/Error/Error401";





/*
            Les routes

    /home
    /concept
    /aide
    /repare
    /rejoindre
    /artisans
    /erreur401
    /erreur404
    /erreur403
    /erreur500
    /legal :
        /mentions
        /politique
        /condition
    /user :
        /register
        /login
        /password :
            /forget
            /reset
        /cart :
            /check
        /order : 
            /success
            /failed
        /my-account :
            /order
            /update-password
            /details
            /adress
        /reparation :
            /couture
            /couture-pics

*/


const App = () => {
    return (
        <BrowserRouter>
            <>  
                <Header />
                <Routes>
                    {/* <Route path="/" element={<LandingPage />} /> */}
                    <Route path="/" element={<Home />} />
                    <Route path='/concept' element={<Concept />} />
                    <Route path="/aide" element={<Aide />} />
                    <Route path="/repare" element={<Repare />} />
                    <Route path="/rejoindre" element={<Rejoindre />} />
                    <Route path="/erreur401" element={<Error401 />} />
                    <Route path="/erreur404" element={<Error404 />} />
                    <Route path="/erreur403" element={<Error403 />} />
                    <Route path="/erreur500" element={<Error500 />} />

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
                            <Route path="couture" element={<Couture />} />
                            <Route path="couturepics" element={<CouturePics />} />
                        </Route>
                    </Route>
                </Routes>
                <Footer />
            </>
        </BrowserRouter>
    )
}

export default App;
