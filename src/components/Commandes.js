import '../css/account.css';
import AccountMenu from './AccountMenu';

import Titre from "./Titre";


const Commandes = () =>{
    return(
        <main>
            <Titre titre="Mon compte" lien="/my-account" classe="backRose" />
            
            <div className='row'>
                <AccountMenu />
            </div>
        </main>
    )
}

export default Commandes;