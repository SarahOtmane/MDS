import '../../css/accueil.css';

import Titre from '../Titre';
import Newsletter from '../sections/Newsletter';




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
            <Newsletter />
        </main>
    )
}

export default Assurance;