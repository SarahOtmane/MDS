import { useState } from 'react';

import product1 from '../assets/pictures/landingPage/product1.png';
import product2 from '../assets/pictures/landingPage/product2.png';
import product3 from '../assets/pictures/landingPage/product3.png';
import product4 from '../assets/pictures/landingPage/product4.png';
import starFull from  '../assets/pictures/landingPage/starFull.svg';
import starEmpty from '../assets/pictures/landingPage/starEmpty.svg';

const UserArtisan = () =>{
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
    )
}

export default UserArtisan;