import '../css/account.css';

import AccountMenu from './AccountMenu';
import Titre from "../Titre";


const AccountOrder = () =>{
    return(
        <main>
            <Titre titre="Mon compte" lien="/my-account" classe="backGris" />
            
            <div className='row account'>
                <AccountMenu selected="commandes" />
                <section className='commandes'>
                    <article>
                        <svg width="130" height="128" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M59.1663 32H43.1663L37.833 40H27.1663L21.833 32H5.83301" stroke="#5C5F6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.033 13.627L5.83301 32.0003V48.0003C5.83301 49.4148 6.39491 50.7714 7.3951 51.7716C8.3953 52.7718 9.75185 53.3337 11.1663 53.3337H53.833C55.2475 53.3337 56.604 52.7718 57.6042 51.7716C58.6044 50.7714 59.1663 49.4148 59.1663 48.0003V32.0003L49.9663 13.627C49.5248 12.7384 48.8441 11.9906 48.0009 11.4677C47.1576 10.9448 46.1852 10.6675 45.193 10.667H19.8063C18.8141 10.6675 17.8417 10.9448 16.9985 11.4677C16.1552 11.9906 15.4745 12.7384 15.033 13.627Z" stroke="#5C5F6A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <p>L’historique de vos commandes est en attente d’être rempli.</p>
                        
                        <button>
                            Commencez vos achats
                            <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2896 5.49578C13.5701 5.77425 13.5701 6.22575 13.2896 6.50422L7.75414 12L6.73841 10.9916L11.766 6L6.73841 1.00845L7.75414 0L13.2896 5.49578Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9972 6.71308H0.5V5.28692H12.9972V6.71308Z" fill="white"/>
                            </svg>
                        </button>
                    </article>
                </section>
            </div>
        </main>
    )
}

export default AccountOrder;