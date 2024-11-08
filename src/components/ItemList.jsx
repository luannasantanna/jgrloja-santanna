import Item from "./Item";

const ItemList = ({produtos}) => {
    return (
        < >
            {produtos.map((produto) => (<Item {...produto} />))};
        </>
    );
}

export default ItemList;