
import '../../css/accueil.css';

import Titre from "../Titre";


const Artisans = () =>{
    return(
        <main className="artisans">
            <Titre titre="Nos artisans" lien="/artisans" classe="backGris" />
            <section className="backGris renowear" >
                <article>
                <h2 className="backVert2">RenoWear</h2>
                <h2 className="backVert2">& ses artisans</h2>
                </article>
            </section>
        </main>
    )
}

export default Artisans;