
import Titre from "../Titre";
import Newsletter from "../sections/Newsletter";



const Error404 = () =>{
    return(
        <main>  
            <Titre titre="Erreur" lien="/erreur404" classe="backGris" />

            <Newsletter />
        </main>
    )
}

export default Error404;