

import Command from "../sections/Command";
import CommandRecap from "../sections/CommandRecap";
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
                <CommandRecap />
            </div>
        </main>
    )
}

export default Devis;