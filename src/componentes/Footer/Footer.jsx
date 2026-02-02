import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Inicio from '../Inicio/Inicio';
import Logo from '../../assets/Logo.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import whatsapp from '../../assets/whatsapp.png';
import styles from './footer.module.scss';


function Footer() {
    return (
        <footer className={styles.footer}>
    <BrowserRouter>
        <section className={styles.navBarFooter}>
            <div className={styles.logoContainer}>
            <img src={Logo} alt="Logo da Connect" className={styles.logo} />
            <p className={styles.nomeLogo}>Connect</p>
            </div>
            <div className={styles.direitos}>
            <p>© 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</p>
            </div>

            <div className={styles.redesSociais}>
            <Link to="https://wa.me/+5521965811449">
            <img src={whatsapp} alt="Ícone do WhatsApp" className={styles.iconeRedeSocial} />
            </Link>
            <Link to="https://www.instagram.com/_jeffslv_?igsh=aTg0aW02dHdmeGg5">
            <img src={instagram} alt="Ícone do Instagram" className={styles.iconeRedeSocial} />
            </Link>
            <Link to="https://www.linkedin.com/in/jeffersonsilvadev/">
            <img src={linkedin} alt="Ícone do LinkedIn" className={styles.iconeRedeSocial} />
            </Link>
            
            </div>
        </section>
    </BrowserRouter>
        </footer>
    );



}



export default Footer;


