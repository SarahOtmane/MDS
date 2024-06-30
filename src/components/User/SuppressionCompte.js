import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance, { removeToken } from '../../service/axiosConfig';

import '../../css/account.css';

import Titre from "../Titre";
import ArtisanAccountMenu from "../Artisan/Account/ArtisanAccountMenu";
import AccountMenu from "./Account/AccountMenu";

const SuppressionCompte = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('');

    useEffect(() => {
        const roleStorage = localStorage.getItem('role');
        if (roleStorage) {
            setRole(roleStorage);
        }
    }, []);

    const deleteAccount = async () => {
        try {
            if (role === 'artisan') {
                await axiosInstance.delete('/artisans');
            } else {
                await axiosInstance.delete('/users');
            }
            removeToken();
            localStorage.removeItem('role');
            localStorage.removeItem('command');
            navigate('/');
        } catch (error) {
            console.error('Erreur: ', error);
        }
    };

    return (
        <main>
            <Titre titre={`Mon compte ${role}`} lien="suppression" classe="backGris" />
            {role === 'artisan' && (
                <div className="row account">
                    <ArtisanAccountMenu selected="suppression" />
                    <section className="suppression">
                        <div className="column">
                            <h2>Supprimer mon compte</h2>
                            <p>Pour demander la suppression de votre compte, veuillez confirmer votre intention en répondant à ce message.</p>
                            <p>Cette action entraînera la suppression permanente de toutes vos données personnelles associées à ce compte et ne pourra pas être annulée une fois effectuée. Assurez-vous de sauvegarder toute information que vous souhaitez conserver avant de procéder. Nous avons besoin de votre confirmation pour éviter toute suppression accidentelle.</p>
                            <button className="white" onClick={() => navigate('/artisan/my-account/details')}>Annuler la suppression du compte</button>
                            <button className="black" onClick={deleteAccount}>Supprimer mon compte</button>
                        </div>
                    </section>
                </div>
            )}
            {role === 'user' && (
                <div className="row account">
                    <AccountMenu selected="suppression" />
                    <section className="suppression">
                        <div className="column">
                            <h2>Supprimer mon compte</h2>
                            <p>Pour demander la suppression de votre compte, veuillez confirmer votre intention en répondant à ce message.</p>
                            <p>Cette action entraînera la suppression permanente de toutes vos données personnelles associées à ce compte et ne pourra pas être annulée une fois effectuée. Assurez-vous de sauvegarder toute information que vous souhaitez conserver avant de procéder. Nous avons besoin de votre confirmation pour éviter toute suppression accidentelle.</p>
                            <button className="white" onClick={() => navigate('/user/my-account/details')}>Annuler la suppression du compte</button>
                            <button className="black" onClick={deleteAccount}>Supprimer mon compte</button>
                        </div>
                    </section>
                </div>
            )}
        </main>
    );
};

export default SuppressionCompte;
