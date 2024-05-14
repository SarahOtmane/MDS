import '../../css/legal.css';

import Titre from '../Titre';


const Politique = () =>{
    return(
        <main className='politique'>
            <Titre titre="Politique de Confidentialité" lien="/legal/politique" classe="backGris" />
            <h2 className='titre'>Politique de Confidentialité</h2>
            <section>
                <h3>Date d'entrée en vigueur : 29 Avril 2024</h3>
                <p>Bienvenue sur RenoWear, votre service de réparation de vêtements par des artisans qualifiés.</p>
                <ol className='ordonne'>
                    <li className='liOrdonne'>
                        <h4>Collecte de l'information</h4>
                        <p>Nous recueillons les informations suivantes :</p>
                        <ul className='nonOrdonne'>
                            <li>Nom</li>
                            <li>Adresse postale</li>
                            <li>Adresse e-mail</li>
                            <li>Numéro de téléphone</li>
                            <li>Détails sur les articles à réparer</li>
                        </ul>
                        <p>Les informations sont recueillies lors de la création de votre compte sur notre plateforme et lors de la soumission de vos demandes de réparation.</p>
                    </li>

                    <li className='liOrdonne'>
                        <h4>Utilisation des informations</h4>
                        <p>Les informations que nous recueillons sont utilisées pour :</p>
                        <ul className='nonOrdonne'>
                            <li>Traiter vos demandes de réparation</li>
                            <li>Communiquer avec vous pour des mises à jour concernant vos réparations</li>
                            <li>Améliorer nos services et offrir une expérience personnalisée</li>
                        </ul>
                    </li>

                    <li className='liOrdonne'>
                        <h4>Confidentialité du commerce</h4>
                        <p>Nous nous engageons à ne pas vendre, échanger ou transférer vos informations personnelles identifiables à des tiers sans votre consentement, sauf dans le cas où cela est nécessaire pour fournir un service que vous avez demandé.</p>
                    </li>

                    <li className='liOrdonne'>
                        <h4>Sécurité</h4>
                        <p>Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. Nous utilisons des protocoles de cryptage avancés pour protéger les informations sensibles transmises en ligne.</p>
                    </li>

                    <li className='liOrdonne'>
                        <h4>Droits de l'utilisateur</h4>
                        <p>Vous pouvez à tout moment demander à voir, modifier ou supprimer les informations personnelles que nous détenons à votre sujet. Vous pouvez également demander une restriction du traitement de vos données.</p>
                    </li>

                    <li className='liOrdonne'>
                        <h4>Consentement</h4>
                        <p>En utilisant notre site, vous consentez à notre politique de confidentialité.</p>
                    </li>

                    <li className='liOrdonne'>
                        <h4>Modifications de notre politique de confidentialité</h4>
                        <p>Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront effectives immédiatement après leur publication sur le site. Nous vous encourageons à consulter régulièrement cette page pour rester informé de toute mise à jour.</p>
                    </li>
                </ol>
            </section>
        </main>
    )
}

export default Politique;