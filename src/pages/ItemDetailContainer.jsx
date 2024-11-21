import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import JGRCollection from "../service/JGRCollection.mock";
import { useParams } from "react-router-dom";
import CircularWithValueLabel from "../components/Loading.tsx";


const ItemDetailContainer = () => {
    const [detalhes, setDetalhes] = useState();
    const { id } = useParams();

    useEffect(() => {

        const getItem = new Promise((resolve) => {
            setTimeout(() => {
                const item = JGRCollection.find((produto) => produto.id === parseInt(id));
                resolve(item);
            }, 8000);
        });

        getItem
            .then((response) => {
                setDetalhes(response);
            })
            .catch((error) => {
                console.log('erro ao carregar detalhes do produto', error);
            });
    }, [id]);


    return (
        <>
            {!detalhes ? (
                <CircularWithValueLabel value={8000} />
            ) : (
                <>
                    {<ItemDetail {...detalhes} />}
                </>
            )}
        </>
    )
}

export default ItemDetailContainer;