import { useNavigate } from "react-router-dom";

import '../../css/error.css';

import Titre from "../Titre";
import Newsletter from "../sections/Newsletter";



const Error404 = () =>{
    const navigate = useNavigate();

    return(
        <main>  
            <Titre titre="Erreur" lien="/erreur404" classe="backGris" />
            <section className="error">
                <div>
                <h1>OOPS ! Page introuvable</h1>
                <p>
                    Code erreur 404 <br></br>
                    Ce lien n’a pas encore été réparé <br></br>
                    Détendez-vous, tout va bien se passer ! <br></br>
                </p>
                <button onClick={() => navigate('/')}>Accéder à Renowear</button>
                </div>
            </section>
            <Newsletter />
        </main>
    )
}

export default Error404;