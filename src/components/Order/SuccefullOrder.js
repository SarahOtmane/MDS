import '../../css/cart.css';
import Titre from "../Titre";

import success from '../../assets/pictures/order/succefullOrder.png'
import { useNavigate } from 'react-router-dom';


const SuccefullOrder = () =>{
    const navigate = useNavigate();

    return(
        <main>
            <Titre titre="Commande réussie" lien="/user/order/success" classe="backVert" />
            <section className='success'>
                <img src={success} alt='' />
                <h2>Merci, à bientôt !</h2>
                <article>
                    <p>Votre envoie</p>
                    <ul>
                        <li>Étape 1 : Préparez votre commande avant le dépôt dans le délais imparti</li>
                        <li>Étape 2 : Déposez votre article chez l’artisan sélectionné</li>
                        <li>Étape 3 : Récupérez-le transformé et revitalisé</li>
                    </ul>
                </article>
                <button onClick={navigate('/user/my-account/order')} >
                    Accéder à mon Compte 
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.2896 5.49578C13.5701 5.77425 13.5701 6.22575 13.2896 6.50422L7.75414 12L6.73841 10.9916L11.766 6L6.73841 1.00845L7.75414 0L13.2896 5.49578Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.9972 6.71308H0.5V5.28692H12.9972V6.71308Z" fill="white"/>
                    </svg>
                </button>
            </section>
        </main>
    )
}

export default SuccefullOrder;