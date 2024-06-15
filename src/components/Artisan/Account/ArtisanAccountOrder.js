import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../axiosConfig';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';

import '../../../css/account.css';

import ArtisanAccountMenu from './ArtisanAccountMenu';
import Titre from "../../Titre";

import product from '../../../assets/pictures/landingPage/product3.png';

// Custom styled Select component
const CustomSelect = styled(Select)(({ theme }) => ({
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
}));

const ArtisanAccountOrder = () => {
    const navigate = useNavigate();
    const [commands, setCommands] = useState([]);

    useEffect(() => {
        const getCommands = async () => {
            try {
                const commandsResponse = await axiosInstance.get(`commands`);
                let commandData = commandsResponse.data;

                for (const command of commandData) {
                    const responseCloth = await axiosInstance.get(`/clothes/${command.id_cloth}`);
                    command.cloth = responseCloth.data;

                    const responseProduct = await axiosInstance.get(`/products/${command.id_product}`);
                    command.product = responseProduct.data;
                }

                setCommands(commandData);
            } catch (error) {
                const status = error.response ? error.response.status : 500;
                switch (status) {
                    case 401:
                        navigate('/error401');
                        break;
                    case 403:
                        navigate('/error403');
                        break;
                    case 404:
                        navigate('/error404');
                        break;
                    case 500:
                        navigate('/error500');
                        break;
                    default:
                        console.error('Erreur lors de l\'enregistrement de l\'utilisateur:', error);
                }
            }
        };

        getCommands();
    }, [navigate]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'd MMMM yyyy', { locale: fr });
    };

    const countPrice = (prix) => {
        let newPrice = parseInt(prix) + parseInt(prix * 0.1);
        newPrice = newPrice - parseInt(prix * 0.25);
        return newPrice.toFixed(2);
    };

    return (
        <main>
            <Titre titre="Mon compte artisan" lien="/artisan/my-account/update-password" classe="backGris" />
            <div className='row account'>
                <ArtisanAccountMenu selected="commandes" />
                {commands.length > 0 ? (
                    <section className='commandes commandesArtisan'>
                        <div className='column contenu'>
                            <table>
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Commande</th>
                                        <th>Date</th>
                                        <th>Total</th>
                                        <th>Statut</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {commands.map(command => (
                                        <tr key={command.id}>
                                            <td> <img src={command.picture ? command.picture : product} alt={command.name} /> </td>
                                            <th> {command.cloth.categorie} : {command.cloth.clothType} </th>
                                            <th> {formatDate(command.createdAt)} </th>
                                            <th> {countPrice(command.product.price)} €</th>
                                            <th>
                                                <FormControl variant="outlined" sx={{ minWidth: 120 }}>
                                                    <CustomSelect
                                                        defaultValue={command.dateFinished ? 'Terminé' : 'En cours'}
                                                    >
                                                        <MenuItem
                                                        sx={{
                                                            '&.Mui-selected': {
                                                                backgroundColor: '#FFDBE8 !important', 
                                                            },
                                                        }}
                                                        value="En cours">En cours</MenuItem>
                                                        <MenuItem
                                                        sx={{
                                                            '&.Mui-selected': {
                                                                backgroundColor: '#FFDBE8 !important', 
                                                            },
                                                        }}
                                                        value="Terminé">Terminé</MenuItem>
                                                        <MenuItem
                                                        sx={{
                                                            '&.Mui-selected': {
                                                                backgroundColor: '#FFDBE8 !important', 
                                                            },
                                                        }}
                                                        value="Supprimer">Supprimer</MenuItem>
                                                    </CustomSelect>
                                                </FormControl>
                                            </th>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>
                ) : (
                    <section className='commandes'>
                        <article className='vide'>
                            <svg width="130" height="128" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M59.1663 32H43.1663L37.833 40H27.1663L21.833 32H5.83301" stroke="#5C5F6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M15.033 13.627L5.83301 32.0003V48.0003C5.83301 49.4148 6.39491 50.7714 7.3951 51.7716C8.3953 52.7718 9.75185 53.3337 11.1663 53.3337H53.833C55.2475 53.3337 56.604 52.7718 57.6042 51.7716C58.6044 50.7714 59.1663 49.4148 59.1663 48.0003V32.0003L49.9663 13.627C49.5248 12.7384 48.8441 11.9906 48.0009 11.4677C47.1576 10.9448 46.1852 10.6675 45.193 10.667H19.8063C18.8141 10.6675 17.8417 10.9448 16.9985 11.4677C16.1552 11.9906 15.4745 12.7384 15.033 13.627Z" stroke="#5C5F6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                            <p>L’historique de vos réparations est en attente d’être rempli.</p>
                        </article>
                    </section>
                )}
            </div>
        </main>
    );
}

export default ArtisanAccountOrder;
