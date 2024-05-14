import '../../css/cart.css';
import Titre from "../Titre";

import success from '../../assets/pictures/failedOrder.svg';


const FailedOrder = () =>{
    return(
        <main>
            <Titre titre="Commande échouée" lien="/user/order/failed" classe="backRose" />
            <section className='success'>
                <img src={success} alt='' />
                <h2>Oops! Il y a eu un problème</h2>
                <p>Oops! Un problème est survenu lors du traitement de votre commande. Veuillez vérifier les détails et réessayer.</p>
                <button>
                    Réorganiser
                    <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2896 5.49578C13.5701 5.77425 13.5701 6.22575 13.2896 6.50422L7.75414 12L6.73841 10.9916L11.766 6L6.73841 1.00845L7.75414 0L13.2896 5.49578Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.9972 6.71308H0.5V5.28692H12.9972V6.71308Z" fill="white"/>
                    </svg>
                </button>
            </section>
        </main>
    )
}

export default FailedOrder;