import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import logo from '../assets/pictures/logo_short.svg';

import Account from "./Accueil/Account";


const Footer = ({pagesBackWhite}) =>{
    const location = useLocation();
    const isBackWhite = pagesBackWhite.includes(location.pathname);

    const navigate = useNavigate();
    const [openPopup, setOpenPopup] = useState(false);

    const account = () =>{
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        if(!token) setOpenPopup(true);
        if(role === 'user') navigate('/user/my-account/order');
        else if(role === 'artisan') navigate('artisan/my-account/order');
    }

    return(
        <footer className={isBackWhite? 'backWhite' : 'backGris'}>
            <div className={`row alignitem_center footer justifycontent_spbetween`}>
            <article>
                <a href='/'><img src={logo} alt='logo RenoWear' className='logo' /></a>
                <p>L'art du renouveau pour une mode durable.</p>
                <ul className='row alignitem_center'>
                    <li><a href="https://www.tiktok.com/@renowear">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.0408 3.76C17.9945 2.7195 17.4179 1.38324 17.4184 0H12.6888V16.5333C12.6523 17.428 12.2187 18.2755 11.4792 18.8973C10.7398 19.519 9.75222 19.8665 8.72449 19.8667C6.55102 19.8667 4.7449 18.32 4.7449 16.4C4.7449 14.1067 7.28571 12.3867 9.90306 13.0933V8.88C4.62245 8.26667 0 11.84 0 16.4C0 20.84 4.22449 24 8.70918 24C13.5153 24 17.4184 20.6 17.4184 16.4V8.01333C19.3362 9.21313 21.6388 9.85686 24 9.85333V5.73333C24 5.73333 21.1224 5.85333 19.0408 3.76Z" fill="#999999"/>
                        </svg>
                    </a></li>
                    <li><a href="https://www.instagram.com/renowear_fr/">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.9973 6.86903C9.15795 6.86903 6.86644 9.16058 6.86644 12C6.86644 14.8394 9.15795 17.131 11.9973 17.131C14.8367 17.131 17.1282 14.8394 17.1282 12C17.1282 9.16058 14.8367 6.86903 11.9973 6.86903ZM11.9973 15.3348C10.1611 15.3348 8.66262 13.8362 8.66262 12C8.66262 10.1638 10.1611 8.66525 11.9973 8.66525C13.8335 8.66525 15.332 10.1638 15.332 12C15.332 13.8362 13.8335 15.3348 11.9973 15.3348ZM17.3383 5.46308C16.6754 5.46308 16.14 5.99845 16.14 6.66139C16.14 7.32434 16.6754 7.8597 17.3383 7.8597C18.0013 7.8597 18.5366 7.32684 18.5366 6.66139C18.5368 6.50397 18.5059 6.34806 18.4458 6.20259C18.3856 6.05711 18.2974 5.92493 18.1861 5.81362C18.0748 5.70231 17.9426 5.61405 17.7971 5.5539C17.6516 5.49375 17.4957 5.46289 17.3383 5.46308ZM21.9989 12C21.9989 10.6191 22.0114 9.25064 21.9338 7.87221C21.8563 6.27113 21.4911 4.85017 20.3203 3.67938C19.147 2.50609 17.7286 2.14334 16.1275 2.06579C14.7466 1.98824 13.3782 2.00074 11.9998 2.00074C10.6189 2.00074 9.25051 1.98824 7.8721 2.06579C6.27105 2.14334 4.85012 2.50859 3.67935 3.67938C2.50608 4.85267 2.14334 6.27113 2.06579 7.87221C1.98824 9.25314 2.00074 10.6216 2.00074 12C2.00074 13.3784 1.98824 14.7494 2.06579 16.1278C2.14334 17.7289 2.50858 19.1498 3.67935 20.3206C4.85262 21.4939 6.27105 21.8567 7.8721 21.9342C9.25301 22.0118 10.6214 21.9993 11.9998 21.9993C13.3807 21.9993 14.7491 22.0118 16.1275 21.9342C17.7286 21.8567 19.1495 21.4914 20.3203 20.3206C21.4936 19.1473 21.8563 17.7289 21.9338 16.1278C22.0139 14.7494 21.9989 13.3809 21.9989 12ZM19.7974 17.899C19.6148 18.3543 19.3947 18.6945 19.0419 19.0448C18.6892 19.3975 18.3515 19.6176 17.8962 19.8003C16.5803 20.3231 13.4558 20.2055 11.9973 20.2055C10.5389 20.2055 7.4118 20.3231 6.09593 19.8028C5.64064 19.6201 5.30041 19.4 4.95018 19.0473C4.59745 18.6945 4.37731 18.3568 4.19469 17.9015C3.67434 16.5831 3.79192 13.4585 3.79192 12C3.79192 10.5415 3.67434 7.4144 4.19469 6.09851C4.37731 5.6432 4.59745 5.30298 4.95018 4.95274C5.30291 4.6025 5.64064 4.37985 6.09593 4.19723C7.4118 3.67688 10.5389 3.79446 11.9973 3.79446C13.4558 3.79446 16.5828 3.67688 17.8987 4.19723C18.354 4.37985 18.6942 4.6 19.0444 4.95274C19.3972 5.30548 19.6173 5.6432 19.7999 6.09851C20.3203 7.4144 20.2027 10.5415 20.2027 12C20.2027 13.4585 20.3203 16.5831 19.7974 17.899Z" fill="#999999"/>
                        </svg>
                    </a></li>
                    <li><a href="https://www.instagram.com/renowear_fr/">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" fill="#999999"/>
                        </svg>
                    </a></li>
                </ul>
            </article>
            <article className='row justifycontent_spbetween'>
                <div>
                    <span className='text_uppercase'>support</span>
                    <ul>
                        <li><a href='/legal/mentions'>Mentions légales</a></li>
                        <li><a href='/legal/politique'>Politique de confidentialité</a></li>
                        <li><a href='/legal/condition'>CGU / CGV</a></li>
                        <li><a href='/assurance'>Assurance</a></li>
                    </ul>
                </div>
                <div>
                    <span className='text_uppercase'>Entreprise</span>
                    <ul>
                        <li><a href='/concept'>Notre concept</a></li>
                        <li><a href='/artisans'>Nos artisans</a></li>
                        <li><a href='/rejoindre'>Nous rejoindre</a></li>
                    </ul>
                </div>
                <div>
                    <span className='text_uppercase'>Aide</span>
                    <ul>
                        <li onClick={account}>Mon compte</li>
                        <li><a href='/repare'>Je répare</a></li>
                        <li><a href='/aide'>Aide</a></li>
                    </ul>
                </div>
            </article>
            </div>
            <p className='copyright'>&copy; 2024 RenoWear. Tous droits réservés</p>
            {openPopup && <div className="popup-background">
                    <Account setOpenPopup={setOpenPopup} />
                </div>}
        </footer>
    )
}

export default Footer;