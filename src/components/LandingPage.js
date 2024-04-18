import mockup from '../assets/pictures/landing_mockup.png';
import appStore from '../assets/pictures/appStore.svg';
import googlePlay from '../assets/pictures/playStore.svg';
import arrow from '../assets/pictures/Arrow.png';

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
                                <p className='margin_0'>Get it on</p>
                                <p className='text_bold margin_0'>Google Play</p>
                            </div>
                        </button>
                        <button className='row alignitem_center'>
                            <img src={appStore} alt='logo app store' />
                            <div>
                                <p className='margin_0'>Get it on</p>
                                <p className='text_bold margin_0'>App Store</p>
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
                            <h3 className='margin_0'>Couturiers</h3>
                            <p>Ils réparent et transforment tous vos textiles, des simples ourlets. Tout est possible, du dressing à la déco d'intérieur.</p>
                        </article>
                        <article className='column card'>
                            <h3 className='margin_0'>Cordonniers</h3>
                            <p>Ils préviennent l'usure et restaurent vos chaussures, prolongeant ainsi leur durée de vie pas à pas.</p>
                        </article>
                        <article className='column card'>
                            <h3 className='margin_0'>Maroquiniers</h3>
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
        </main>
    )
}


export default LandingPage;