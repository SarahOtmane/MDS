import ReactPlayer from 'react-player';

import '../css/homeLanding.css';

import Service from './sections/Service';
import Fonctionnement from './sections/Fonctionnement';
import Avis from './sections/Avis';
import Newsletter from './sections/Newsletter';
import Slider from './sections/Slider';

import satisfaction from '../assets/pictures/home/satisfaction.svg';
import paiement from '../assets/pictures/home/paiement.svg';
import serviceClient from '../assets/pictures/home/serviceClient.svg'

const Home = () =>{
    const elements=[{
        img: serviceClient,
        titre: 'Service client',
        text: 'Déposez votre vêtement chez l\'artisan et redonnez-lui une seconde vie.'
    },{
        img: satisfaction,
        titre: 'Satisfaction garentie',
        text: 'Achetez en toute confiance grâce à notre garantie de satisfaction : aimez-le ou obtenez un remboursement.'
    },{
        img: paiement,
        titre: 'Paiement sécurisé',
        text: 'Votre sécurité est notre priorité. Vos paiements sont sécurisés chez nous.'
    }]

    return(
        <main className='home'>
            <Slider />
            <section className='elements row justifycontent_spbetween'>
                {elements.map((element, index) => (
                    <article
                        key={index}
                    >
                        <img src={element.img} alt='' />
                        <h2>{element.titre}</h2>
                        <p>{element.text}</p>
                    </article>
                ))}
            </section>
            <Service />
            <Fonctionnement />
            <section className='tuto'>
                <p>
                    Réparer avec Renowear .  <br></br>
                    Inutile de nous suivre jusqu'au bout du monde. Suivez juste ce tuto.
                </p>

                <div>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=NZFNKqtfLT0' 
                    controls
                    width="100%"
                    className='video'
                />
                </div>
            </section>
            <Avis />
            <h2 className="text_uppercase newsletter backGris">construisez une relation durables avec vos articles</h2>
            <Newsletter />
        </main>
    )
}

export default Home;