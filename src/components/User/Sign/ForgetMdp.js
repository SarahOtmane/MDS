import '../../../css/sign.css';
import Titre from "../../Titre.js";

const ForgetMdp = () =>{
    return(
        <main>
            <Titre titre="Mot de passe oublié" lien="/user/password/forget" classe="backGris" />

            <form className='formulaire column'>
                <p>Veuillez saisir l'adresse e-mail associée à votre compte. Nous vous enverrons rapidement un lien pour réinitialiser votre mot de passe.</p>

                <lable className="text_bold">Email</lable>
                <input type="text" placeholder="email@gmail.com" />
                
                <button type='submit'>Envoyer le lien</button>
            </form>
        </main>
    )
}

export default ForgetMdp;