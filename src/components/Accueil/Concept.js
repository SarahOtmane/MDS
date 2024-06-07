import '../../css/accueil.css';

import Titre from '../Titre';
import Newsletter from '../sections/Newsletter';

//import image
import echos from '../../assets/pictures/acceuil/echos.png';
import forbes from '../../assets/pictures/acceuil/forbes.png';
import sudOuest from '../../assets/pictures/acceuil/sudOuest.png';


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
            <section className='description'>
                <div>
                    <article>
                        <h3>Une place de marché mondiale pour la réparation d’articles</h3>
                        <p>RenoWear est une place de marché mondiale de réparation de vêtements. Grâce à notre processus de vérification rigoureux, notre charte qualité exigeante, seuls les meilleurs artisans peuvent nous rejoindre sur notre site et sublimé votre garde-robe, pour une mode durable.</p>
                        <figure className='row justifycontent_spbetween alignitem_center'>
                            <img src={echos} alt="echos" />
                            <img src={sudOuest} alt="sudOuest" />
                            <img src={forbes} alt="forbes" />
                        </figure>
                    </article>
                    <hr></hr>
                    <article>
                        <h3>Le meilleur de la réparation</h3>
                        <p>On travaille main dans la main avec des artisans professionnels, français pour garantir que chaque article a été réparé et remis en parfait état.  </p>
                    </article>
                    <hr></hr>
                    <article>
                        <h3>Meilleur pour la planète</h3>
                        <p>Comparé à un article neuf, un vêtement réparé permet d'éviter le gaspillage de 2 700 litres d'eau. Mais il génère aussi 79% de déchets en moins et libère 50% d'émissions de carbone en moins dans l'atmosphère.  </p>
                    </article>
                </div>
            </section>
            <Newsletter />
        </main>
    )
}

export default Concept;