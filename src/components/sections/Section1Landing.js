import mockup from '../assets/pictures/landingPage/landing_mockup.png';
import appStore from '../assets/pictures/landingPage/appStore.svg';
import googlePlay from '../assets/pictures/landingPage/playStore.svg';
import deco1 from '../assets/pictures/picto/deco1.png';
import deco2 from '../assets/pictures/picto/deco2.png';
import button from '../assets/pictures/picto/button.png';


const Section1Landing = () =>{
    return(
        <section className="section1Landing backGris row">
            <img className='picto' id="deco1" src={deco1} alt='' />
            <img className='picto' id="deco2" src={deco2} alt='' />
            <img className='picto' id="button" src={button} alt='' />
            <article>
                <h1 className='text_uppercase'>pourquoi jeter quand on peut réparer ?</h1>
                <p>Le concept de réparation et de consommation de vêtements durables <br></br>Faites le tri dans vos habits</p>
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
    )
}

export default Section1Landing;