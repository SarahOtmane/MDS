import arrow from '../../assets/pictures/landingPage/Arrow.png';


const Service = () =>{
    return(
        <section className="service backRose2 row">
            <h2 className='text_uppercase'>Service d'artisans</h2>
            <div className='row'>
                <article className='column card'>
                    <h3>Couturiers</h3>
                    <p>Exprimez votre style personnel avec nos créations sur mesure et ajustements précis, réalisés par une équipe dévouée pour un résultat élégant et impeccable.</p>
                    <a href='/artisans' className='row text_bold alignitem_center'>En savoir plus <img src={arrow} alt='flèche' /> </a>
                </article>
                <article className='column card'>
                    <h3>Cordonniers</h3>
                    <p>Redonnez vie à vos chaussures préférées avec notre service de réparation et de rénovation sur mesure, assurant confort optimal et durabilité grâce à notre expertise</p>
                    <a href='/artisans' className='row text_bold alignitem_center'>En savoir plus <img src={arrow} alt='flèche' /> </a>
                </article>
                <article className='column card'>
                    <h3>Maroquiniers</h3>
                    <p>Réparation et personnalisation expertes pour des accessoires en cuir alliant qualité, fonctionnalité et esthétique</p>                   
                    <a href='/artisans' className='row text_bold alignitem_center'>En savoir plus <img src={arrow} alt='flèche' /> </a>
                </article>
            </div>
        </section>
    )
}

export default Service;