import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../axiosConfig';

import '../../../css/account.css';

import ArtisanAccountMenu from './ArtisanAccountMenu';
import Titre from "../../Titre";

const ArtisanAccountJob = () =>{
    const navigate = useNavigate();
    const [data, setData] = useState({
        job: '',
        id_artisan: 0,
        id_job: 0,
        prestations: [],
        prestaSelected: []
    });

    const [checkedItems, setCheckedItems] = useState([]);
    const [error, setError] = useState('');
    const [update, setUpdate] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const artisanResponse = await axiosInstance.get('/artisans');
                const id_job = artisanResponse.data.id_job;
                const id_artisan = artisanResponse.data.id;

                const jobResponse = await axiosInstance.get(`/jobs/id/${id_job}`);
                const jobName = jobResponse.data.name;

                const prestationsResponse = await axiosInstance.get(`/prestations/job/${id_job}`);
                const prestations = prestationsResponse.data;

                const productsResponse = await axiosInstance.get(`products/artisan/${id_artisan}`);
                const products = productsResponse.data;
                let tab = [];
                for(const product of products){
                    tab.push({
                        id: product.id_prestation,
                        price: product.price
                    })
                }

                console.log(tab);

                setData({
                    job: jobName,
                    id_artisan: id_artisan,
                    id_job: id_job,
                    prestations: prestations,
                });
                setCheckedItems(tab);
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
                        console.error('Erreur lors de la récupération des données:', error);
                }
            }
        };

        fetchData();
    }, [navigate]);

    const checkboxChange = (prestaId) => {
        setCheckedItems(prevState => {
            const index = prevState.findIndex(item => item.id === prestaId);
            if (index !== -1) {
                return prevState.filter(item => item.id !== prestaId);
            } else {
                return [...prevState, { id: prestaId, price: '' }];
            }
        });
    };

    const inputChange = (e, prestaId) => {
        const { value } = e.target;
        setCheckedItems(prevState => 
            prevState.map(item =>
                item.id === prestaId ? { ...item, price: value } : item
            )
        );
    };
    
    const submit = async() => {
        setError('');
        if(checkedItems.length === 0){
            setError('Vous n\'avez rien séléctionné');
            return
        }

        const noPrice = checkedItems.find(item => item.price === '');

        if(noPrice){
            setError('Vous n\'avez pas renseigné un prix');
            return
        }

        try {
            //on recupere tous les produits lié à un artisan 
            const productsResponse = await axiosInstance.get(`products/artisan/${data.id_artisan}`);
            const products = productsResponse.data;

            //on parcours le tableau des presta selectionne: checkedItems
                //si la presta selectionne existe dans le tableau des products alors on doit la mettre a jour
                //sinon il faut la créee, pour le creer on doit recup le nom de la presta et pour ca faut aller dans le tableau data
            
            //on parcours le tableau des produits
                //si la presta du produit na pas ete selectionne alors on le supp de la bdd
            for(let i = 0; i < checkedItems.length; i++){
                const prestation = checkedItems[i]
                const existingProduct = products.find(product => product.id_prestation === prestation.id);

                if(existingProduct){
                    await axiosInstance.put(`/products/${existingProduct.id}`,{
                        id_prestation: prestation.id,
                        price: prestation.price
                    });
                }else{
                    const prestaBdd = data.prestations.find(presta => presta.id === prestation.id);
                    await axiosInstance.post(`/products`, {
                        price: prestation.price,
                        reparationType: prestaBdd.reparationType
                    });
                }
            }

            for(let i = 0; i < products.length; i++){
                const product = products[i];
                const existingPresta = checkedItems.find(item => item.id === product.id_prestation);

                if(!existingPresta) await axiosInstance.delete(`/products/${product.id}`);
            }

            setUpdate('Changements validés');
            
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
                        console.error('Erreur lors de la récupération des données:', error);
                }
        }
    };

    return(
        <main>
            <Titre titre="Mon compte artisan" lien="/user/my-account/adress" classe="backGris" />
            <div className='row account'>
                <ArtisanAccountMenu selected="job" />
                <section className='artisanJobs'>
                    <h2>Métier</h2>
                    <p>Vous avez choisi votre domaine d’expertise.</p>
                    <p>Sélectionnez vos compétences</p>
                    <span className='text_capitalize'>{data.job}</span>
                    <div>
                        <h2>Expertises</h2>

                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Catégories</th>
                                    <th>Prix admin</th>
                                    <th>Prix</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.prestations.map((presta) => {
                                    const isChecked = checkedItems.some(item => item.id === presta.id);
                                    const price = checkedItems.find(item => item.id === presta.id)?.price || '';

                                    return (
                                        <tr key={presta.id}>
                                            <td>
                                                <input
                                                    type="checkbox"
                                                    id={`checkbox-${presta.id}`}
                                                    className="checkbox"
                                                    checked={isChecked}
                                                    onChange={() => checkboxChange(presta.id)}
                                                />
                                                <label htmlFor={`checkbox-${presta.id}`} className="custom-checkbox"></label>
                                            </td>
                                            <th>{presta.reparationType}</th>
                                            <th>{presta.priceSuggested}</th>
                                            <th className='price'>
                                                {isChecked ? (
                                                    <input
                                                        type="number"
                                                        value={price}
                                                        onChange={(e) => inputChange(e, presta.id)}
                                                    />
                                                ) : ''}
                                            </th>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    {error && <p style={{color: 'red', fontSize:'1.3rem'}}>{error}</p>}
                    {update && <p style={{color: 'green', fontSize:'1.3rem'}}>{update}</p>}
                    <button className='blakc' onClick={submit}> Valider </button>
                </section>
            </div>
        </main>
    )
}

export default ArtisanAccountJob;
