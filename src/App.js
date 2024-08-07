import { BrowserRouter, Route, Routes} from "react-router-dom";
import { useState } from "react";

import './App.css';

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";

import Concept from "./components/Accueil/Concept";
import Aide from "./components/Accueil/Aide";
import Repare from "./components/Accueil/Repare";
import Rejoindre from "./components/Accueil/Rejoindre";
import Artisans from "./components/Accueil/Artisans";
import Assurance from "./components/Accueil/Assurance";

import SignUp from "./components/User/Sign/SignUp";
import SignIn from "./components/User/Sign/SignIn";
import ForgetMdp from "./components/User/Sign/ForgetMdp";
import ResetMdp from "./components/User/Sign/ResetMdp";

import AccountOrder from "./components/User/Account/AccountOrder";
import AccountPassword from "./components/User/Account/AccountPassword";
import AccountDetails from "./components/User/Account/AccountDetails";
import AccountAdress from "./components/User/Account/AccountAdress";
import SuppressionCompte from "./components/User/SuppressionCompte";

import SuccefullOrder from "./components/Order/SuccefullOrder";
import FailedOrder from "./components/Order/FailedOrder";

import Mentions from "./components/Legal/Mentions";
import Conditions from "./components/Legal/Conditions";
import Politique from "./components/Legal/Politique";

import Reparation from "./components/Reparation/Reparation";
import ReparationPic from "./components/Reparation/ReparationPic";
import Devis from "./components/Reparation/Devis";
import Panier from "./components/Reparation/Panier";
import Paiement from "./components/Reparation/Paiement";

import Error404 from "./components/Error/Error404";
import Error403 from "./components/Error/Error403";
import Error500 from "./components/Error/Error500";
import Error401 from "./components/Error/Error401";

import ArtisanSignUp from "./components/Artisan/Sign/ArtisanSignUp";
import ArtisanSignIn from "./components/Artisan/Sign/ArtisanSignIn";

import ArtisanAccountDetails from "./components/Artisan/Account/ArtisanAccountDetails";
import ArtisanAccountJob from "./components/Artisan/Account/ArtisanAccountJob";
import ArtisanAccountAdress from "./components/Artisan/Account/ArtisanAccountAdress";
import ArtisanAccountOrder from "./components/Artisan/Account/ArtisanAccountOrder";
import ArtisanAccountMdp from "./components/Artisan/Account/ArtisanAccoutnMdp";






/*
            Les routes

    /home
    /concept
    /aide
    /repare
    /rejoindre
    /artisans
    /assurance
    /erreur401
    /erreur404
    /erreur403
    /erreur500
    /legal :
        /mentions
        /politique
        /condition
    /suppression
    /user :
        /register
        /login
        /password :
            /forget
            /reset/:token
        /order : 
            /success
            /failed
        /my-account :
            /order
            /update-password
            /details
            /adress
        /reparation :
            /details
            /image
            /devis
            /panier
            /paiement
    /artisan : 
        /register
        /login
        /my-account : 
            /details
            /metier
            /adress
            /order
            /update-password
*/


const App = () => {
    const [command, setCommand] = useState({
        picture: '',
        id_user: '',
        id_artisan: '',
        job: '',
        id_presta: '',
        reparationType: '',
        clotheType: '',
        categorie: '',
        besoinType: '',
        fontSize: '',
        broderieType: '',
        comment: '',
        price: 0,
        id: 0
    });

    const [service, setService] = useState('');
    const [serviceEnvoyeParRepare, setServiceEnvoyeParRepare] = useState(false);

    const pagesBackWhite = [
        "/", "/concept", "/aide", "/repare", "/artisans", "/rejoindre",
        "/user/reparation/details", "/user/reparation/image"
    ]

    return (
        <BrowserRouter>
                <Header />
                <Routes>
                    {/* <Route path="/" element={<LandingPage />} /> */}
                    <Route path="/" element={<Home />} />
                    <Route path='/concept' element={<Concept />} />
                    <Route path="/aide" element={<Aide />} />
                    <Route path="/repare" element={<Repare 
                        setService={setService} setServiceEnvoyeParRepare={setServiceEnvoyeParRepare}
                    />} />
                    <Route path="/artisans" element={<Artisans 
                        service={service}  setService={setService} setCommand={setCommand} command={command}
                        serviceEnvoyeParRepare={serviceEnvoyeParRepare} setServiceEnvoyeParRepare={setServiceEnvoyeParRepare}
                    />} />
                    <Route path="/rejoindre" element={<Rejoindre />} />
                    <Route path="/assurance" element={<Assurance />} />
                    <Route path="/error401" element={<Error401 />} />
                    <Route path="/error404" element={<Error404 />} />
                    <Route path="/error403" element={<Error403 />} />
                    <Route path="/error500" element={<Error500 />} />

                    <Route path="/legal">
                        <Route path="mentions" element={<Mentions />} />
                        <Route path="politique" element={<Politique />} />
                        <Route path="condition" element={<Conditions />} />
                    </Route>

                    <Route path="suppression" element={<SuppressionCompte />} />

                    <Route path="/user">
                        <Route path="register" element={<SignUp />} />
                        <Route path="login" element={<SignIn />} />

                        <Route path="password">
                            <Route path="forget" element={<ForgetMdp />} />
                            <Route path="reset/:token" element={<ResetMdp />} />
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
                            <Route path="details" element={<Reparation 
                                command={command} 
                                setCommand={setCommand}
                            />} />
                            <Route path="image" element={<ReparationPic 
                                command={command} 
                                setCommand={setCommand}
                            />} />
                            <Route path="devis" element={<Devis 
                                command={command} 
                                setCommand={setCommand}
                            />} />
                            <Route path="panier" element={<Panier />} />
                            <Route path="paiement" element={<Paiement />} />
                        </Route>
                    </Route>
                    <Route path="/artisan">
                        <Route path="register" element={<ArtisanSignUp />} />
                        <Route path="login" element={<ArtisanSignIn />} />

                        <Route path="my-account">
                            <Route path="details" element={<ArtisanAccountDetails />} />
                            <Route path="metier" element={<ArtisanAccountJob />} />
                            <Route path="adress" element={<ArtisanAccountAdress />} />
                            <Route path="order" element={<ArtisanAccountOrder />} />
                            <Route path="update-password" element={<ArtisanAccountMdp />} />
                        </Route>
                    </Route>

                </Routes>
                <Footer pagesBackWhite={pagesBackWhite} />
        </BrowserRouter>
    )
}

export default App;
