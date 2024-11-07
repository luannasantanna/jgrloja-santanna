import "../css/Item.css";
import ItemCount from "./ItemCount";

const Item = ({ id, name, price, stock }) => {
    return (
        <div className="card__item" key={id}>
            <img src="https://www.shopjgr.com/cdn/shop/products/K2813-2up.jpg?v=1705956756" alt="" />
            <h5>{name}</h5>
            <p>R$: {price}</p>
            <ItemCount stock={stock} />
        </div>
    );
}

export default Item;