import image1 from '../../assets/pictures/landingPage/image1.png';
import image2 from '../../assets/pictures/landingPage/image2.png';
import image3 from '../../assets/pictures/landingPage/image3.jpeg';
import image4 from '../../assets/pictures/landingPage/image4.png';
import loupe from '../../assets/pictures/landingPage/loupe.svg';
import check from '../../assets/pictures/landingPage/check.svg';
import send from '../../assets/pictures/landingPage/send.svg';
import ok from '../../assets/pictures/landingPage/ok.svg';
import arrow from '../../assets/pictures/landingPage/Arrow.png';


const Fonctionnement = () =>{
    return(
        <section className='fonctionnement row alignitem_center justifycontent_spbetween'>
            <img className='picto' id="image4" src={image4} alt='' />
            <article>
                <span className='text_bold textGreen expe'>Expérience</span>
                <h2 className='text_uppercase'>Comment ça marche ?</h2>
                <p className='row'> <img src={loupe} alt="icone svg" /> Réalisez votre diagnostic.</p>
                <p className='row'> <img src={check} alt="icone svg" /> Validez le devis final.</p>
                <p className='row'> <img src={send} alt="icone svg" /> Envoyez vos articles.</p>
                <p className='row'> <img src={ok} alt="icone svg" /> Réceptionnez vos vêtements sous 5 à 10 jours.</p>
                <a href='/' className='row text_bold alignitem_center'>En savoir plus <img src={arrow} alt='flèche' /> </a>
            </article>
            <figure className='column twoImages'>
                <img src={image2} alt='une machine à coudre ' />
                <img src={image1} alt='une personne qui est entrain de coudre ' />
            </figure>
            <figure className='column'>
                <img src={image3} alt='un mannequin ' />
            </figure>
        </section>
    )
}

export default Fonctionnement;