import { useState } from 'react';
import product from '../../assets/pictures/landingPage/product1.png';

const Command = ({ command }) => {
    const [deleteC, setDeleteC] = useState(false);

    const deleteCommand = () => {
        let commandStorage = localStorage.getItem('command');
        if (commandStorage) {
            commandStorage = JSON.parse(commandStorage);
            commandStorage = commandStorage.filter(c => c.id !== command.id);
            if (commandStorage.length > 0) {
                localStorage.setItem('command', JSON.stringify(commandStorage));
            } else {
                localStorage.removeItem('command');
            }
            setDeleteC(true);
        }
    };

    return (
        <article className={`command ${deleteC ? 'delete' : ''}`}>
            <div className='row justifycontent_spbetween alignitem_center'>
                <img src={product} alt='produit' />
                <div className="column">
                    <p>{command.categorie} <span>&rsaquo;</span> {command.clotheType} </p>
                    <p className='text_capitalize'>{command.besoinType} <span>&rsaquo;</span> {command.reparationType ? command.reparationType : command.broderieType} </p>
                    <p className='price'>{command.price} €</p>
                </div>
                <p>{command.price} €</p>
                <svg onClick={deleteCommand} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 5L5 15" stroke="#1E1E1E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 5L15 15" stroke="#1E1E1E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </article>
    );
};

export default Command;
