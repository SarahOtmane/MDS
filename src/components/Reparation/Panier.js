import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Titre from '../Titre';
import Command from '../sections/Command';

const Panier = () => {
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

    return (
        <main>
            <Titre titre="Panier" lien="/user/reparation/panier" classe="backGris" />
            <section>
                {commands.length > 0 && 
                <div className="devis panier">
                    <h2 className="devisTitre">Panier</h2>
                    <section className="row justifycontent_spbetween">
                        <div className='column panier_command'>
                            {commands.map(command => (
                                <Command key={command.id} command={command} />
                            ))}
                        </div>
                        <section className="commandRecap column">
                            <h2>Récapitulatif du Panier</h2>
                            <article className="row justifycontent_spbetween">
                                <p>Sous Total :</p>
                                <p>{total} €</p>
                            </article>
                            <article className="row justifycontent_spbetween">
                                <p>Dépot :</p>
                                <p>Gratuit</p>
                            </article>
                            <article className='row justifycontent_spbetween'>
                                <p>TVA :</p>
                                <p>20%</p>
                            </article>
                        
                            <article className='row justifycontent_spbetween'>
                                <p>Bonus :</p>
                                <p>10%</p>
                            </article>
                        
                            <hr />
                            <article className="row justifycontent_spbetween">
                                <p>Total</p>
                                <p>{total !== 0 ? total + (total * 0.1) : 0} €</p>
                            </article>
                            <button className="black" onClick={() => {navigate('/user/reparation/paiement')}}>
                                Accéder au paiement
                                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.2896 5.49578C13.5701 5.77425 13.5701 6.22575 13.2896 6.50422L7.75414 12L6.73841 10.9916L11.766 6L6.73841 1.00845L7.75414 0L13.2896 5.49578Z" fill="#999999"/>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9972 6.71308H0.5V5.28692H12.9972V6.71308Z" fill="#999999"/>
                                </svg>
                            </button>
                            <a href="/repare">Continuer mes achats</a>
                        </section>
                    </section>
                </div>
                }

                {commands.length === 0 &&
                <article className='panier_vide'>
                    <svg width="130" height="128" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.1663 32H43.1663L37.833 40H27.1663L21.833 32H5.83301" stroke="#5C5F6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M15.033 13.627L5.83301 32.0003V48.0003C5.83301 49.4148 6.39491 50.7714 7.3951 51.7716C8.3953 52.7718 9.75185 53.3337 11.1663 53.3337H53.833C55.2475 53.3337 56.604 52.7718 57.6042 51.7716C58.6044 50.7714 59.1663 49.4148 59.1663 48.0003V32.0003L49.9663 13.627C49.5248 12.7384 48.8441 11.9906 48.0009 11.4677C47.1576 10.9448 46.1852 10.6675 45.193 10.667H19.8063C18.8141 10.6675 17.8417 10.9448 16.9985 11.4677C16.1552 11.9906 15.4745 12.7384 15.033 13.627Z" stroke="#5C5F6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>

                    <p>Votre panier est actuellement vide. Commencez a faire vos devis et donnez une seconde vie a vos vêtements.</p>

                    <button onClick={() => navigate('/')} >
                        Commencez les réparations
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.2896 5.49578C13.5701 5.77425 13.5701 6.22575 13.2896 6.50422L7.75414 12L6.73841 10.9916L11.766 6L6.73841 1.00845L7.75414 0L13.2896 5.49578Z" fill="999999"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.9972 6.71308H0.5V5.28692H12.9972V6.71308Z" fill="999999"/>
                        </svg>
                    </button>
                </article>
                }
            </section>
        </main>
    );
};

export default Panier;
