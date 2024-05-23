import '../../css/accueil.css';

import Titre from '../Titre';
import Newsletter from '../sections/Newsletter';


const Concept = () =>{
    return(
        <main className="concept">
            <Titre titre="Le concept" lien="/concept" classe="backGris"  />
            <section className='presentation backVert2'>
                <article>
                    <h2>Hey, nous c'est Renowear</h2>
                    <p>
                        Offrez une nouvelle vie à vos vêtements et accessoires. 
                        Transformez vos pièces usées en créations uniques et personnalisées. 
                        Plus abordable, meilleure pour la planète mais tout aussi performante.
                    </p>
                </article>
            </section>
            <section className='valeur'>
                <div>
                    <article>
                        <h3>Une place de marché mondiale pour la réparation d’articles</h3>
                        <p>RenoWear est une place de marché mondiale de réparation de vêtements. Grâce à notre processus de vérification rigoureux, notre charte qualité exigeante, seuls les meilleurs artisans peuvent nous rejoindre sur notre site et sublimé votre garde-robe.</p>
                        
                    </article>
                    <hr></hr>
                    <article>
                        <h3>Le meilleur de la réparation</h3>
                        <p>On travaille main dans la main avec des artisans professionnels pour garantir que chaque articles a été réparé et remis en parfait état. </p>
                    </article>
                    <article>
                        <h3>Meilleur pour la planète</h3>
                        <p>Comparé à un article neuf, un vêtement réparé permet d'éviter le gaspillage de 91,3% de matières premières et 86,4% d'eau. Mais il génère aussi 89% de déchets en moins et libère 91,6% d'émissions de carbone en moins dans l'atmosphère. </p>
                    </article>
                </div>
            </section>
            <Newsletter />
        </main>
    )
}

export default Concept;