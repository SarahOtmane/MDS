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
                        Transformez vos vêtements et accessoires en créations uniques et personnalisées, offrant une alternative abordable, respectueuse de la planète et tout aussi performante, pour une mode durable.
                    </p>
                </article>
            </section>
            <section className='description'>
                <div>
                    <article>
                        <h3>Une plateforme de services pour la réparation d'articles</h3>
                        <p>Chez RenoWear, nous croyons en une mode qui ne se contente pas de suivre les tendances, mais qui préserve également notre planète. Notre concept repose sur une idée simple mais puissante : prolonger la vie de vos vêtements préférés grâce à des réparations expertes et soignées. En choisissant RenoWear, vous optez pour une approche responsable de la mode, où chaque pièce compte et chaque geste a un impact positif.</p>
                    </article>
                    <hr></hr>
                    <article>
                        <h3>Réparation et Transformation Responsables</h3>
                        <p>Notre plateforme met en relation des artisans qualifiés avec des utilisateurs soucieux de réduire leur empreinte écologique. Nous facilitons non seulement la réparation de vêtements, mais aussi la transformation de votre garde-robe en une collection durable et personnalisée. Avec RenoWear, vous avez accès à des conseils pratiques et à des tutoriels pour vous aider à entretenir et réparer vos vêtements à la maison, soutenant ainsi une consommation responsable et éclairée.</p>
                    </article>
                    <hr></hr>
                    <article>
                        <h3>Pour une mode durable</h3>
                        <p>Ensemble, changeons la manière dont nous consommons la mode. Optez pour RenoWear et participez à notre mission de préserver les ressources naturelles tout en favorisant une industrie textile plus durable et éthique. Rejoignez-nous dans cette aventure où chaque choix compte pour un avenir plus vert et plus conscient.</p>
                    </article>
                </div>
            </section>
            <Newsletter />
        </main>
    )
}

export default Concept;