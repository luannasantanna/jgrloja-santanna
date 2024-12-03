import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../css/CartItem.css";
import BtnSecondary from "./BtnSecondary";

const CartItem = ({ item }) => {
    const { removeItemCart } = useContext(CartContext);

    return (
        <div className="container__cart--item">
            <img src={item.image} alt="" />
            <div className="title__cart--item">
                <h4>{item.name}</h4>
                <p>Preço unitário: R$ {item.price}</p>
            </div>
            <div>
                <p>Quantidade: {item.qta}</p>
                <p>{!item.size ? "Tamanho único" : `Tamanho: ${item.size}`}</p>
            </div>
            <BtnSecondary icon={'delete'} onClick={() => removeItemCart(item.id)} text={'remove'}/>
        </div>
    );
}

export default CartItem;