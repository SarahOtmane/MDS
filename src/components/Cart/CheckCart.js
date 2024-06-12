// import { useNavigate } from 'react-router-dom';

import '../../css/cart.css'
import Titre from '../Titre';

// import product from '../../assets/pictures/landingPage/product1.png';


const CheckCart = () =>{
    // const navigate = useNavigate();

    return(
        <main>
            <Titre titre="Panier" lien="/user/cart/check" classe="backGris" />

            <section className='row'>
                <div>
                    <h3>Panier</h3>
                </div>
            </section>
        </main>
    )
}

export default CheckCart;