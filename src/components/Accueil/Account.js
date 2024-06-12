import { useNavigate } from "react-router-dom";


const Account = ({setOpenPopupC}) =>{
    const navigate = useNavigate();
    const connexion = (role) =>{
        if(role === 'user') navigate('/user/login')
        else if(role === 'artisan') navigate('/artisan/login')

        setOpenPopupC(false)
    }

    return(
        <section className="popup">
            <h2>Connexion</h2>
            <p>Souhaitez-vous vous connecter en tant qu'artisan ou particulier ?</p>
            <p>Merci de choisir votre mode de connexion :</p>
            <div className="row justifycontent_spbetween">
                <button onClick={() => connexion('user') }>
                    <span>Particulier</span>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0221 6.08171C13.3025 6.36019 13.3025 6.81169 13.0221 7.09016L7.48657 12.5859L6.47083 11.5775L11.4985 6.58594L6.47083 1.59438L7.48657 0.585938L13.0221 6.08171Z" fill="#999999"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7297 7.29902H0.232422V5.87286H12.7297V7.29902Z" fill="#999999"/>
                    </svg>
                </button>
                <button onClick={() => connexion('artisan')}>
                    <span>Artisan</span>
                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0221 6.08171C13.3025 6.36019 13.3025 6.81169 13.0221 7.09016L7.48657 12.5859L6.47083 11.5775L11.4985 6.58594L6.47083 1.59438L7.48657 0.585938L13.0221 6.08171Z" fill="#999999"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7297 7.29902H0.232422V5.87286H12.7297V7.29902Z" fill="#999999"/>
                    </svg>
                </button>
            </div>
        </section>
    )
}

export default Account;