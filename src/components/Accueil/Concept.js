import '../../css/accueil.css';

import Titre from '../Titre';
import Newsletter from '../sections/Newsletter';



const Concept = () =>{
    return(
        <main className="concept backVert2">
            <Titre titre="Le concept" lien="/concept" classe="backGris"  />
            <section className='presentation'>
                <h2>Hey, nous c'est Renowear</h2>
                <p>
                    Offrez une nouvelle vie à vos vêtements et accessoires. 
                    Transformez vos pièces usées en créations uniques et personnalisées. 
                    Plus abordable, meilleure pour la planète mais tout aussi performante.
                </p>
            </section>
            <Newsletter />
        </main>
    )
}

export default Concept;