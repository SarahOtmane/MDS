import '../../css/accueil.css';

import Titre from '../Titre';
import Newsletter from '../sections/Newsletter';




const Assurance = () =>{
    return(
        <main className="assurance">
            <Titre titre="Assurance" lien="/rejoindre" classe="backGris"  />
            <Newsletter />
        </main>
    )
}

export default Assurance;