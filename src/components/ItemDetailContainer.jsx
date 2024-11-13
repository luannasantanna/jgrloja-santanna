import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import JGRCollection from "../service/JGRCollection.mock";


const ItemDetailContainer = () => {
    const [detalhes, setDetalhes] = useState([]);

    useEffect(() => {
        const getItem = new Promise((resolve) => {
            setTimeout(() => {
                resolve(JGRCollection);
            }, 4000);
        });

        getItem
            .then((response) => {
                setDetalhes(response);
            })
            .catch((error) => {
                console.log('erro ao carregar detalhes do produto', error);
            });
    }, []);


    return (
        <>
            {detalhes.map((item) => (<ItemDetail key={item.id} {...item}/>))}
        </>
    )
}

export default ItemDetailContainer;