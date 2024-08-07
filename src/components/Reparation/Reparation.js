import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/reparation.css';
import axiosInstance from '../../service/axiosConfig';
import xss from 'xss';

import Titre from "./Titre";
import SelectLabel from './SelectLabel';
import Newsletter from "../sections/Newsletter";

import reparation from '../../assets/pictures/reparation.png';

const Reparation = ({ command, setCommand }) => {
    const navigate = useNavigate();

    const updateComment = (e) => {
        setCommand({
            ...command,
            comment: xss(e.target.value)
        });
    };

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

    const submitForm = async (e) => {
        e.preventDefault();

        try {
            const productResponse = await axiosInstance.get(`/products/${command.id_artisan}/${command.id_presta}`);
            const price = productResponse.data.price;

            setCommand({
                ...command,
                price: parseInt(price)
            });
            navigate('/user/reparation/image');
        } catch (error) {
            console.error('Erreur lors de la récupération des options:', error);
        }
    };

    return (
        <main className="couture">
            <Titre titre={command.job} lien="/user/reparation/details" />
            <section className='loading column'>
                <p>1/2 Votre réparation</p>
                <div className="progress-bar">
                    <div className="green"></div>
                    <div className="black"></div>
                </div>
            </section>
            <section className="couture__contenu row justifycontent_spbetween">
                <img className='repa' src={reparation} alt='' />
                <form className='column' onSubmit={submitForm}>
                    <SelectLabel 
                        command={command} setCommand={setCommand}
                        name='categorie' label='Quelle est la catégorie ?'
                    />

                    <SelectLabel 
                        command={command} setCommand={setCommand}
                        name='clotheType' label='Quel est le type de vêtements ?'
                    />

                    <SelectLabel 
                        command={command} setCommand={setCommand}
                        name='besoinType' label='Quel est votre besoin ?'
                    />
                    {command.besoinType !== 'personnalisation' && (
                        <SelectLabel 
                            command={command} setCommand={setCommand}
                            name='reparationType' label='Quelle est la réparation ?'
                        />
                    )}

                    {command.besoinType === 'personnalisation' && (
                        <div className='broderie row justifycontent_spbetween'>
                            <div className='child'>
                                <SelectLabel 
                                    command={command} setCommand={setCommand}
                                    name='broderieType' label='Quel type de broderie ?'
                                />
                            </div>
                            <div className='child'>
                                <SelectLabel 
                                    command={command} setCommand={setCommand}
                                    name='fontSize' label='Taille de la police'
                                />
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
