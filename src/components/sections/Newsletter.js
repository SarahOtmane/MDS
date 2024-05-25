




const Newsletter = () =>{
    return(
        <section className="newsletter column backGris">
            <article className="row">
                <div>
                    <h3 className="text_capitalize">abonnez vous à notre newsletter</h3>
                    <span>Nous aimons vous surprendre avec des cadeaux occasionnels.</span>
                </div>

                <form className="row">
                    <input placeholder="Votre e-mail" />
                    <button>S'inscrire</button>
                </form>
            </article>
        </section>
    )
}

export default Newsletter;