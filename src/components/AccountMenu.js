


const AccountMenu = ({selected}) =>{


    return(
        <ul className="menu">
            <li><a className={`alignitem_center row ${(selected==='commandes'? 'selected' : '')}`} href='/my-account'>
                <svg width="45" height="40" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 3.5H6.38321L7.58853 15.4769C7.63862 15.8071 7.80643 16.108 8.06102 16.3243C8.31561 16.5406 8.63984 16.6576 8.97395 16.6538H17.7021C18.0042 16.6696 18.3032 16.5861 18.5534 16.4161C18.8035 16.2461 18.9912 15.9989 19.0875 15.7123L20.9302 10.1738C20.999 9.96564 21.0173 9.74406 20.9836 9.52739C20.9498 9.31072 20.865 9.10517 20.7362 8.92769C20.6021 8.73894 20.4227 8.58681 20.2146 8.48522C20.0065 8.38362 19.7761 8.33581 19.5447 8.34615H6.8681M11.5619 11.1154V13.8846M15.7182 11.1154V13.8846M17.4666 21.5C17.2829 21.5 17.1067 21.4271 16.9768 21.2972C16.8469 21.1674 16.7739 20.9913 16.7739 20.8077C16.7739 20.6241 16.8469 20.448 16.9768 20.3182C17.1067 20.1883 17.2829 20.1154 17.4666 20.1154C17.6503 20.1154 17.8265 20.1883 17.9564 20.3182C18.0863 20.448 18.1593 20.6241 18.1593 20.8077C18.1593 20.9913 18.0863 21.1674 17.9564 21.2972C17.8265 21.4271 17.6503 21.5 17.4666 21.5ZM8.46134 21.5C8.27762 21.5 8.10143 21.4271 7.97152 21.2972C7.84161 21.1674 7.76863 20.9913 7.76863 20.8077C7.76863 20.6241 7.84161 20.448 7.97152 20.3182C8.10143 20.1883 8.27762 20.1154 8.46134 20.1154C8.64506 20.1154 8.82126 20.1883 8.95116 20.3182C9.08107 20.448 9.15406 20.6241 9.15406 20.8077C9.15406 20.9913 9.08107 21.1674 8.95116 21.2972C8.82126 21.4271 8.64506 21.5 8.46134 21.5Z" stroke="#0E1422" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="text_bold">Commandes</span>
            </a></li>

            <li><a className={`alignitem_center row ${(selected==='adresses'? 'selected' : '')}`} href='/'>
                <svg width="45" height="40" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.0853 16.344V6.89276C15.0853 6.52338 14.9347 6.16912 14.6667 5.90793C14.3987 5.64674 14.0352 5.5 13.6562 5.5H4.42903C4.05002 5.5 3.68655 5.64674 3.41855 5.90793C3.15056 6.16912 3 6.52338 3 6.89276V16.1212C3 16.4906 3.15056 16.8448 3.41855 17.106C3.68655 17.3672 4.05002 17.5139 4.42903 17.5139H5.50079M21 12.0919H15.0867M19.0765 17.2535H19.5695C19.9485 17.2535 20.312 17.1067 20.58 16.8456C20.848 16.5844 20.9986 16.2301 20.9986 15.8607V11.6825L19.0079 7.70891C18.8903 7.47493 18.7077 7.27781 18.4808 7.13993C18.254 7.00206 17.992 6.92897 17.7247 6.92897H15.3425M14.2536 17.5139H10.0565M5.57225 17.5557C5.57225 18.0714 5.78242 18.5659 6.15654 18.9305C6.53066 19.2952 7.03808 19.5 7.56716 19.5C8.09625 19.5 8.60366 19.2952 8.97778 18.9305C9.3519 18.5659 9.56208 18.0714 9.56208 17.5557C9.56208 17.0401 9.3519 16.5455 8.97778 16.1809C8.60366 15.8163 8.09625 15.6114 7.56716 15.6114C7.03808 15.6114 6.53066 15.8163 6.15654 16.1809C5.78242 16.5455 5.57225 17.0401 5.57225 17.5557ZM14.628 17.5557C14.628 18.0714 14.8382 18.5659 15.2123 18.9305C15.5864 19.2952 16.0938 19.5 16.6229 19.5C17.152 19.5 17.6594 19.2952 18.0335 18.9305C18.4076 18.5659 18.6178 18.0714 18.6178 17.5557C18.6178 17.0401 18.4076 16.5455 18.0335 16.1809C17.6594 15.8163 17.152 15.6114 16.6229 15.6114C16.0938 15.6114 15.5864 15.8163 15.2123 16.1809C14.8382 16.5455 14.628 17.0401 14.628 17.5557Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="text_bold">Adresses</span>
            </a></li>

            <li><a className={`alignitem_center row ${(selected==='motdepasse'? 'selected' : '')}`} href='/my-account/update-password'>
                <svg width="45" height="40" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.9237 4.13792C18.2026 3.85897 18.6549 3.85897 18.9338 4.13792L21.791 6.99506C22.0699 7.27401 22.0699 7.72627 21.791 8.00522C21.512 8.28416 21.0598 8.28416 20.7808 8.00522L18.4287 5.65315L10.5338 13.5481C10.2549 13.827 9.80261 13.827 9.52366 13.5481C9.24472 13.2691 9.24472 12.8169 9.52366 12.5379L17.9237 4.13792Z" fill="#5C5F6A"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7092 7.35179C14.9882 7.07284 15.4404 7.07284 15.7194 7.35179L18.2194 9.85179C18.4983 10.1307 18.4983 10.583 18.2194 10.8619C17.9404 11.1409 17.4882 11.1409 17.2092 10.8619L14.7092 8.36194C14.4303 8.08299 14.4303 7.63073 14.7092 7.35179Z" fill="#5C5F6A"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2 16.0713C2 13.3099 4.23858 11.0713 7 11.0713C9.76142 11.0713 12 13.3099 12 16.0713C12 18.8328 9.76141 21.0713 7 21.0713C4.23859 21.0713 2 18.8328 2 16.0713ZM7 12.4999C5.02756 12.4999 3.42857 14.0988 3.42857 16.0713C3.42857 18.0438 5.02755 19.6427 7 19.6427C8.97245 19.6427 10.5714 18.0438 10.5714 16.0713C10.5714 14.0988 8.97244 12.4999 7 12.4999Z" fill="#5C5F6A"/>
                </svg>
                <span className="text_bold">Mot de passe</span>
            </a></li>

            <li><a className={`alignitem_center row ${(selected==='commande'? 'selected' : '')}`} href='/'>
                <svg width="45" height="40" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.03908 9C10.1988 9 11.9497 7.32107 11.9497 5.25C11.9497 3.17894 10.1988 1.5 8.03908 1.5C5.87932 1.5 4.12848 3.17894 4.12848 5.25C4.12848 7.32107 5.87932 9 8.03908 9Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 19.5V18.6869C1.01245 17.5436 1.32689 16.4219 1.91394 15.4267C2.501 14.4315 3.34151 13.5953 4.35697 12.996C5.37244 12.3968 6.52973 12.0541 7.72072 12C7.8269 11.9952 7.93305 11.9927 8.03908 11.9925C8.1451 11.9927 8.25127 11.9952 8.35745 12C9.54844 12.0541 10.7057 12.3968 11.7212 12.996C12.3051 13.3406 12.8312 13.7636 13.2845 14.25" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="text_bold">Détails du compte</span>
            </a></li>

            <li><a className={`alignitem_center row ${(selected==='commande'? 'selected' : '')}`} href='/'>
                <svg width="45" height="40" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.858 16.4999V18.7856C14.858 19.0887 14.7376 19.3794 14.5232 19.5937C14.3089 19.808 14.0182 19.9284 13.7151 19.9284H5.71512C5.41201 19.9284 5.12133 19.808 4.907 19.5937C4.69267 19.3794 4.57227 19.0887 4.57227 18.7856V6.21415C4.57227 5.91104 4.69267 5.62035 4.907 5.40602C5.12133 5.1917 5.41201 5.07129 5.71512 5.07129H13.7151C14.0182 5.07129 14.3089 5.1917 14.5232 5.40602C14.7376 5.62035 14.858 5.91104 14.858 6.21415V8.49986M11.4294 12.4999H19.4294M19.4294 12.4999L17.1437 10.2141M19.4294 12.4999L17.1437 14.7856" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span className="text_bold">Déconnexion</span>
            </a></li>
        </ul>
    )
}

export default AccountMenu;