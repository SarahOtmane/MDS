import { useState } from 'react';
import axiosInstance from '../../service/axiosConfig';
import { useNavigate } from 'react-router-dom';

const CommandRecap = ({ name, command, setCommand }) => {
    const [addToPanier, setAddToPanier] = useState(false);
    const navigate = useNavigate();

    const addPanier = async () => {
        try {
            console.log(localStorage.getItem('role'));
            if(localStorage.getItem('role') === null || localStorage.getItem('role') === 'artisan'){
                navigate('/user/login');
            }else{
                const userResponse = await axiosInstance.get('/persons/user');
                const user_id = userResponse.data.id;
                const updatedCommand = {
                    ...command,
                    id_user: user_id,
                    id: new Date().getTime()
                };
                setCommand(updatedCommand);

                let commandStorage = localStorage.getItem('command');
                if (!commandStorage) {
                    localStorage.setItem('command', JSON.stringify([updatedCommand]));
                } else {
                    commandStorage = JSON.parse(commandStorage);
                    commandStorage.push(updatedCommand);
                    localStorage.setItem('command', JSON.stringify(commandStorage));
                }
                setAddToPanier(true);
            }
        } catch (error) {
            console.error('Erreur lors de la récupération des options:', error);
        }
    };

    return (
        <section className="commandRecap column">
            {addToPanier && <p style={{ color: 'green' }}>Commande ajoutée au panier !</p>}
            <h2>Récapitulatif du {name}</h2>
            <article className="row justifycontent_spbetween">
                <p>Sous Total :</p>
                <p>{command.price} €</p>
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
                <p>{parseInt(command.price) + parseInt(command.price) * 0.2} €</p>
            </article>
            <button className="black" onClick={addPanier}>
                Ajouter au panier
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.2896 5.49578C13.5701 5.77425 13.5701 6.22575 13.2896 6.50422L7.75414 12L6.73841 10.9916L11.766 6L6.73841 1.00845L7.75414 0L13.2896 5.49578Z" fill="#999999"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.9972 6.71308H0.5V5.28692H12.9972V6.71308Z" fill="#999999"/>
                </svg>
            </button>
            <a href="/repare">Continuer mes achats</a>
        </section>
    );
};

export default CommandRecap;
