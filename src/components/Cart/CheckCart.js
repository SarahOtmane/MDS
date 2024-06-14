import { useEffect, useState } from 'react';
import '../../css/cart.css'

import Titre from '../Titre';
import Command from '../sections/Command';
import CommandRecap from '../sections/CommandRecap';

// import product from '../../assets/pictures/landingPage/product1.png';


const CheckCart = () =>{
    const [commands, setCommands] = useState([]);

    useEffect(() =>{
        const getCommand = () =>{
            const command = localStorage.getItem('command');
            setCommands(command);
        }

        getCommand();
    }, [])

    return(
        <main>
            <Titre titre="Panier" lien="/user/cart/check" classe="backGris" />

            <section>
            <div className="devis">
                <h2 className="devisTitre">Votre devis</h2>
                <section className="row justifycontent_spbetween">
                    <div className='column'>
                        {commands.map(command =>(
                            <Command key={command.id} command={command} />
                        ))}
                    </div>
                    <CommandRecap name='panier' />
                </section>
            </div>
            </section>
        </main>
    )
}

export default CheckCart;