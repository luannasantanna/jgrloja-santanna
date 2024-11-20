import { useCart } from "../context/CartContext";

const CartWidget = () => {
    const { cartQta } = useCart();

    return (
        <div className="navbar__icons--item"><i className="ri-shopping-cart-line"></i>{ cartQta() }</div>
    );
}

export default CartWidget