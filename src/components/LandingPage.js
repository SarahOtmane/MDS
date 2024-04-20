import mockup from '../assets/pictures/landingPage/landing_mockup.png';
import appStore from '../assets/pictures/landingPage/appStore.svg';
import googlePlay from '../assets/pictures/landingPage/playStore.svg';
import arrow from '../assets/pictures/landingPage/Arrow.png';
import loupe from '../assets/pictures/landingPage/loupe.svg';
import check from '../assets/pictures/landingPage/check.svg';
import send from '../assets/pictures/landingPage/send.svg';
import ok from '../assets/pictures/landingPage/ok.svg';
import image1 from '../assets/pictures/landingPage/image1.png';
import image2 from '../assets/pictures/landingPage/image2.png';
import image3 from '../assets/pictures/landingPage/image3.png';

const LandingPage = () =>{
    return(
        <main className="landing">
            <section className="section1 backGris row">
                <article>
                    <h1 className='text_uppercase'>pourquoi jeter <br></br> quand on peut réparer ?</h1>
                    <p>Le concept de réparation et de consommation de vêtements durables</p>
                    <p>Faites le tri dans vos habits.</p>
                    <p className='text_bold'>Télécharger RenoWear</p>
                    <div className='row'>
                        <button className='row alignitem_center'>
                            <img src={googlePlay} alt='logo google play' />
                            <div>
                                <p>Get it on</p>
                                <p className='text_bold'>Google Play</p>
                            </div>
                        </button>
                        <button className='row alignitem_center'>
                            <img src={appStore} alt='logo app store' />
                            <div>
                                <p>Get it on</p>
                                <p className='text_bold'>App Store</p>
                            </div>
                        </button>
                    </div>
                </article>
                <img src={mockup} alt='' />
            </section>
            <section className="section2 backGris row">
                <h2 className='text_uppercase'>Service <br></br> d'artisans</h2>
                <div className='column'>
                    <div className='row'>
                        <article className='column card'>
                            <h3>Couturiers</h3>
                            <p>Ils réparent et transforment tous vos textiles, des simples ourlets. Tout est possible, du dressing à la déco d'intérieur.</p>
                        </article>
                        <article className='column card'>
                            <h3>Cordonniers</h3>
                            <p>Ils préviennent l'usure et restaurent vos chaussures, prolongeant ainsi leur durée de vie pas à pas.</p>
                        </article>
                        <article className='column card'>
                            <h3>Maroquiniers</h3>
                            <p>Ils entretiennent, réparent et revitalisent vos sacs et accessoires en cuir, offrant tout, de la nouvelle teinture à la création sur-mesure.</p>                   
                        </article>
                    </div>
                    <article className='row'>
                        <a href='/' className='row text_bold alignitem_center'>En savoir plus <img src={arrow} alt='flèche' /> </a>
                        <a href='/' className='row text_bold alignitem_center'>En savoir plus <img src={arrow} alt='flèche' /> </a>
                        <a href='/' className='row text_bold alignitem_center'>En savoir plus <img src={arrow} alt='flèche' /> </a>
                    </article>
                </div>
            </section>
            <section className='section3 row'>
                <article>
                    <span>Expérience</span>
                    <h3>Comment <br></br> ça marche ?</h3>
                    <p className='row'> <img src={loupe} alt="icone svg" /> Réalisez votre diagnostic.</p>
                    <p className='row'> <img src={check} alt="icone svg" /> Validez le devis final.</p>
                    <p className='row'> <img src={send} alt="icone svg" /> Envoyez vos articles.</p>
                    <p className='row'> <img src={ok} alt="icone svg" /> Réceptionnez vos vêtements sous 5 à 10 jours.</p>
                </article>
                <figure className='column 2images'>
                    <img src={image1} alt='une personne qui est entrain de coudre ' />
                    <img src={image2} alt='une machine à coudre ' />
                </figure>
                <figure>
                    <img src={image3} alt='un mannequin ' />
                </figure>
            </section>
        </main>
    )
}


export default LandingPage;