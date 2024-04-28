import '../css/account.css';

import AccountMenu from './AccountMenu';
import Titre from "./Titre";


const AccountAdress = () =>{
    return(
        <main>
            <Titre titre="Mon compte" lien="/my-account/details" classe="backGris" />
            
            <div className='row account'>
                <AccountMenu selected="details" />
                <section className='details'>
                    <form className='details column'>
                        <h2>Changer le mot de passe</h2>

                        <lable className="text_bold">Nom</lable>
                        <input type="text" placeholder="Cruz" />

                        <lable className="text_bold">Prénom</lable>
                        <input type="text" placeholder="Tom" />

                        <lable className="text_bold">Email</lable>
                        <input type="email" placeholder="test@gmail.com" />

                        <button type='submit'>Sauvegarder les modifications</button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default AccountAdress;