import '../css/account.css';

import AccountMenu from './AccountMenu';
import Titre from "./Titre";


const AccountDetails = () =>{
    return(
        <main>
            <Titre titre="Mon compte" lien="/my-account/update-password" classe="backGris" />
            
            <div className='row account'>
                <AccountMenu selected="details" />
                
            </div>
        </main>
    )
}

export default AccountDetails;