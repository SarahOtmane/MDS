import Titre from '../Titre';



const Conditions = () =>{
    return(
        <main className='condition'>
            <Titre titre="Conditions génrales" lien="/legal/condition" classe="backGris" />
            <h2 className='titre'>Conditions génrales</h2>
            <section>
                <h3>Date d'entrée en vigueur : 29 Avril 2024</h3>
                <p>Bienvenue sur RenoWear, le spécialiste de la réparation de vêtements par des artisans compétents. En utilisant notre site web et nos services, vous acceptez de vous conformer aux conditions générales suivantes :</p>
                <ol className='ordonne'>
                    <li className='liOrdonne'>
                        Services proposés RenoWear permet aux utilisateurs de soumettre des demandes de réparation de vêtements, qui sont ensuite traitées par des artisans qualifiés. Les détails des services disponibles sont décrits sur notre site web.
                    </li>

                    <li className='liOrdonne'>
                        Création de compte Pour utiliser certains services de notre site, vous devez créer un compte en fournissant des informations précises et complètes. La responsabilité de la sécurité de votre mot de passe vous incombe exclusivement.
                    </li>

                    <li className='liOrdonne'>
                        Tarifs et paiements Les tarifs des réparations sont affichés sur notre site. Nous nous réservons le droit de modifier ces tarifs à tout moment. Les paiements sont sécurisés et doivent être effectués par les moyens proposés sur le site avant la réalisation de la réparation.
                    </li>

                    <li className='liOrdonne'>
                        Propriété intellectuelle Tout le contenu publié sur le site, y compris les textes, graphiques, logos et images, est la propriété de RenoWear ou de ses partenaires et est protégé par les lois sur la propriété intellectuelle.
                    </li>

                    <li className='liOrdonne'>
                        Confidentialité Votre utilisation du site est également régie par notre Politique de Confidentialité.
                    </li>

                    <li className='liOrdonne'>
                        Limitations de responsabilité [Nom du Site] ne peut être tenu responsable des dommages résultant de l'utilisation du site ou de l'inexactitude des informations fournies par les utilisateurs. Les artisans partenaires, bien que qualifiés, sont indépendants ; RenoWear ne peut être tenu pour responsable des erreurs ou dommages spécifiques liés à leurs interventions.
                    </li>

                    <li className='liOrdonne'>
                        Annulation et remboursement Les demandes d'annulation de services peuvent être soumises sous certaines conditions. Les remboursements sont traités au cas par cas, selon les règles définies et publiées sur notre site.
                    </li>

                    <li className='liOrdonne'>
                        Modification des conditions Nous nous réservons le droit de modifier ces conditions à tout moment. Votre utilisation continue du site après de telles modifications constitue votre acceptation des nouvelles conditions.
                    </li>

                    <li className='liOrdonne'>
                        Juridiction et lois applicables Les présentes conditions sont régies et interprétées conformément aux lois du pays de RenoWear. Tout litige relatif à ces conditions sera exclusivement résolu par les tribunaux de ce pays.
                    </li>

                    <li className='liOrdonne'>
                        Contact Pour toute question ou préoccupation concernant ces conditions, veuillez nous contacter à [Adresse e-mail de contact].
                    </li>
                </ol>
            </section>
        </main>
    )
}

export default Conditions;