import Titre from '../Titre';



const Mentions = () =>{
    return(
        <main className='mention'>
            <Titre titre="Mentions légales" lien="/legal/mentions" classe="backGris" />
            <section className='backImg section'>
                <h2 className='titre'>Mentions légales</h2>
                <h3>Date d'entrée en vigueur : 29 Avril 2024</h3>
                <p>
                    Le site [Nom du Site] est édité par [Nom de la Société], une société [forme juridique] au capital de [montant] euros, inscrite au Registre du Commerce et des Sociétés de [Ville] sous le numéro [numéro d'inscription].
                    <b></b>
                    Adresse : [Adresse complète]
                    <b></b>
                    Téléphone : [Numéro de téléphone]
                    <b></b>
                    E-mail : [Adresse e-mail de contact]
                    <b></b>
                    Directeur de la publication : [Nom du Directeur de la publication], [Fonction]
                </p>
                <p>
                    Le site est hébergé par [Nom de l'hébergeur], [Adresse complète de l'hébergeur], téléphone : [Numéro de téléphone de l'hébergeur].
                </p>

                <h3>Propriété intellectuelle</h3>
                <p>
                    Le contenu de ce site, comprenant, de façon non limitative, les images, textes, vidéos, logos, et icônes, est la propriété de [Nom de la Société], sauf mention contraire. Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site, sans l'autorisation de [Nom de la Société] est prohibée et peut entraîner des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et/ou le Code civil.
                </p>

                <h3>Données personnelles</h3>
                <p>
                    Pour plus d'informations sur la manière dont nous traitons vos données personnelles, veuillez consulter notre Politique de Confidentialité.
                </p>

                <h3>Conditions d’utilisation</h3>
                <p>
                    L’utilisation du site [Nom du Site] est régie par les termes des conditions générales d'utilisation du site. Nous vous invitons à les consulter en cliquant ici [lien vers les conditions générales d'utilisation].
                    <br></br>
                    Limitation de responsabilité.
                    <br></br>
                    [Nom de la Société] s’efforce d’assurer au mieux de ses possibilités, l’exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu. Toutefois, [Nom de la Société] ne peut garantir l’exactitude, la précision ou l’exhaustivité des informations mises à disposition sur ce site.
                </p>

                <h3>Droit applicable</h3>
                <p>
                Les présentes mentions légales sont soumises au droit interne du pays de [Nom du Site]. En cas de litige, les tribunaux de ce pays seront seuls compétent.
                </p>
            </section>
        </main>
    )
}

export default Mentions;