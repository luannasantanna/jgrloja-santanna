import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import BtnSecondary from "../components/BtnSecondary";
import BtnPrimary from "../components/BtnPrimary";

const Cart = () => {
    const { cart, cartTotal } = useContext(CartContext);


    if (cart.length === 0) {
        return (
            <>
                <p>Seu carrinho está vazio</p>
                <Link to={'/'}><BtnSecondary text={'Página inicial'} /></Link>
            </>
        );
    }

    return (
        <>
            <h2>Seu carrinho</h2>
            <div>
                {cart.map(item => (
                    <CartItem key={item.id} item={item} />
                ))}
            </div>
            <h3>Total: R${cartTotal()}</h3>
            <Link to={'/category'}>
                <BtnSecondary text={'Continuar comprando'} />
            </Link>
            <Link>
                <BtnPrimary text={'Finalizar Compra'} />
            </Link>
        </>
    );
}

export default Cart;