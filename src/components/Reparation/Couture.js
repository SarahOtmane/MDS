import '../../css/reparation.css';

import Titre from "./Titre";
import Input from "./Input";

import reparation from '../../assets/pictures/reparation.png';

const Couture = () =>{
    return(
        <main className="couture">
            <Titre titre="Couture" lien="/reparation/couture" />
            <section className="couture__contenu row">
                <img src={reparation} alt='' />
                <form>
                    <Input name="categorie" />
                    <Input name="clotheType" />
                    <Input name="clotheMatiere" />
                    <Input name="reparationType" />
                    <Input name="besoinType" />
                    
                </form>
            </section>
        </main>
    )
}

export default Couture;