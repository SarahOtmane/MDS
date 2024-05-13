import '../../css/account.css';

import AccountMenu from './AccountMenu';
import Titre from "../Titre";


const AccountAdress = () =>{
    return(
        <main>
            <Titre titre="Mon compte" lien="/my-account/adress" classe="backGris" />
            
            <div className='row account'>
                <AccountMenu selected="adress" />
                <section className='adress'>
                    <form className='adress column'>
                        <h2>Adresse de livraison</h2>

                        <lable className="text_bold">Numéro de la rue</lable>
                        <input type="text" placeholder="4 Rue Solférino" />

                        <lable className="text_bold">Ville</lable>
                        <input type="text" placeholder="Boulogne-Billancourt" />

                        <div className='row double justifycontent_spbetween'>
                            <div className='column'><lable className="text_bold">Code Postal</lable>
                            <input type="text" placeholder="92100" /></div>

                            <div className='column'><lable className="text_bold">Pays</lable>
                            <input type="text" placeholder="France" /></div>
                        </div>

                        <button type='submit'>Sauvegarder les modifications</button>
                    </form>
                </section>
            </div>
        </main>
    )
}

export default AccountAdress;