import mockup from '../assets/pictures/landing_mockup.png';
import appStore from '../assets/pictures/appStore.svg';
import googlePlay from '../assets/pictures/playStore.svg';

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
        </main>
    )
}


export default LandingPage;