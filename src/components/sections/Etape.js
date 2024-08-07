///import image
import devis from '../../assets/pictures/acceuil/devis.svg';
import depot from '../../assets/pictures/acceuil/depot.svg';
import recu from '../../assets/pictures/acceuil/recu.svg';





const Etape = () =>{
    return(
        <section className="etape backRose2 column">
            <h3>Transformez vos affaires en opportunités.</h3>
            <span>Réparez vos vêtements pour leurs offrir une seconce vie</span>
            <div className="row container justifycontent_spbetween">
                <article className="row">
                    <img src={devis} alt='' />
                    <div>
                        <h4>1. Obtenez un devis</h4>
                        <p>Faites votre devis en ligne pour réparer vos articles en seulement 5 minutes </p>
                    </div>
                </article>
                <article className="row">
                    <img src={depot} alt='' />
                    <div>
                        <h4>2. Déposez</h4>
                        <p>Vous avez 20 jours pour déposez vos vêtements/accessoires à réparer gratuitement</p>
                    </div>
                </article>
                <article className="row">
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