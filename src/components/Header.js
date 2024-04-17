import logo from '../assets/pictures/logo_black.png';

const Header = () =>{

    return(
        <header className='row alignitem_center'>
            <section className='row alignitem_center'>
                <img src={logo} alt="RenoWear logo en noir" />
                <nav className='row'>
                    <a href="/">À propos</a>
                    <a href="/">Nos artisans</a>
                    <a href="/">Aide</a>
                    <a href="/">Contact</a>
                </nav>
            </section>
            <button>Commencer à réparer</button>
        </header>
    )
}


export default Header;