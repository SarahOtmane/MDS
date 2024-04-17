import logo from '../assets/pictures/logo_black.png';

const Header = () =>{

    return(
        <header className='row alignitem_center'>
            <section className='row alignitem_center'>
                <img src={logo} alt="RenoWear logo en noir" />
                <nav>
                    <ul className='row'>
                        <li><a href="/">À propos</a></li>
                        <li><a href="/">Nos artisans</a></li>
                        <li><a href="/">Aide</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </nav>
            </section>
            <button>Commencer à réparer</button>
        </header>
    )
}


export default Header;