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
                        Avec  RenoWear rejoignez une communauté de plus de 500 talents qui vous ressemblent et profitez d’un service clé en main pour vous reconnecter à vos clients.
                    </p>
                    <button className='black' onClick={navigat}>Rejoindre RenoWear</button>
                </article>
                
            </section>
            <section className='description'>
                <div>
                    <article>
                        <h3 className='text_uppercase first'>La communauté RenoWear</h3>
                        <p>
                            Des hommes et des femmes uniques rassemblés autour de la même passion : l’artisanat !
                            <br></br>Des artisans passionnés, amoureux du travail bien fait et qui ont à coeur de transmettre leur savoir-faire. Des personnalités attentives, qui sauront satisfaire toutes les demandes de façon précise et bienveillante.
                            <br></br>Une palette complète de savoir-faire : nos couturiers, brodeurs, maroquiniers et cordonniers partagent le même objectif, celui de faire perdurer tous les objets du quotidien.
                        </p>
                        
                    </article>
                    <article>
                        <h3 className='text_uppercase'>Tout un parcours</h3>
                        <p>
                            Chez RenoWear, nous comprenons que chacun a un parcours unique, que vous soyez étudiant, autodidacte, diplômé ou en recherche d'emploi. Nous nous engageons à adapter nos opportunités pour répondre à vos besoins à chaque étape de votre vie professionnelle. En tant qu'Entreprise d'Insertion, nous offrons un accompagnement personnalisé pour faciliter votre intégration dans le monde du travail.
                            Nous proposons une variété de postes et de missions : que vous souhaitiez travailler à votre rythme, former ou être formé, ou encore obtenir un emploi stable dans nos ateliers, RenoWear est prêt à ouvrir ses portes et à explorer toutes les perspectives d'emploi avec vous.    
                        </p>
                    </article>
                    <article>
                        <h3 className='text_uppercase'>Pourquoi choisir RenoWear</h3>
                        <p>
                            Rejoignez une communauté qui redéfinit les normes de l'artisanat. Chez Tilli, notre objectif principal est de valoriser vos compétences tout en développant un métier qui s'adapte à l'évolution du monde. En faisant partie de notre réseau d'artisans, vous aurez l'opportunité de vivre de votre passion à votre propre rythme. Nous comptons sur vous pour revitaliser et perpétuer le savoir-faire français, et ainsi établir une relation durable avec nos produits.
                        </p>
                        <ul>
                            <li className='column'>
                                <span>Flexibilité</span>
                                Acceptez des missions en fonction de vos disponibilités.
                            </li>
                            <li className='column'>
                                <span>Liberté</span>
                                Gardez votre indépendance et restez maître de votre activité.
                            </li>
                            <li className='column'>
                                <span>Simplicité</span>
                                Bénéficiez de tarifs préalablement négociés pour vous.
                            </li>
                            <li className='column'>
                                <span>Tranquillité</span>
                                Opérez directement depuis votre propre atelier.
                            </li>
                            <li className='column'>
                                <span>Gestion</span>
                                Confiez à RenoWear le soin de gérer la relation client.
                            </li>
                        </ul>
                    </article>
                    <article>
                        <h3 className='text_uppercase'>REJOINDRE LA MAISON RENOWEAR</h3>
                        <p className='rejoindre'>
                            Nous sélectionnons avec soin chacun d’entre vous et vous accompagnons dans les démarches nécessaires pour nous rejoindre rapidement.
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