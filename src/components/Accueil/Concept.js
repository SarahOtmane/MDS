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
            <section className='description'>
                <div>
                    <article>
                        <h3>Une place de marché mondiale pour la réparation d’articles</h3>
                        <p>RenoWear est une plateforme de réparation de vêtements. Seuls les meilleurs artisans, sélectionnés grâce à notre processus de vérification rigoureux et notre charte qualité exigeante, peuvent rejoindre notre site pour sublimer votre garde-robe et promouvoir une mode durable.</p>
                    </article>
                    <hr></hr>
                    <article>
                        <h3>Le meilleur de la réparation</h3>
                        <p>Nous collaborons avec des artisans professionnels français pour garantir que chaque article est réparé et remis en parfait état.</p>
                    </article>
                    <hr></hr>
                    <article>
                        <h3>Meilleur pour la planète</h3>
                        <p>En comparaison avec un article neuf, un vêtement réparé permet d'économiser 2 700 litres d'eau, de réduire les déchets d’en moyenne 79 % et de diminuer les émissions de carbone.</p>
                    </article>
                </div>
            </section>
            <Newsletter />
        </main>
    )
}

export default Concept;