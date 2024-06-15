



const AbonnementForm = ({submitForm}) =>{
    return(
        <section className="abonnement">
            <div></div>
            <article className='adhesion'>
                <h4>Frais d’adhésion</h4>
                <span>24,99 € *</span>
                <p>* Montant unique pour l'inscription initiale qui peut couvrir les coûts administratifs, la création de profil, et l'accès aux outils de base du site.</p>
                <button className='black' onClick={submitForm}>Je m'inscris</button>
            </article>
        </section>
    )
}

export default AbonnementForm;