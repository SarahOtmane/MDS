
//import image
import devis from '../../assets/pictures/home/devis.png';
import depot from '../../assets/pictures/home/depot.png';
import recu from '../../assets/pictures/home/recu.png';





const Etape = () =>{
    return(
        <section className="etape backRose column">
            <h3>Faites des affaires avec vos affaires</h3>
            <span>Réparez vos vêtements pour leurs offrir une seconce vie</span>
            <div className="row container">
                <article className="column">
                    <img src={devis} alt='' />
                    <div>
                        <h4>1. Obtenez un devis</h4>
                        <p>Faites votre devis en ligne pour réparer vos articles en seulement 5 minutes </p>
                    </div>
                </article>
                <article className="column">
                    <img src={depot} alt='' />
                    <div>
                        <h4>2. Déposez</h4>
                        <p>Vous avez 20 jours pour déposez vos vêtements/accessoires à réparer gratuitement</p>
                    </div>
                </article>
                <article className="column">
                    <img src={recu} alt='' />
                    <div>
                        <h4>3. Recevez vos réparations</h4>
                        <p>Recevez à sous 5 à 10 jours vos réparations </p>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Etape;