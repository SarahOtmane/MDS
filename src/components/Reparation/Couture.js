import '../../css/reparation.css';

import Titre from "./Titre";

import reparation from '../../assets/pictures/reparation.png';

const Couture = () =>{
    return(
        <main className="couture">
            <Titre titre="Couture" lien="/reparation/couture" />
            <section className="couture__contenu">
                <img src={reparation} alt='' />
                <form>
                    
                </form>
            </section>
        </main>
    )
}

export default Couture;