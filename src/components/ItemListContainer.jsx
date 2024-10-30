import "../css/ItemListContainer.css"

const ItemListContainer = ({ itemTitulo, itemPreco }) => {
    return (
        <div className="best-sellers">
            <img src="https://www.shopjgr.com/cdn/shop/products/K2813-2up.jpg?v=1705956756" alt="" />
            <h5>{itemTitulo}</h5>
            <p>R$: {itemPreco}</p>
        </div>
    );
}

export default ItemListContainer;