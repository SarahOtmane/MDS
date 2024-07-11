import '../../css/accueil.css';

import Titre from '../Titre';

import axa from '../../assets/pictures/assurances/axa.svg';



const Assurance = () =>{
    return(
        <main className="concept rejoindre assurance">
            <Titre titre="Assurance" lien="/rejoindre" classe="backGris"  />
            <section className='presentation'>
                <article>
                    <h2>Un partenariat avec <br></br> AXA</h2>
                    <p>
                        La plateforme idéale pour connecter les particuliers avec des artisans experts en couture, maroquinerie, et bien plus encore. Notre mission est de donner une nouvelle vie à vos articles préférés, en garantissant une réparation de qualité.
                    </p>
                </article>
            </section>

            <section className='assuranceDescription'>
                <h3 className='titre'>NOTRE PARTENAIRE AXA<br></br>Une assurance incluse à chaque commande</h3>
                <img src={axa} alt='' />

                <article>
                    <h3>Notre Partenariat avec AXA</h3>
                    <p>Pour garantir votre tranquillité d'esprit, nous avons établi un partenariat solide avec AXA. En cas de problème lors de la réparation, notre assurance partenaires sont là pour assurer la protection de vos biens. Voici comment nous protégeons chaque transaction :</p>
                    <ol>
                        <li>Couverture Complète : Chaque article déposé sur notre plateforme est automatiquement couvert par notre assurance. Cela signifie que, du dépôt à la récupération, votre vêtement est assuré contre tout dommage potentiel durant le processus de réparation.</li>
                        <li>Processus de Réclamation Simplifié : En cas de besoin, notre procédure de réclamation est rapide et sans tracas. Nous travaillons en étroite collaboration avec nos partenaires assureurs pour s'assurer que toute réclamation soit traitée efficacement et équitablement.</li>
                        <li>Partenaires de Confiance : Nous collaborons uniquement avec des assureurs réputés pour leur fiabilité et leur service clientèle exceptionnel. Cela nous permet de fournir le meilleur service de protection possible à nos clients.</li>
                    </ol>
                </article>

                <article>
                    <h3>Pourquoi choisir RenoWear ?</h3>
                    <ul>
                        <li>Artisans Qualifiés : Nos artisans sont rigoureusement sélectionnés pour leur expertise et leur savoir-faire.</li>
                        <li>Sécurité et Confiance : Avec la couverture d'assurance, chaque réparation est effectuée en toute sécurité.</li>
                        <li>Soutien Local : En choisissant RenoWear, vous soutenez des artisans locaux et favorisez une économie durable.</li>
                    </ul>
                    <p>
                        Nous vous invitons à explorer notre site, à découvrir les services offerts et à commencer dès aujourd'hui la réparation de vos vêtements et accessoires. Pour toute question, n'hésitez pas à contacter notre service client.
                        Redonnez vie à vos vêtements avec RenoWear — Où la qualité rencontre la tranquillité d'esprit.
                    </p>
                </article>

                <table>
                    <thead>
                        <tr>
                            <th>Nature des garenties</th>
                            <th>Limite des garenties</th>
                            <th>Franchise par sinistre</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Dommages matériels</th>
                            <td>Couverture jusqu'à 10 000 € par article</td>
                            <td>50 €</td>
                        </tr>
                        <tr>
                            <th>Vol lors de la réparation</th>
                            <td>Couverture jusqu'à la valeur totale de l'article</td>
                            <td>100 €</td>
                        </tr>
                        <tr>
                            <th>Perte totale</th>
                            <td>Remboursement à la valeur d'achat</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <th>Dommages accidentels</th>
                            <td>Couverture jusqu'à 5 000 €</td>
                            <td>75 €</td>
                        </tr>
                        <tr>
                            <th>Resbonsabilité civile de l'artisan</th>
                            <td>Couverture jusqu'à 1 000 000 € par article</td>
                            <td>250 €</td>
                        </tr>
                    </tbody>
                </table>

                <article>
                    <h3>Quelles sont les exclusions ?</h3>
                    <ul>
                        <li>Les dommages subis par les biens que l’assuré détient en vertu d’un contrat de dépôt rémunéré ou qui lui sont remis en vue de la vente ou de la location ;</li>
                        <li>Les dommages subis par les biens loués ou prêtés à titre onéreux à l’assuré ou qu’il détient en vertu d’un contrat de crédit-bail ou de location- vente ;</li>
                        <li>Les dommages causés en cours de transport. Toutefois, si l’assuré n’est pas un transporteur professionnel, la garantie lui est acquise lorsqu’il effectue lui-même un transport accessoirement aux activités définies au contrat ;</li>
                        <li>Les dommages subis par les espèces, les biens et objets de valeurs tels que titres, bijoux, pierreries, perles fines, objets en métaux précieux, pierres dures, statues, tableaux, collections, objets relevant du marché de l’art, fourrures ;</li>
                        <li>Les objets en mauvais état au moment du sinistre ;</li>
                        <li>Le vol, la perte ou la disparition totale ou partielle des biens confiés. Toutefois, demeure garanti le vol de biens mobiliers dans l’enceinte des établissements objets du contrat de prestation causé par : </li>
                            <ul>
                                <li>Les préposés de l’assuré au cours ou à l’occasion de leurs fonctions, des tiers lorsque la responsabilité de l’assuré est engagée par suite d’une négligence à lui-même ou à ses préposés.</li>
                                <li>Ainsi que les dommages immatériels qui en sont la conséquence.</li>
                            </ul>
                    </ul>
                </article>
            </section>
        </main>
    )
}

export default Assurance;