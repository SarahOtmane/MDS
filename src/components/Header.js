import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import logo from '../assets/pictures/logo_black.svg';

import Account from './Accueil/Account';
import Panier from './Accueil/Panier';


const Header = () =>{
    const navigate = useNavigate();
    const [openPopupC, setOpenPopupC] = useState(false);
    const [openPopupP, setOpenPopupP] = useState(false);
    const [openPopupM, setOpenPopupM] = useState(false);

    const account = () =>{
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        if(!token) setOpenPopupC(true);
        if(role === 'user') navigate('/user/my-account/order');
        else if(role === 'artisan') navigate('artisan/my-account/order');
    }

    const panier = () =>{
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        if(!token) navigate('/user/login');
        else if(role === 'user') navigate('/user/reparation/panier');
        else if(role === 'artisan') setOpenPopupP(true);
    }

    return(
        <header className="header">
            <p className="header-bonus">Bonus Réparation. RenoWear labellisé Refashion.</p>
            <section className='header-main row alignitem_center'>
                <a href='/' className='header-logo'><img src={logo} alt="RenoWear logo en noir" /></a>
                <nav className="header-nav">
                    <ul className='row'>
                        <li><a href="/concept">Le concept</a></li>
                        <li><a href="/artisans">Nos artisans</a></li>
                        <li><a href="/rejoindre">Nous rejoindre</a></li>
                        <li><a href="/repare">Je répare</a></li>
                        <li><a href="/aide">Aide</a></li>
                    </ul>
                </nav>
                <ul className='row alignitem_center header-icons'>
                    <li onClick={panier}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1H4.38321L5.58853 12.9769C5.63862 13.3071 5.80643 13.608 6.06102 13.8243C6.31561 14.0406 6.63984 14.1576 6.97395 14.1538H15.7021C16.0042 14.1696 16.3032 14.0861 16.5534 13.9161C16.8035 13.7461 16.9912 13.4989 17.0875 13.2123L18.9302 7.67385C18.999 7.46564 19.0173 7.24406 18.9836 7.02739C18.9498 6.81072 18.865 6.60517 18.7362 6.42769C18.6021 6.23894 18.4227 6.08681 18.2146 5.98522C18.0065 5.88362 17.7761 5.83581 17.5447 5.84615H4.8681" stroke="#E4A2BE" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M15.4661 18.9998C15.2824 18.9998 15.1062 18.9269 14.9763 18.7971C14.8464 18.6672 14.7734 18.4912 14.7734 18.3075C14.7734 18.1239 14.8464 17.9478 14.9763 17.818C15.1062 17.6882 15.2824 17.6152 15.4661 17.6152C15.6499 17.6152 15.8261 17.6882 15.956 17.818C16.0859 17.9478 16.1589 18.1239 16.1589 18.3075C16.1589 18.4912 16.0859 18.6672 15.956 18.7971C15.8261 18.9269 15.6499 18.9998 15.4661 18.9998Z" fill="#E4A2BE" stroke="#E4A2BE" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6.46127 18.9998C6.27755 18.9998 6.10135 18.9269 5.97145 18.7971C5.84154 18.6672 5.76855 18.4912 5.76855 18.3075C5.76855 18.1239 5.84154 17.9478 5.97145 17.818C6.10135 17.6882 6.27755 17.6152 6.46127 17.6152C6.64499 17.6152 6.82118 17.6882 6.95109 17.818C7.081 17.9478 7.15398 18.1239 7.15398 18.3075C7.15398 18.4912 7.081 18.6672 6.95109 18.7971C6.82118 18.9269 6.64499 18.9998 6.46127 18.9998Z" fill="#E4A2BE" stroke="#E4A2BE" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9.56152 8.61523V11.3845" stroke="#E4A2BE" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M13.7178 8.61523V11.3845" stroke="#E4A2BE" strokeWidth="1.42857" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                   </li>
                    <li onClick={account}>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.11604 7.58299C9.88092 6.81812 10.9183 6.38842 12 6.38842C13.0817 6.38842 14.1191 6.81812 14.884 7.58299C15.6488 8.34787 16.0785 9.38525 16.0785 10.4669C16.0785 11.5486 15.6488 12.586 14.884 13.3509C14.1191 14.1158 13.0817 14.5455 12 14.5455C10.9183 14.5455 9.88092 14.1158 9.11604 13.3509C8.35117 12.586 7.92147 11.5486 7.92147 10.4669C7.92147 9.38525 8.35117 8.34787 9.11604 7.58299ZM12 7.76864C11.2844 7.76864 10.598 8.05292 10.092 8.55895C9.58597 9.06498 9.30169 9.75131 9.30169 10.4669C9.30169 11.1826 9.58597 11.8689 10.092 12.3749C10.598 12.881 11.2844 13.1653 12 13.1653C12.7156 13.1653 13.402 12.881 13.908 12.3749C14.414 11.8689 14.6983 11.1826 14.6983 10.4669C14.6983 9.75131 14.414 9.06498 13.908 8.55895C13.402 8.05292 12.7156 7.76864 12 7.76864Z" fill="#E4A2BE"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 16.5804C10.9559 16.5804 9.9293 16.849 9.01897 17.3603C8.10864 17.8717 7.34516 18.6087 6.80193 19.5003C6.60364 19.8258 6.17902 19.9289 5.85353 19.7307C5.52804 19.5324 5.42493 19.1077 5.62323 18.7823C6.28964 17.6884 7.22624 16.7843 8.343 16.157C9.45975 15.5297 10.7191 15.2002 12 15.2002C13.2809 15.2002 14.5402 15.5297 15.657 16.157C16.7738 16.7843 17.7104 17.6884 18.3768 18.7823C18.5751 19.1077 18.472 19.5324 18.1465 19.7307C17.821 19.9289 17.3964 19.8258 17.1981 19.5003C16.6548 18.6087 15.8914 17.8717 14.981 17.3603C14.0707 16.849 13.0441 16.5804 12 16.5804Z" fill="#E4A2BE"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.28249 5.78249C7.06408 4.00089 9.48044 3 12 3C14.5196 3 16.9359 4.00089 18.7175 5.78249C20.4991 7.56408 21.5 9.98044 21.5 12.5C21.5 15.0196 20.4991 17.4359 18.7175 19.2175C16.9359 20.9991 14.5196 22 12 22C9.48044 22 7.06408 20.9991 5.28249 19.2175C3.50089 17.4359 2.5 15.0196 2.5 12.5C2.5 9.98044 3.50089 7.56408 5.28249 5.78249ZM12 4.38022C9.8465 4.38022 7.7812 5.23569 6.25845 6.75845C4.73569 8.2812 3.88022 10.3465 3.88022 12.5C3.88022 14.6535 4.73569 16.7188 6.25845 18.2416C7.7812 19.7643 9.8465 20.6198 12 20.6198C14.1535 20.6198 16.2188 19.7643 17.7416 18.2416C19.2643 16.7188 20.1198 14.6535 20.1198 12.5C20.1198 10.3465 19.2643 8.2812 17.7416 6.75845C16.2188 5.23569 14.1535 4.38022 12 4.38022Z" fill="#E4A2BE"/>
                        </svg>
                    </li>
                </ul>
                <nav className='navigationMobile'>
                    <div id="menuToggle">
                        <input type="checkbox" onClick={() => setOpenPopupM(!openPopupM)} />
                            <span></span>
                            <span></span>
                            <span></span>

                            <ul id='menu' className={`${openPopupM ? 'open' : ''}`}>
                                <li><a href="/concept">Le concept</a></li>
                                <li><a href="/artisans">Nos artisans</a></li>
                                <li><a href="/rejoindre">Nous rejoindre</a></li>
                                <li><a href="/repare">Je répare</a></li>
                                <li><a href="/aide">Aide</a></li>
                                <li className='end'>Contact@renowear.fr</li>
                                <li> 06 90 56 43 12</li>
                            </ul>
                    </div>
                </nav>
            </section>
            {openPopupC && 
                <div className="popup-background">
                    <Account setOpenPopupC={setOpenPopupC} />
                </div>
            }
            {openPopupP &&
                <div className="popup-background">
                    <Panier setOpenPopupP={setOpenPopupP} />
                </div>
            }
        </header>
    )
}


export default Header;