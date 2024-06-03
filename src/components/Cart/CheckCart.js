import { useNavigate } from 'react-router-dom';

import '../../css/cart.css'
import Titre from '../Titre';

import product from '../../assets/pictures/landingPage/product1.png';


const CheckCart = () =>{
    const navigate = useNavigate();

    return(
        <main>
            <Titre titre="Valider votre panier" lien="/user/cart/check" classe="backGris" />

            <form className='row'>
                <section className='livraison column'>
                    <h2>Adresse de livraison</h2>

                    <lable className="text_bold">Numéro de rue</lable>
                    <input type="text" placeholder="30 Rue Solférino" />

                    <lable className="text_bold">Ville</lable>
                    <input type="text" placeholder="Boulogne-Billancourt" />

                    <div className='row double justifycontent_spbetween'>
                        <div className='column'><lable className="text_bold">Code Postal</lable>
                        <input type="text" placeholder="92100" /></div>

                        <div className='column'><lable className="text_bold">Pays</lable>
                        <input type="text" placeholder="France" /></div>
                    </div>

                    <lable className="text_bold">Email</lable>
                    <input type="text" placeholder="test@gmail.com" />

                    <div className='row double justifycontent_spbetween'>
                        <div className='column'><lable className="text_bold">Nom</lable>
                        <input type="text" placeholder="Cruz" /></div>

                        <div className='column'><lable className="text_bold">Prénom</lable>
                        <input type="text" placeholder="Tom" /></div>
                    </div>
                </section>

                <section className='commande' >
                    <h2>Votre commande</h2>
                    <article className='row alignitem_center justifycontent_spbetween'>
                        <figure>
                            <img src={product} alt='' />
                            <img src={product} alt='' />
                        </figure>

                        <button onClick={navigate('/')} >Modifier</button>
                    </article>

                    <section className='recap'>
                        <article className='row justifycontent_spbetween'>
                            <span className='text_bold'>Prix :</span>
                            <span>75.00€</span>
                        </article>

                        <article className='row justifycontent_spbetween'>
                            <span className='text_bold'>Livraison :</span>
                            <span>Offerte</span>
                        </article>

                        <article className='row justifycontent_spbetween'>
                            <span className='text_bold'>Taxes :</span>
                            <span>3.00€</span>
                        </article>

                        <div></div>

                        <article className='row justifycontent_spbetween'>
                            <span className='text_bold'>Total :</span>
                            <span>78.00€</span>
                        </article>
                    </section>

                    <button type='submit'>Payer la commande</button>
                </section>
            </form>
        </main>
    )
}

export default CheckCart;