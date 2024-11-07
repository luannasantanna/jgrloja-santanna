import { useEffect, useState } from "react";
import Item from "./Item";
import BestSellers from "../service/BestSellers.mock";

const ItemList = () => {
    const [produtos, setProdutos] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const promesaProdutos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(BestSellers);
            }, 5000);
        });

        promesaProdutos
            .then((response) => {
                setProdutos(response);
                setLoading(false);
            })
            .catch((error) => {
                console.error('erro ao carregar produtos', error);
            });
    },); 

    if (loading) {
        return <div>Carregando ...</div>
    };

    return (
        < >
            {produtos.map((produto) => (<Item {...produto} />))};
        </>
    );
}

export default ItemList;