import Titre from '../Titre';



const Conditions = () =>{
    return(
        <main className='condition'>
            <Titre titre="Conditions génrales" lien="/legal/condition" classe="backGris" /> 
            <section className='backImg section'>
                <h2 className='titre'>Conditions génrales</h2>
                <ol className='ordonne'>
                    <li className='liOrdonne'>
                        <h3>Identification de l'Entreprise</h3>
                        <ul>
                            <li>Nom de l'Entreprise : RenoWear</li>
                            <li>Forme Juridique : SARL</li>
                            <li>Adresse du Siège Social : 40 rue du Chemin Vert, 75011 Paris</li>
                            <li>Email : contact@renowear.fr</li>
                            <li>Numéro de Téléphone :  01 90 56 43 12.</li>
                            <li>Numéro SIRET : 123 456 789</li>
                        </ul>
                    </li>

                    <li className='liOrdonne'>
                        <h3>Objet</h3>
                        <p>Les présentes Conditions Générales de Vente et d'Utilisation (CGV/CGU) régissent les relations contractuelles entre la société RenoWear et toute personne physique ou morale souhaitant utiliser les services de mise en relation avec des artisans pour la réparation de vêtements proposés sur le site https://www.renowear.fr/ </p>
                    </li>

                    <li className='liOrdonne'>
                        <h3>Acceptation des Conditions Générales</h3>
                        <p>En accédant au Site et en utilisant les services de RenoWear vous acceptez sans réserve les présentes CGV/CGU. </p>
                    </li>

                    <li className='liOrdonne'>
                        <h3>Services Proposés</h3>
                        <p>RenoWear est une plateforme en ligne qui met en relation des utilisateurs souhaitant faire réparer leurs vêtements avec des artisans qualifiés. Les services proposés incluent, sans s'y limiter, la vente de réparations, retouches, ajustements, et modifications de vêtements. </p>
                    </li>

                    <li className='liOrdonne'>
                        <h3>Inscription et Compte Utilisateur</h3>
                        <p className='sous-titre'>5.1. Création de Compte</p>
                        <p>
                            Pour utiliser les services de RenoWear, vous devez créer un compte en fournissant des informations exactes et complètes. Vous êtes responsable de la confidentialité de vos identifiants de connexion et de toutes les activités effectuées depuis votre compte.
                        </p>
                        <p className='sous-titre'>5.2. Vérification</p>
                        <p>
                            Nous nous réservons le droit de vérifier les informations fournies et de suspendre ou de supprimer tout compte ne respectant pas les présentes CGV/CGU.
                        </p>
                    </li>

                    <li className='liOrdonne'>
                        <h3> Processus de Commande</h3>
                        <p className='sous-titre'>6.1. Passation de Commande</p>
                        <p>
                            Pour passer commande, sélectionnez les services souhaités, ajoutez-les à votre panier et validez votre commande en procédant au paiement selon les modalités proposées sur le Site.
                        </p>
                        <p className='sous-titre'>6.2. Confirmation de Commande</p>
                        <p>
                            Vous recevrez retrouverez les étapes de votre dépôt une fois la commande réussie.
                        </p>
                    </li>

                    <li className='liOrdonne'>
                        <h3> Tarification et Paiement</h3>
                        <p className='sous-titre'>7.1. Tarification</p>
                        <p>
                            Les prix des services sont indiqués en euros, toutes taxes comprises (TTC). Le taux de TVA applicable est soumis au taux normal de TVA de 20 %.
                        </p>
                        <p className='sous-titre'>7.2. Modalités de Paiement</p>
                        <p>
                            Le paiement est exigible immédiatement à la commande. Vous pouvez régler votre commande par carte bancaire ou tout autre moyen de paiement proposé sur le Site.
                        </p>
                    </li>

                    <li className='liOrdonne'>
                        <h3> Exécution des Services</h3>
                        <p className='sous-titre'>8.1. Délais de Réalisation</p>
                        <p>
                            Les services commandés seront réalisés dans les délais indiqués par le site RenoWear. En cas de retard, nous vous informerons par email.
                        </p>
                        <p className='sous-titre'>8.2. Lieu de Réalisation</p>
                        <p>
                            Les services sont réalisés à l'adresse indiquée par l’artisan lors de la commande.
                        </p>
                    </li>

                    <li className='liOrdonne'>
                        <h3> Responsabilité</h3>
                        <p>
                            RenoWear agit en tant qu'intermédiaire entre les utilisateurs et les artisans. Nous ne saurions être tenus responsables en cas de :
                        </p>
                        <ul>
                            <li>Dommages résultant d'une mauvaise utilisation du Site ou des services.</li>
                            <li>Dommages indirects tels que perte de profit ou de chance.</li>
                        </ul>
                    </li>

                    <li className='liOrdonne'>
                        <h3>Propriété Intellectuelle</h3>
                        <p>Tous les éléments du Site (textes, images, logos, etc.) sont protégés par le droit d'auteur et sont la propriété exclusive de RenoWear. Toute reproduction ou utilisation non autorisée de ces éléments est interdite.</p>
                    </li>

                    <li className='liOrdonne'>
                        <h3>Données Personnelles</h3>
                        <p>RenoWear s'engage à protéger vos données personnelles conformément à la législation en vigueur. Pour plus d'informations, consultez notre Politique de confidentialité.</p>
                    </li>

                    <li className='liOrdonne'>
                        <h3>Modification des Conditions Générales</h3>
                        <p>RenoWear se réserve le droit de modifier à tout moment les présentes CGV/CGU. Les nouvelles conditions seront applicables dès leur publication sur le Site. Vous êtes invité à consulter régulièrement les CGV/CGU pour prendre connaissance des éventuelles modifications.</p>
                    </li>

                    <li className='liOrdonne'>
                        <h3>Loi Applicable et Juridiction</h3>
                        <p>Les présentes CGV/CGU sont soumises à la loi française. En cas de litige, les tribunaux français seront seuls compétents</p>
                    </li>

                    <li className='liOrdonne'>
                        <h3>Contact</h3>
                        <p>Pour toute question relative aux présentes conditions générales, vous pouvez nous contacter à l'adresse suivante : contact@renowear.fr.</p>
                    </li>
                </ol>
            </section>
        </main>
    )
}

export default Conditions;