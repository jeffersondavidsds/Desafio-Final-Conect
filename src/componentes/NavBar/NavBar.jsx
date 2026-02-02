
//Importações de Componentes
import { Browserrouter, Route, Routes, Link } from 'react-router-dom';
import Inicio from '../Inicio/Inicio.jsx';
import AcoesdaConnect from '../AcoesdaConnect/Acoes.jsx';
import QueSomos from '../QuemSomos/QuemSomos.jsx';
import Perfil from '../Perfil/Perfil.jsx';

//Importações de Estilos e Imagens
import Logo from '../../assets/logo.png';
import fotoperfil from '../../assets/fotoperfil.png';

function NavBar() {
    return(
        <Browserrouter>
        <nav>
            <Link to="/">
            <img src={Logo} alt="Logo da Connect" className="logo" />
            </Link>
            <ul className="nav-links">
                <li><Link to="/">Início</Link></li>
                <li><Link to="/acoes">Ações da Connect</Link></li>
                <li><Link to="/quemsomos">Quem Somos</Link></li>
                <li><Link to="/perfil">Perfil</Link></li>
                <img src={fotoperfil} alt="Foto de Perfil" className="fotoperfil" />
            </ul>
        </nav>
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/acoes" element={<AcoesdaConnect />} />
            <Route path="/quemsomos" element={<QueSomos />} />
            <Route path="/perfil" element={<Perfil />} />
        </Routes>
        </Browserrouter>
    )
}



export default NavBar;