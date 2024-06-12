
import { useNavigate } from "react-router-dom";


const Panier = ({setOpenPopupP}) =>{
    const navigate = useNavigate();
    const connexion = () =>{
        navigate('/user/login')
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        setOpenPopupP(false)
    }

    return(
        <section className="popup">
            <h2>Connexion</h2>
            <p>Vous êtes connecté en tant qu'artisan !</p>
            <p>Connectez vous à votre compte utilisateur pour avoir accès au panier</p>
            <button onClick={connexion}>
                <span>Connexion</span>
                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0221 6.08171C13.3025 6.36019 13.3025 6.81169 13.0221 7.09016L7.48657 12.5859L6.47083 11.5775L11.4985 6.58594L6.47083 1.59438L7.48657 0.585938L13.0221 6.08171Z" fill="#999999"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7297 7.29902H0.232422V5.87286H12.7297V7.29902Z" fill="#999999"/>
                </svg>
            </button>
        </section>
    )
}

export default Panier;