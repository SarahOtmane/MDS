import '../../css/account.css';

import AccountMenu from './AccountMenu';
import Titre from "../Titre";


const AccountPassword = () =>{
    return(
        <main>
            <Titre titre="Mon compte" lien="/my-account/update-password" classe="backGris" />
            
            <div className='row account'>
                <AccountMenu selected="motdepasse" />
                <section className='updateMdp'>
                    <form className='updateMdp column'>
                        <h2>Changer le mot de passe</h2>

                        <lable className="text_bold">Ancien mot de passe</lable>
                        <input type="password" placeholder="Mot de passe" />

                        <lable className="text_bold">Nouveau mot de passe</lable>
                        <input type="password" placeholder="Mot de passe" />

                        <lable className="text_bold">Confirmer le mot de passe</lable>
                        <input type="password" placeholder="Mot de passe" />

                        <button type='submit'>Réinitialiser le mot de passe</button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default AccountPassword;