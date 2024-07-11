import { useNavigate } from 'react-router-dom';
import '../../css/accueil.css';

import Titre from '../Titre';
import Newsletter from '../sections/Newsletter';


const Rejoindre = () =>{
    const navigate = useNavigate();

    const navigat = () =>{
        navigate('/artisan/register');
    }

    return(
        <main className="concept rejoindre">
            <Titre titre="Nous rejoindre" lien="/rejoindre" classe="backGris"  />
            <section className='presentation'>
                <article>
                    <h2>Vous êtes artisans ?</h2>
                    <p>
                        Pour un artisan spécialisé dans la réparation de vêtements, rejoindre une plateforme qui met en relation artisans et utilisateurs présente plusieurs avantages.
                    </p>
                    <button className='black' onClick={navigat}>Rejoindre RenoWear</button>
                </article>
                
            </section>
            <section className='description'>
                <div>
                    <article>
                        <h3 className='text_uppercase first'>La communauté RenoWear</h3>
                        <p>
                            Renowear est bien plus qu'une de la réparation : c'est une communauté vibrante, unie par la passion pour l'exploration et le respect de notre planète. Ensemble, nous croyons en un style de vie durable, où chaque produit est conçu avec soin à partir de matériaux recyclés et respectueux de l'environnement. Rejoignez-nous pour faire partie d'un mouvement qui combine mode et responsabilité, et ensemble, faisons une différence positive dans le monde.                        
                        </p>
                    </article>
                    <article>
                        <h3 className='text_uppercase'>UN PARCOURS AVEC RENOWEAR</h3>
                        <p>
                            Chez RenoWear, nous valorisons la diversité des parcours professionnels, que vous soyez étudiant, autodidacte, diplômé ou en recherche d'emploi. En tant qu'entreprise d'insertion, nous personnalisons nos opportunités pour répondre à vos besoins à chaque étape de votre carrière, avec une variété de postes adaptés à vos préférences : flexibilité du travail, formations disponibles et emplois stables dans nos ateliers. Rejoignez une équipe où votre parcours est respecté et vos talents valorisés, contribuant ainsi à notre mission de qualité, inclusion sociale et développement personnel.
                        </p>
                    </article>
                    <article>
                        <h3 className='text_uppercase'>REJOIGNEZ NOTRE ÉQUIPE</h3>
                        <p>
                        Les artisans devraient choisir RenoWear pour son approche simplifiée et efficace qui met en valeur leur savoir-faire sans les tracas administratifs. Notre plateforme offre une visibilité accrue et une connexion directe avec une clientèle engagée dans la durabilité, facilitant ainsi le développement de leur activité tout en conservant une liberté totale dans la gestion de leurs services. 
                            <br></br><br></br>
                        Chez RenoWear, les artisans peuvent fixer leurs tarifs, définir leurs horaires et choisir les types de réparations qu'ils souhaitent offrir, ce qui leur permet de travailler de manière autonome tout en bénéficiant du soutien nécessaire pour réussir.
                            <br></br><br></br>
                        En rejoignant RenoWear, les artisans contribuent à promouvoir une mode plus durable en prolongeant la vie des vêtements tout en offrant un service de qualité. Ils font partie d'une communauté dédiée à l'artisanat et à l'excellence, renforçant ainsi leur réputation et leur expertise dans le domaine. Rejoignez-nous chez RenoWear pour faire partie d'une initiative enrichissante qui valorise votre métier tout en répondant aux attentes élevées d'une clientèle consciente et soucieuse de la qualité.
                        </p>
                    </article>
                    <article>
                        <h3 className='text_uppercase'>REJOINDRE LA MAISON RENOWEAR</h3>
                        <p className='rejoindre'>
                            Nous prenons le temps de choisir méticuleusement chacun d'entre vous, et nous vous guidons à travers les étapes nécessaires pour rejoindre nos rangs rapidement.
                        </p>
                        <div className='adhesion'>
                            <h4>Frais d’adhésion</h4>
                            <span>24,99 € *</span>
                            <p>* Montant unique pour l'inscription initiale qui peut couvrir les coûts administratifs, la création de profil, et l'accès aux outils de base du site.</p>
                            <button className='black' onClick={navigat}>Rejoindre RenoWear</button>
                        </div>
                    </article>
                </div>
            </section>
            <Newsletter />
        </main>
    )
}

export default Rejoindre;