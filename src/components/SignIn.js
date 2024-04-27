import '../css/sign.css';


const SignIn = () =>{
    return(
        <main>
            <section className='titre backGris'>
                <h1>Se connecter</h1>
                <article className="row alignitem_center">
                    <a href="/landing">RenoWear</a>
                    <svg width="12" height="26" viewBox="0 0 6 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.81168 5.96731C6.06095 6.24435 6.06303 6.69578 5.81633 6.97571L0.948585 12.5L0.0460425 11.4967L4.46723 6.47935L0 1.51366L0.89321 0.5L5.81168 5.96731Z" fill="#71747E"/>
                    </svg>
                    <a href="/" className='text_bold'>Se connecter</a>
                </article>
            </section>

            <form className='formulaire column'>
                <lable className="text_bold">Email</lable>
                <input type="text" placeholder="email@gmail.com" />

                <lable className="text_bold">Mot de passe</lable>
                <input type="password" placeholder="Mot de passe" />

                <a href='/mdpOublie'> Mot de passe oublié ?</a>

                <button type='submit'>Se connecter</button>
                <p>Vous n'avez pas de compte ? <a href='/register' className='text_bold'>S'inscrire</a></p>
            </form>
        </main>
    )
}

export default SignIn;