import '../../css/accueil.css';

import Titre from '../Titre';
import Newsletter from '../sections/Newsletter';

//import image
import echos from '../../assets/pictures/acceuil/echos.png';
import forbes from '../../assets/pictures/acceuil/forbes.png';
import sudOuest from '../../assets/pictures/acceuil/sudOuest.png';
import aiguilles from '../../assets/pictures/acceuil/aiguilles.png';
import boutton from '../../assets/pictures/acceuil/boutton.png';
import ceintre from '../../assets/pictures/acceuil/ceintre.png';
import ciseaux from '../../assets/pictures/acceuil/ciseaux.png';
import deco1 from '../../assets/pictures/acceuil/deco1.png';
import deco2 from '../../assets/pictures/acceuil/deco2.png';
import deco3 from '../../assets/pictures/acceuil/deco3.png';
import pelote from '../../assets/pictures/acceuil/pelote.png';


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
                        <img className='picto boutton' src={boutton} alt='' />
                        <img className='picto deco3' src={deco3} alt='' />
                        <h3>Une place de marché mondiale pour la réparation d’articles</h3>
                        <img className='picto pelote' src={pelote} alt='' />
                        <p>RenoWear est une place de marché mondiale de réparation de vêtements. Grâce à notre processus de vérification rigoureux, notre charte qualité exigeante, seuls les meilleurs artisans peuvent nous rejoindre sur notre site et sublimé votre garde-robe.</p>
                        <img className='picto ceintre' src={ceintre} alt='' />
                        <figure className='row justifycontent_spbetween alignitem_center'>
                            <img src={echos} alt="echos" />
                            <img src={sudOuest} alt="sudOuest" />
                            <img src={forbes} alt="forbes" />
                        </figure>
                    </article>
                    <hr></hr>
                    <article>
                        <img className='picto ciseaux' src={ciseaux} alt='' />
                        <h3>Le meilleur de la réparation</h3>
                        <p>On travaille main dans la main avec des artisans professionnels pour garantir que chaque articles a été réparé et remis en parfait état. </p>
                        <img className='picto aiguilles' src={aiguilles} alt='' />
                    </article>
                    <hr></hr>
                    <article>
                        <h3>Meilleur pour la planète</h3>
                        <p>Comparé à un article neuf, un vêtement réparé permet d'éviter le gaspillage de 91,3% de matières premières et 86,4% d'eau. Mais il génère aussi 89% de déchets en moins et libère 91,6% d'émissions de carbone en moins dans l'atmosphère. </p>
                        <img className='picto deco1' src={deco1} alt='' />
                        <img className='picto deco2' src={deco2} alt='' />
                    </article>
                </div>
            </section>
            <Newsletter />
        </main>
    )
}

export default Concept;