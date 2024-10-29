import "../css/NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = () => {
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
        <div> <form>
          <input type="text" name="search" placeholder="Buscar" />
          <button><i class="ri-search-line"></i></button>
        </form> </div>
        <CartWidget />
        <div className="navbar__icons--item"> <a href="http://globo.com"><i class="ri-user-3-line"></i></a> </div>
      </div>

      <div className="menu__hamburguer"></div>
    </header>
  );
}

export default NavBar;
