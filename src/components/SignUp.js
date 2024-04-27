import '../css/signUp.css';


const SignUp = () =>{
    return(
        <main>
            <section className='titre backGris'>
                <h1>S'inscrire</h1>
                <article className="row alignitem_center">
                    <a href="/landing">RenoWear</a>
                    <svg width="12" height="26" viewBox="0 0 6 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.81168 5.96731C6.06095 6.24435 6.06303 6.69578 5.81633 6.97571L0.948585 12.5L0.0460425 11.4967L4.46723 6.47935L0 1.51366L0.89321 0.5L5.81168 5.96731Z" fill="#71747E"/>
                    </svg>
                    <a href="/" className='text_bold'>S'inscrire</a>
                </article>
            </section>

            <form className='formulaire column'>
                <lable className="text_bold">Nom</lable>
                <input type="text" placeholder="Cruz" />

                <lable className="text_bold">Prénom</lable>
                <input type="text" placeholder="Tom" />

                <lable className="text_bold">Email</lable>
                <input type="text" placeholder="email@gmail.com" />

                <lable className="text_bold">Mot de passe</lable>
                <input type="password" placeholder="Mot de passe" />

                <lable className="text_bold">Téléphone</lable>
                <input type="tel" pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" placeholder="06 36 46 79 12" />

                <p>En créant un compte, vous acceptez nos conditions d'utilisations et notre politique de confidentialité</p>

                <button type='submit'>Créer un compte</button>
                <p>Vous avez déja un compte ? <a href='/login'>Se connecter</a></p>
            </form>
        </main>
    )
}

export default SignUp;