

import Titre from "../Titre";
import Newsletter from "../sections/Newsletter";


const Aide = () =>{
    return(
        <main className="aide">
            <Titre titre="Aide" lien="/aide" classe="backGris" />
            <Newsletter />
        </main>
    )
}

export default Aide;