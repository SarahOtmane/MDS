import '../../css/sign.css';
import Titre from "../Titre.js";

const ResetMdp = () =>{
    return(
        <main>
            <Titre titre="Réinitialiser le mot de passe" lien="/resetMdp/reset" classe="backGris" />

            <form className='formulaire column'>
                <lable className="text_bold">Nouveau mot de passe</lable>
                <input type="password" placeholder="Mot de passe" />

                <lable className="text_bold">Confirmer le mot de passe</lable>
                <input type="password" placeholder="Mot de passe" />
                
                <button type='submit'>Réinitialiser le mot de passe</button>
            </form>
        </main>
    )
}

export default ResetMdp;