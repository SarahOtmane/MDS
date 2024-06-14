



const CommandRecap = ({name}) =>{
    return(
        <section className="commandRecap column">
            <h2>Récapitulatif du {name}</h2>
            <article className="row justifycontent_spbetween">
                <p>Sous Total :</p>
                <p>90.00 €</p>
            </article>
            <article className="row justifycontent_spbetween">
                <p>Dépot :</p>
                <p>Gratuit</p>
            </article>
            <article className="row justifycontent_spbetween">
                <p>Taxes :</p>
                <p>3.00 €</p>
            </article>
            <hr></hr>
            <article className="row justifycontent_spbetween">
                <p>Total</p>
                <p>100.00 €</p>
            </article>
            <button className="black">
                Ajouter au panier 
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.2896 5.49578C13.5701 5.77425 13.5701 6.22575 13.2896 6.50422L7.75414 12L6.73841 10.9916L11.766 6L6.73841 1.00845L7.75414 0L13.2896 5.49578Z" fill="#999999"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9972 6.71308H0.5V5.28692H12.9972V6.71308Z" fill="#999999"/>
                </svg>
            </button>
            <a href="/repare">Continuer mes achats</a>
        </section>
    )
}

export default CommandRecap;