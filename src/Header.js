import React from 'react';

function Header() {
    return (
        <header>
            <div className="container">
                <h1>Adok Transfer</h1>
                <nav>
                    <ul>
                        <li><a href="#about">О нас</a></li>
                        <li><a href="#services">Наши услуги</a></li>
                        <li><a href="#contact">Контакты</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
