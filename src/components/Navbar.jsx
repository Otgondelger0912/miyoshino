import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container container">
                <div className="navbar-logo">
                    <h1>MIYOSHINO</h1>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="#home" className="nav-links" onClick={toggleMenu}>
                            ホーム
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#menu" className="nav-links" onClick={toggleMenu}>
                            メニュー
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" className="nav-links" onClick={toggleMenu}>
                            当店について
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" className="nav-links" onClick={toggleMenu}>
                            お問い合わせ
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
