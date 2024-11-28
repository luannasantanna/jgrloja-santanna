import { useEffect, useState } from "react";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";
import db from "../service/Firebase.js";
import { doc, getDoc } from "firebase/firestore";
import LoadingIndicador from "../components/Loading.tsx";


const ItemDetailContainer = () => {
    const [detalhes, setDetalhes] = useState();
    const { id } = useParams();

    useEffect(() => {
        setTimeout(() => {
            const prodRef = doc(db, 'JGRCollection', id);

            getDoc(prodRef)
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        console.log("Produto encontrado:", snapshot.data());
                        setDetalhes({
                            ...snapshot.data(),
                            id: snapshot.id,
                        });
                    }
                })
                .catch((error) => {
                    console.log('Error ao carregar detalhes do produto', error);
                })
        }, 3000);

    }, [id]);


    return (
        <>
            {!detalhes ? (
                <LoadingIndicador />
            ) : (
                <>
                    {<ItemDetail {...detalhes} />}
                </>
            )}
        </>
    )
}

export default ItemDetailContainer;