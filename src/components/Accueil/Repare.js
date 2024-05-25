import '../../css/accueil.css';

import Titre from '../Titre';
import Etape from '../sections/Etape';


const Repare = () =>{
    return(
        <main className="repare">
            <Titre titre="Je répare" lien="/repare" classe="backGris"  />

            <Etape />
        </main>
    )
}

export default Repare;