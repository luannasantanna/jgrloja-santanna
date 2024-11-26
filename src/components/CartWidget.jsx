import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartWidget = () => {
    const { cartQta } = useCart();

    return (
        <Link to={'/cart'} className="navbar__icons--item"><i className="ri-shopping-cart-line"></i>{ cartQta() }</Link>
    );
}

export default CartWidget