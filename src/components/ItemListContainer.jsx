import "../css/ItemListContainer.css"
import ItemCount from "./ItemCount";

const ItemListContainer = ({ itemTitulo, itemPreco }) => {
    return (
        <div className="best-sellers">
            <img src="https://www.shopjgr.com/cdn/shop/products/K2813-2up.jpg?v=1705956756" alt="" />
            <h5>{itemTitulo}</h5>
            <p>R$: {itemPreco}</p>
            <ItemCount stock={[1, 2, 3, 4, 5]} />
        </div>
    );
}

export default ItemListContainer;