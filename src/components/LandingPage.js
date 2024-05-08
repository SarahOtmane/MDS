import { useState } from 'react';

import '../css/landingPage.css';

//import images
    //section1
import mockup from '../assets/pictures/landingPage/landing_mockup.png';
import appStore from '../assets/pictures/landingPage/appStore.svg';
import googlePlay from '../assets/pictures/landingPage/playStore.svg';
    //section2
import arrow from '../assets/pictures/landingPage/Arrow.png';
import loupe from '../assets/pictures/landingPage/loupe.svg';
import check from '../assets/pictures/landingPage/check.svg';
import send from '../assets/pictures/landingPage/send.svg';
import ok from '../assets/pictures/landingPage/ok.svg';
import pelote from '../assets/pictures/picto/pelote.png';
import bobine from '../assets/pictures/picto/bobine.png';
import ciseaux from '../assets/pictures/picto/ciseaux.png';
import aiguilles from '../assets/pictures/picto/aiguilles.png';
import pince from '../assets/pictures/picto/pince.png';
    //section3
import image1 from '../assets/pictures/landingPage/image1.png';
import image2 from '../assets/pictures/landingPage/image2.png';
import image3 from '../assets/pictures/landingPage/image3.jpeg';
import image4 from '../assets/pictures/landingPage/image4.png';
import machine from '../assets/pictures/picto/machine.png';
import ceintre from '../assets/pictures/picto/ceintre.png';
import picto_Section4 from '../assets/pictures/picto/picto_section4.png';
    //section4
import particulier from '../assets/pictures/landingPage/particuliers.png';
import artisan from '../assets/pictures/landingPage/artisans.png';
    //section6
import product1 from '../assets/pictures/landingPage/product1.png';
import product2 from '../assets/pictures/landingPage/product2.png';
import product3 from '../assets/pictures/landingPage/product3.png';
import product4 from '../assets/pictures/landingPage/product4.png';
import starFull from  '../assets/pictures/landingPage/starFull.svg';
import starEmpty from '../assets/pictures/landingPage/starEmpty.svg';
    //section7
import reparer from '../assets/pictures/landingPage/reparer.png';
    //section8
import mobileMockup from '../assets/pictures/landingPage/mobile_mockup.png';
import appStoreWhite from '../assets/pictures/landingPage/appStoreWhite.svg';



const LandingPage = () =>{
    const [btnSelected, setBtnSelected] = useState('couture');
    const testimonialsTabs= [{
        id : 1,
        pic : product1,
        text : "“Très pratique et très satisfaite du travail effectué par l'artisan”",
        stars : 4,
        type : 'couture'
    },{
        id : 2,
        pic : product2,
        text : "“Rapide, efficace, beau travail pour un prix raisonnable.”",
        stars : 3,
        type : 'couture'
    },{
        id : 3,
        pic : product3,
        text : "“Service très rapide et de très grande qualité.”",
        stars : 3,
        type : 'couture'
    },{
        id : 4,
        pic : product4,
        text : "“Très bien, avec un travail sérieux. Je recommande !”",
        stars : 4,
        type : 'couture'
    },{
        id : 5,
        pic : product2,
        text : "“Rapide, efficace, beau travail pour un prix raisonnable.”",
        stars : 4,
        type : 'broderie'
    },{
        id : 6,
        pic : product1,
        text : "“Très pratique et très satisfaite du travail effectué par l'artisan”",
        stars : 3,
        type : 'broderie'
    },{
        id : 7,
        pic : product4,
        text : "“Très bien, avec un travail sérieux. Je recommande !”",
        stars : 4,
        type : 'broderie'
    },{
        id : 8,
        pic : product3,
        text : "“Service très rapide et de très grande qualité.”",
        stars : 4,
        type : 'maroquinerie'
    },{
        id : 9,
        pic : product2,
        text : "“Rapide, efficace, beau travail pour un prix raisonnable.”",
        stars : 4,
        type : 'maroquinerie'
    },{
        id : 10,
        pic : product1,
        text : "“Très pratique et très satisfaite du travail effectué par l'artisan”",
        stars : 3,
        type : 'maroquinerie'
    },]

    const handleClick = (e) => { 
        setBtnSelected(e.target.id);
        
    };

    return(
        <main className="landing">
            <section className="section1 backGris row">
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

            <section className="section2 backRose2 row">
                <img className="picto" src={pelote} alt='' id="pelote" />
                <img className="picto" src={bobine} alt='' id="bobine" />
                <h2 className='text_uppercase'>Service d'artisans</h2>
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
                <img className="picto" src={ciseaux} alt='' id="ciseaux" />
                <img className="picto" src={aiguilles} alt='' id="aiguilles" />
                <img className="picto" src={pince} alt='' id="pince" />
            </section>

            <section className='section3 row alignitem_center justifycontent_spbetween'>
                <img className='picto' id="image4" src={image4} alt='' />
                <img className='picto' id="machine" src={machine} alt='' />
                <img className='picto' id="ceintre" src={ceintre} alt='' />
                <img className='picto' id="picto_Section4" src={picto_Section4} alt='' />
                <article>
                    <span className='text_bold'>Expérience</span>
                    <h2 className='text_uppercase'>Comment ça marche ?</h2>
                    <p className='row'> <img src={loupe} alt="icone svg" /> Réalisez votre diagnostic.</p>
                    <p className='row'> <img src={check} alt="icone svg" /> Validez le devis final.</p>
                    <p className='row'> <img src={send} alt="icone svg" /> Envoyez vos articles.</p>
                    <p className='row'> <img src={ok} alt="icone svg" /> Réceptionnez vos vêtements sous 5 à 10 jours.</p>

                    <a href='/' className='row text_bold alignitem_center'>En savoir plus <img src={arrow} alt='flèche' /> </a>
                </article>
                <figure className='column twoImages'>
                    <img src={image1} alt='une personne qui est entrain de coudre ' />
                    <img src={image2} alt='une machine à coudre ' />
                </figure>
                <figure className='column'>
                    <img src={image3} alt='un mannequin ' />
                </figure>
            </section>

            <section className='section4 backGris'>
                <span className='text_uppercase text_bold'>RenoWear</span>
                <h2 className='text_capitalize'>pour qui ?</h2>
                <div className='row justifycontent_spbetween'>
                    <figure>
                        <p className='text_uppercase text_bold'>Les particuliers</p>
                        <img src={particulier} alt='' />
                    </figure>
                    <figure>
                        <p className='text_uppercase text_bold'>Les artisans</p>
                        <img src={artisan} alt='' />
                    </figure>
                </div>
            </section>

            <section className='section5 row justifycontent_spbetween'>
                <h2>RenoWear c'est</h2>
                <article>
                    <p>+ 100 k</p>
                    <p>artisans</p>
                </article>
                <article>
                    <p>90 000</p>
                    <p>utilisateurs</p>
                </article>
                <article>
                    <p>200 000</p>
                    <p>articles réparés/an</p>
                </article>
            </section>

            <section className='section6'>
                <span className='text_uppercase text_bold'>ce que nos clients disent de nous</span>
                <h2 className='text_capitalize'>vos avis</h2>
                <div className=' button row'>
                    <button className={btnSelected==='couture' ? 'selected' : ''} onClick={handleClick} id="couture">Couture</button>
                    <button className={btnSelected==='broderie' ? 'selected' : ''} onClick={handleClick} id="broderie">Broderie</button>
                    <button className={btnSelected==='maroquinerie' ? 'selected' : ''} onClick={handleClick} id="maroquinerie">Maroquinerie</button>
                    <button className={btnSelected==='cordonnerie' ? 'selected' : ''} onClick={handleClick} id="cordonnerie">Cordonnerie</button>
                </div>
                <div className='row product'>
                    {testimonialsTabs
                        .filter(testimonial => testimonial.type === btnSelected)
                        .map(testimonial => <article key={testimonial.id}>
                            <img src={testimonial.pic} alt='' />
                            <p className='text_bold'>{testimonial.text}</p>
                            {testimonial.stars===5 && <figure className='row'>
                                <img src={starFull} alt='' /><img src={starFull} alt='' /><img src={starFull} alt='' />
                                <img src={starFull} alt='' /><img src={starFull} alt='' />
                            </figure>}
                            {testimonial.stars===4 && <figure className='row'>
                                <img src={starFull} alt='' /><img src={starFull} alt='' /><img src={starFull} alt='' />
                                <img src={starFull} alt='' /><img src={starEmpty} alt='' />
                            </figure>}
                            {testimonial.stars===3 && <figure className='row'>
                                <img src={starFull} alt='' /><img src={starFull} alt='' /><img src={starFull} alt='' />
                                <img src={starEmpty} alt='' /><img src={starEmpty} alt='' />
                            </figure>}
                            {testimonial.stars===2 && <figure className='row'>
                                <img src={starFull} alt='' /><img src={starFull} alt='' /><img src={starEmpty} alt='' />
                                <img src={starEmpty} alt='' /><img src={starEmpty} alt='' />
                            </figure>}
                        </article>)
                    }
                </div>
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