import { useState } from "react";
import "../css/NavBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

const NavBar = () => {

  const [mostrarInput, setMostrarInput] = useState(false);
  const [btnClass, setBtnClass] = useState('');

  const ativaInput = (e) => {
    e.preventDefault();
    setMostrarInput(!mostrarInput);
    setBtnClass(mostrarInput ? '' : 'ativa')
  };


  return (
    <header>
      <Link to='/' className="logo">JGR | team store</Link>
      <nav>
        <ul>
          <li> <Link to={'/'}>Legado Gibbs</Link> </li>
          <li> <a href="http://globo.com">Pilotos</a> </li>
          <li> <a href="http://globo.com">Itens em promoção</a> </li>
        </ul>
      </nav>

      <div className="navbar__icons">

        <div>
          <form>
            {mostrarInput && <input type="text" name="search" placeholder="Buscar" />}
            <button className={btnClass} onClick={ativaInput}><i className="ri-search-line"></i></button>
          </form>
        </div>

        <CartWidget />
        <div className="navbar__icons--item"> <a href="http://globo.com"><i className="ri-user-3-line"></i></a> </div>
      </div>
    </header>
  );
}

export default NavBar;
