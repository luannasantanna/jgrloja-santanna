import { useState } from "react";
import "../css/NavBar.css";
import CartWidget from "./CartWidget";

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
      <div className="logo">JGR | team store</div>
      <nav>
        <ul>
          <li> <a href="http://globo.com">Legado Gibbs</a> </li>
          <li> <a href="http://globo.com">Pilotos</a> </li>
          <li> <a href="http://globo.com">Itens em promoção</a> </li>
        </ul>
      </nav>

      <div className="navbar__icons">

        <div>
          <form>
            {mostrarInput && <input type="text" name="search" placeholder="Buscar" />}
            <button className={btnClass} onClick={ativaInput}><i class="ri-search-line"></i></button>
          </form>
        </div>

        <CartWidget />
        <div className="navbar__icons--item"> <a href="http://globo.com"><i class="ri-user-3-line"></i></a> </div>
      </div>
    </header>
  );
}

export default NavBar;
