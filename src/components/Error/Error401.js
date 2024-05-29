import { useNavigate } from "react-router-dom";

import '../../css/error.css';

import Titre from "../Titre";
import Newsletter from "../sections/Newsletter";



const Error401 = () =>{
    const navigate = useNavigate();

    return(
        <main>  
            <Titre titre="Erreur" lien="/erreur401" classe="backGris" />
            <section className="error">
                <div>
                <h1>OOPS ! Accès refusé</h1>
                <p>
                    Code erreur 401 <br></br>
                    Détendez-vous, tout va bien se passer ! <br></br>
                </p>
                <button onClick={() => navigate('/')}>Accéder à Renowear</button>
                </div>
            </section>
            <Newsletter />
        </main>
    )
}

export default Error401;