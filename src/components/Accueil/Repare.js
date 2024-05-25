import '../../css/accueil.css';

import Titre from '../Titre';
import Etape from '../sections/Etape';


const Repare = () =>{
    return(
        <main className="repare">
            <Titre titre="Je répare" lien="/repare" classe="backGris"  />
            <h2 className='etape text_uppercase'>pourquoi jeter quand on peut réparer</h2>
            <Etape />
        </main>
    )
}

export default Repare;