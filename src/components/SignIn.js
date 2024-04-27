import '../css/sign.css';
import Titre from './Titre';


const SignIn = () =>{
    return(
        <main>
            <Titre titre="Se connecter" lien="/login" />

            <form className='formulaire column'>
                <lable className="text_bold">Email</lable>
                <input type="text" placeholder="email@gmail.com" />

                <lable className="text_bold">Mot de passe</lable>
                <input type="password" placeholder="Mot de passe" />

                <a href='/resetMdp'> Mot de passe oublié ?</a>

                <button type='submit'>Se connecter</button>
                <p>Vous n'avez pas de compte ? <a href='/register' className='text_bold'>S'inscrire</a></p>
            </form>
        </main>
    )
}

export default SignIn;