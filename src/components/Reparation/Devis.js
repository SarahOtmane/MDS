

import Command from "../sections/Command";
import CommandRecap from "../sections/CommandRecap";
import Titre from "../Titre";



const Devis = ({command, setCommand}) =>{
    return(
        <main>
            <Titre titre='Devis' lien="/user/reparation/devis" classe="backGris" />
            <section>
            <div className="devis">
                <h2 className="devisTitre">Votre devis</h2>
                <section className="row justifycontent_spbetween">
                    <Command command={command} setCommand={setCommand} />
                    <CommandRecap name='devis' />
                </section>
            </div>
            </section>
        </main>
    )
}

export default Devis;