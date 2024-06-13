import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/reparation.css';

import Titre from "./Titre";
import Input from "./Input";
import Newsletter from "../sections/Newsletter";

import reparation from '../../assets/pictures/reparation.png';

const Reparation = ({ command, setCommand }) => {
    const navigate = useNavigate();

    const updateComment = (e) =>{
        setCommand({
            ...command,
            comment : e.target.value
        });

        console.log(command);
    }

    const validateForm = () => {
        if (!command.categorie || !command.clotheType || !command.besoinType) {
            return false;
        }
        if (command.besoinType !== 'personnalisation' && !command.reparationType) {
            return false;
        }
        if (command.besoinType === 'personnalisation' && (!command.broderieType || !command.fontSize)) {
            return false;
        }
        return true;
    };


    return (
        <main className="couture">
            <Titre titre={command.job} lien="/user/reparation/details" />
            <section className='loading column'>
                <p>1/3 Votre réparation</p>
                <div className="progress-bar">
                    <div className="green"></div>
                    <div className="black"></div>
                </div>
            </section>
            <section className="couture__contenu row justifycontent_spbetween">
                <img className='repa' src={reparation} alt='' />
                <form className='column' onSubmit={() => navigate('/user/reparation/image')}>
                    <label>Quelle est la catégorie ?</label>
                    <Input name="categorie" command={command} setCommand={setCommand} />

                    <label>Quel est le type de vêtements ?</label>
                    <Input name="clotheType" command={command} setCommand={setCommand} />

                    <label>Quel est votre besoin ?</label>
                    <Input name="besoinType" command={command} setCommand={setCommand} />

                    {command.besoinType !== 'personnalisation' && (
                        <>
                            <label>Quelle est la réparation ?</label>
                            <Input name="reparationType" command={command} setCommand={setCommand} />
                        </>
                    )}

                    {command.besoinType === 'personnalisation' && (
                        <div className='broderie row justifycontent_spbetween'>
                            <div className='child'>
                                <label>Quel type de broderie ?</label>
                                <Input name="broderieType" command={command} setCommand={setCommand} />
                            </div>
                            <div className='child'>
                                <label>Taille de la police </label>
                                <Input name="fontSize" command={command} setCommand={setCommand} />
                            </div>
                        </div>
                    )}

                    <label>Ajouter un commentaire</label>
                    <textarea placeholder='Laissez un commentaire' rows={10} cols={40} onChange={updateComment} />

                    {!validateForm() && <p style={{color: 'red'}}> Tous les champs, sauf le commentaire, sont obligatoires</p>}
                    <button type='submit' className='row'>
                        Continuer 
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M18.2896 11.4958C18.5701 11.7743 18.5701 12.2257 18.2896 12.5042L12.7541 18L11.7384 16.9916L16.766 12L11.7384 7.00845L12.7541 6L18.2896 11.4958Z" fill="white"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M17.9972 12.7131H5.5V11.2869H17.9972V12.7131Z" fill="white"/>
                        </svg>
                    </button>
                </form>
            </section>

            <Newsletter />
        </main>
    );
};

export default Reparation;
