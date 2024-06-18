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
                            Une communauté d'hommes et de femmes uniques se forme autour d'une passion commune : l'artisanat ! Ces artisans dévoués, experts dans leur domaine, sont animés par le désir de transmettre leur savoir-faire. Leur attention particulière leur permet de répondre avec précision et bienveillance à chaque demande. Ensemble, nos couturiers, brodeurs, maroquiniers et cordonniers s'unissent dans le but commun de perpétuer avec excellence les objets du quotidien.
                        </p>
                    </article>
                    <article>
                        <h3 className='text_uppercase'>Tout un parcours</h3>
                        <p>
                        Chez RenoWear, nous reconnaissons la diversité des parcours professionnels, que vous soyez étudiant, autodidacte, diplômé ou en quête d'emploi. Nous nous engageons à personnaliser nos opportunités pour répondre à vos besoins à chaque étape de votre carrière. En tant qu'Entreprise d'Insertion, nous offrons un soutien individualisé pour faciliter votre transition vers le monde du travail.
                        Nous offrons une multitude de postes et de missions adaptés à vos préférences : que vous recherchiez un rythme de travail flexible, une possibilité de formation, ou encore un emploi stable au sein de nos ateliers, RenoWear est ouvert à toutes les possibilités d'emploi et prêt à explorer ces options avec vous.
                        </p>
                    </article>
                    <article>
                        <h3 className='text_uppercase'>Pourquoi choisir RenoWear</h3>
                        <p>
                            Rejoignez une communauté qui réinvente les standards de l'artisanat. Notre objectif principal est de mettre en avant vos compétences tout en adaptant nos métiers aux évolutions du monde. En faisant partie de notre réseau d'artisans, vous aurez la possibilité de vivre votre passion à votre rythme. Nous vous invitons à contribuer à la revitalisation et à la perpétuation du savoir-faire français, tout en établissant des relations durables avec nos produits.
                        </p>
                        <ul>
                            <li className='column'>
                                <span>Flexibilité</span>
                                Acceptez des missions en fonction de vos disponibilités.
                            </li>
                            <li className='column'>
                                <span>Liberté</span>
                                Préservez votre indépendance et gardez le contrôle sur votre activité.
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