import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <section id="about">
                    <div className="container">
                        <h2>О нас</h2>
                        <p>Adok Transfer — это новая развивающаяся компания...</p>
                    </div>
                </section>

                <section id="services">
                    <div className="container">
                        <h2>Наши услуги</h2>
                        <div className="service">
                            <h3>Трансфер в аэропорт</h3>
                            <p>Профессиональные водители на новых Hyundai...</p>
                        </div>
                        {/* Другие услуги аналогично */}
                    </div>
                </section>

                <section id="contact">
                    <div className="container">
                        <h2>Контакты</h2>
                        <p>Почта: <a href="mailto:adoktransfer@gmail.com">adoktransfer@gmail.com</a></p>
                        <p>Телефоны: <a href="tel:+996507256256">+996 507 256 256</a>, <a href="tel:+996559256256">+996 559 256 256</a></p>
                        <div className="social">
                            <a href="https://wa.me/996507256256" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                            <a href="https://t.me/adoktransfer" target="_blank" rel="noopener noreferrer">Telegram</a>
                            <a href="https://instagram.com/adoktransfer" target="_blank" rel="noopener noreferrer">Instagram</a>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;
