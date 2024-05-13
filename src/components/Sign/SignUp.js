import '../../css/sign.css';
import Titre from '../Titre';


const SignUp = () =>{
    return(
        <main>
            <Titre titre="S'inscrire" lien="/register" classe="backGris" />

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
                <p>Vous avez déja un compte ? <a href='/login' className='text_bold'>Se connecter</a></p>
            </form>
        </main>
    )
}

export default SignUp;