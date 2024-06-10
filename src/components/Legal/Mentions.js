import Titre from '../Titre';



const Mentions = () =>{
    return(
        <main className='mention'>
            <Titre titre="Mentions légales" lien="/legal/mentions" classe="backGris" />
            <section className='backImg section'>
                <h2 className='titre'>Mentions légales</h2>
                <h3>Date d'entrée en vigueur : 29 Avril 2024</h3>
                <p>
                    Le site RenoWear est édité par Société Renowear, une société [forme juridique] au capital de [montant] euros, inscrite au Registre du Commerce et des Sociétés de Paris sous le numéro [numéro d'inscription].
                    <b></b>
                    Adresse : 40 rue du Chemin Vert, 75011 Paris
                    <b></b>
                    Téléphone : 01 90 56 43 12. 
                    <b></b>
                    E-mail : contact@renowear.fr
                </p>
                <p>
                    Le nom de domaine a été acheté sur OVHCloud, et le site est hébérgé sur VERCEL.
                </p>

                <h3>Propriété intellectuelle</h3>
                <p>
                    Le contenu de ce site, comprenant, de façon non limitative, les images, textes, vidéos, logos, et icônes, est la propriété de Société Renowear, sauf mention contraire. Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site, sans l'autorisation de Société Renowear est prohibée et peut entraîner des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et/ou le Code civil.
                </p>

                <h3>Données personnelles</h3>
                <p>
                Pour plus d'informations sur la manière dont nous traitons vos données personnelles, veuillez consulter notre <a href='/legal/politique'>Politique de Confidentialité</a>.
                </p>

                <h3>Conditions d’utilisation</h3>
                <p>
                L’utilisation du site Renowear est régie par les termes des conditions générales d'utilisation du site. Nous vous invitons à les consulter en cliquant <a href='/legal/condition'>ici</a>.
                </p>

                <h3>Limitation de responsabilité.</h3>
                <p>Société Renowear s’efforce d’assurer au mieux de ses possibilités, l’exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu. Toutefois, Société Renowear ne peut garantir l’exactitude, la précision ou l’exhaustivité des informations mises à disposition sur ce site.</p>

                <h3>Droit applicable</h3>
                <p>
                    Les présentes mentions légales sont soumises au droit interne du pays de Renowear. En cas de litige, les tribunaux de ce pays seront seuls compétent 
                </p>
                <p>Ce site est un projet scolaire développé dans le cadre de notre diplôme Bachelor.</p>
            </section>
        </main>
    )
}

export default Mentions;