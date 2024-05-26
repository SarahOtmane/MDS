import '../../css/reparation.css';

import Titre from "./Titre";
import Input from "./Input";

import reparation from '../../assets/pictures/reparation.png';

const Couture = () =>{
    return(
        <main className="couture">
            <Titre titre="Couture" lien="/reparation/couture" />
            <section className="couture__contenu row justifycontent_spbetween">
                <img src={reparation} alt='' />
                <form>
                    <label>Quelle est la catégorie ?</label>
                    <Input name="categorie" />

                    <label>Quel est le type de vêtements ?</label>
                    <Input name="clotheType" />

                    <label>Quelle est la matière du vêtement ?</label>
                    <Input name="clotheMatiere" />

                    <label>Quelle est la réparation ?</label>
                    <Input name="reparationType" />

                    <label>Quel est votre besoin ?</label>
                    <Input name="besoinType" />

                    <label>Ajouter un commentaire</label>
                    <textarea placeholder='Laissez un commentaire' rows={10} cols={40} />
                    
                </form>
            </section>
        </main>
    )
}

export default Couture;