import '../css/landingPage.css';
import { useState } from 'react';

    //section3
import arrow from '../assets/pictures/landingPage/Arrow.png';
import pelote from '../assets/pictures/picto/pelote.png';
import bobine from '../assets/pictures/picto/bobine.png';
import ciseaux from '../assets/pictures/picto/ciseaux.png';
import aiguilles from '../assets/pictures/picto/aiguilles.png';
import pince from '../assets/pictures/picto/pince.png';
    //section5
import product1 from '../assets/pictures/landingPage/product1.png';
import product2 from '../assets/pictures/landingPage/product2.png';
import product3 from '../assets/pictures/landingPage/product3.png';
import product4 from '../assets/pictures/landingPage/product4.png';
import starFull from  '../assets/pictures/landingPage/starFull.svg';
import starEmpty from '../assets/pictures/landingPage/starEmpty.svg';


const Home = () =>{
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
        <main className='home'>
            <section className="section3 backRose2 row">
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

            <section className='section5'>
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
        </main>
    )
}

export default Home;