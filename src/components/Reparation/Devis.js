

import Command from "../sections/Command";
import Titre from "./Titre";



const Devis = ({command, setCommand}) =>{
    return(
        <main>
            <Titre titre='Devis' lien="/user/reparation/devis" />
            <div>
                <section>
                    <h2>Votre devis</h2>
                    <Command />
                </section>
            </div>
        </main>
    )
}

export default Devis;