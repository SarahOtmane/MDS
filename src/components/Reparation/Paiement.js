import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosInstance from '../../axiosConfig';

import '../../css/cart.css';
import Titre from '../Titre';

import product from '../../assets/pictures/landingPage/product1.png';
import visa from '../../assets/pictures/order/visa.svg';
import amex from '../../assets/pictures/order/amex.svg';
import cb from '../../assets/pictures/order/cb.svg';

const Paiement = () => {
    const navigate = useNavigate();
    const [commands, setCommands] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const getCommand = () => {
            const command = localStorage.getItem('command');
            if (command) {
                const parsedCommands = JSON.parse(command);
                setCommands(parsedCommands);

                let somme = 0;
                for (const c of parsedCommands) {
                    somme += parseInt(c.price);
                }
                setTotal(somme);
            }
        };

        getCommand();
    }, []);

    const submitForm = async() =>{
        try {
            for(const command of commands){
                await axiosInstance.post(`/commands/${command.id_artisan}`, {
                    categorie: command.categorie,
                    clothType: command.clotheType,
                    id_job: command.id_job,
                    reparationType: command.reparationType,
                    comment: command.comment,
                    picture: command.picture.name ? command.picture.name : '',
                    name: command.id
                });
            }
            localStorage.removeItem('command');
            navigate('/user/order/success');
        } catch (error) {
            navigate('/user/order/failed');
        }
    }

    return (
        <main>
            <Titre titre="Paiement" lien="/user/reparation/paiement" classe="backGris" />

            <form className='row paiement' onSubmit={(e) => e.preventDefault()}>
                <section className='livraison column'>
                    <h2>Paiement</h2>

                    <label className="text_bold">Numéro de carte</label>
                    <div className='numCarte'>
                        <input type="text" />
                        <figure className='row'>
                            <img src={cb} alt='logo cb' />
                            <img src={amex} alt='logo amex' />
                            <img src={visa} alt='logo visa' />
                        </figure>
                    </div>

                    <div className='row double justifycontent_spbetween'>
                        <div className='column'>
                            <label className="text_bold">Date d'expiration</label>
                            <input type="text" placeholder="MM/YY" />
                        </div>

                        <div className='column'>
                            <label className="text_bold">CVC</label>
                            <input type="text" placeholder="CVC" />
                        </div>
                    </div>

                    <div className='row double justifycontent_spbetween'>
                        <div className='column'>
                            <label className="text_bold">Pays</label>
                            <input type="text" placeholder="Pays" />
                        </div>

                        <div className='column'>
                            <label className="text_bold">Code promo</label>
                            <input type="text" placeholder="Code promo" />
                        </div>
                    </div>
                </section>

                <section className='commande'>
                    <h2>Votre commande</h2>
                    <article className='row alignitem_center justifycontent_spbetween'>
                        <figure>
                            {commands.map(command =>(
                                <img src={product} alt='produit' key={command.id} />
                            ))}
                        </figure>

                        <button className='white' type="button" onClick={() => navigate('/user/reparation/panier')}>
                            Modifier
                        </button>
                    </article>

                    <section className='recap'>
                        <article className='row justifycontent_spbetween'>
                            <span>Prix :</span>
                            <span className='text_bold'>{total} €</span>
                        </article>

                        <article className='row justifycontent_spbetween'>
                            <span>Livraison :</span>
                            <span className='text_bold'>Offerte</span>
                        </article>

                        <article className='row justifycontent_spbetween'>
                            <span>TVA :</span>
                            <span className='text_bold'>20%</span>
                        </article>

                        <article className='row justifycontent_spbetween'>
                            <span>Bonus :</span>
                            <span className='text_bold'>10%</span>
                        </article>

                        <div></div>

                        <article className='row justifycontent_spbetween'>
                            <span>Total :</span>
                            <span className='text_bold'>{total !== 0 ? total + (total * 0.1) : 0} €</span>
                        </article>
                    </section>
                    <button className={`black ${commands.length > 0 ? '' : 'notAble'}`} type="button" onClick={submitForm}>
                        Procéder au paiement
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.2896 5.49578C13.5701 5.77425 13.5701 6.22575 13.2896 6.50422L7.75414 12L6.73841 10.9916L11.766 6L6.73841 1.00845L7.75414 0L13.2896 5.49578Z" fill="#999999"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.9972 6.71308H0.5V5.28692H12.9972V6.71308Z" fill="#999999"/>
                        </svg>
                    </button>
                </section>
            </form>
        </main>
    );
};

export default Paiement;
