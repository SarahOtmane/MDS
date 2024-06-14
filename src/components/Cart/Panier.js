import { useEffect, useState } from 'react';

import Titre from '../Titre';
import Command from '../sections/Command';
import CommandRecap from '../sections/CommandRecap';

const Panier = () => {
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
            <Titre titre="Panier" lien="/user/cart/check" classe="backGris" />
            <section>
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
                            <article className="row justifycontent_spbetween">
                                <p>Taxes :</p>
                                <p>3.00 €</p>
                            </article>
                            <hr />
                            <article className="row justifycontent_spbetween">
                                <p>Total</p>
                                <p>{total + 3} €</p>
                            </article>
                            <button className="black" onClick={}>
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
            </section>
        </main>
    );
};

export default Panier;
