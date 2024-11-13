import { Link } from "react-router-dom";
import Item from "./Item";

const ItemList = ({produtos}) => {
    return (
        < >
            {produtos.map((produto) => (
                <li key={produto.id}>
                    <Link to={`/JGR-produtos/${produto.id}`}>
                        <Item {...produto} />
                    </Link>
                </li>
            ) )}
        </>
    );
}

export default ItemList;