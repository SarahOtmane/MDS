import '../css/global.css';

    //section7
import reparer from '../assets/pictures/landingPage/reparer.png';
import arrow from '../assets/pictures/landingPage/Arrow.png';
    //section8
import mobileMockup from '../assets/pictures/landingPage/mobile_mockup.png';
import appStoreWhite from '../assets/pictures/landingPage/appStoreWhite.svg';
import googlePlay from '../assets/pictures/landingPage/playStore.svg';



const LandingPage = () =>{

    return(
        <main className="landing">

            <section className='section5 row justifycontent_spbetween'>
                <h2>RenoWear c'est</h2>
                <article>
                    <p>+ 100 k</p>
                    <p className='textPink'>artisans</p>
                </article>
                <article>
                    <p>90 000</p>
                    <p className='textPink'>utilisateurs</p>
                </article>
                <article>
                    <p>200 000</p>
                    <p className='textPink'>articles réparés/an</p>
                </article>
            </section>

            <section className='section7 row justifycontent_spbetween alignitem_center'>
                <article>
                    <div className='backGris haut'></div>
                    <figure className='row'>
                        <img src={reparer} alt='' />
                        <div className='backGris droit'></div>
                    </figure>
                </article>
                <article>
                    <span className='text_uppercase text_bold'>valeurs RenoWear</span>
                    <h2 className='text_uppercase'>Ne jetons plus, <br></br> réparons !</h2>
                    <p>Changeons nos habitudes de consommation, réparons nos vêtements.</p>
                    <p>Notre objectif, démocratiser la réparation grâce au digital, pour lutter contre l’impact négatif de l’industrie textile sur l’environnement.</p>
                    <a href='/' className='row text_bold alignitem_center'>Plus d'info <img src={arrow} alt='flèche' /> </a>
                </article>
            </section>

            <section className='section8 row alignitem_center backGris justifycontent_spbetween'>
                <figure>
                    <img src={mobileMockup} alt='' />
                </figure>
                <article>
                    <h2>Prêts à redonner vie à votre garde-robe ?</h2>
                    <p>Téléchargez dès maintenant notre application et donnez une seconde vie à vos vêtements en réveillant l'artisanat français.</p>
                    <div className='row'>
                        <button className='row alignitem_center'>
                            <img src={appStoreWhite} alt='logo app store' className='apple' />
                            <div>
                                <p className='span'>Download on the</p>
                                <p className='text_bold'>App Store</p>
                            </div>
                        </button>
                        <button className='row alignitem_center'>
                            <img src={googlePlay} alt='logo google play' />
                            <div>
                                <p>Get it on</p>
                                <p className='text_bold'>Google Play</p>
                            </div>
                        </button>
                    </div>
                </article>
            </section>
        </main>
    )
}


export default LandingPage;