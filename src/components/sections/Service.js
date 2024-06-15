import arrow from '../../assets/pictures/landingPage/Arrow.png';


const Service = () =>{
    return(
        <section className="service backRose2 row">
            <h2 className='text_uppercase'>Service d'artisans</h2>
            <div className='row'>
                <article className='column card'>
                    <h3>Couturiers</h3>
                    <p>Ils réparent et transforment tous vos textiles, des simples ourlets. Tout est possible, du dressing à la déco d'intérieur.</p>
                    <a href='/artisans' className='row text_bold alignitem_center'>En savoir plus <img src={arrow} alt='flèche' /> </a>
                </article>
                <article className='column card'>
                    <h3>Cordonniers</h3>
                    <p>Ils préviennent l'usure et restaurent vos chaussures, prolongeant ainsi leur durée de vie pas à pas.</p>
                    <a href='/artisans' className='row text_bold alignitem_center'>En savoir plus <img src={arrow} alt='flèche' /> </a>
                </article>
                <article className='column card'>
                    <h3>Maroquiniers</h3>
                    <p>Ils entretiennent, réparent et revitalisent vos sacs et accessoires en cuir, offrant tout, de la nouvelle teinture à la création sur-mesure.</p>                   
                    <a href='/artisans' className='row text_bold alignitem_center'>En savoir plus <img src={arrow} alt='flèche' /> </a>
                </article>
            </div>
        </section>
    )
}

export default Service;