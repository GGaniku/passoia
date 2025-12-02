import "./Header.scss";
import logo from '../../assets/Logo.svg';

function Header() {
    return (
        <header>
            <img src={logo} alt="logo" />

            <nav>
                <ul>
                    <li>LOOKS</li>
                    <li>LANÇAMENTOS</li>
                    <li>NOVIDADES</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
