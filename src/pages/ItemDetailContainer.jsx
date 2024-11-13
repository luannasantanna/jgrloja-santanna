import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import JGRCollection from "../service/JGRCollection.mock";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [detalhes, setDetalhes] = useState();
    const { id } = useParams();

    useEffect(() => {

        const getItem = new Promise((resolve) => {
            setTimeout(() => {
                const item = JGRCollection.find((produto) => produto.id === parseInt(id));
                resolve(item);
            }, 2000);
        });

        getItem
            .then((response) => {
                setDetalhes(response);
            })
            .catch((error) => {
                console.log('erro ao carregar detalhes do produto', error);
            });
    }, [id]);

    if(!detalhes) {
        return <div>Carregando...</div>
    }

    return (
        <>
            {<ItemDetail {...detalhes} />}
        </>
    )
}

export default ItemDetailContainer;