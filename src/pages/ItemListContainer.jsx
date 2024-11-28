import { useEffect, useState } from "react";
import TagTitulo from "./TagTitulo";
import ItemList from "../components/ItemList";
import { useParams } from "react-router-dom";
import LoadingIndicador from "../components/Loading.tsx";
import { collection, getDocs } from "firebase/firestore";
import db from "../service/Firebase.js";

const ItemListContainer = () => {
    const [produtos, setProdutos] = useState([]);
    const [produtosParaFiltrar, setProdutosParaFiltrar] = useState([]);
    const [loading, setLoading] = useState(true);
    const { filter } = useParams();

    useEffect(() => {
        setTimeout(() => {
            const itemsColection = collection(db, 'JGRCollection');

            getDocs(itemsColection)
                .then((snapshot) => {
                    const produtosList = snapshot.docs.map((item) => ({ ...item.data(), id: item.id }));
                    setProdutos(produtosList);
                    setProdutosParaFiltrar(produtosList);
                    setLoading(false);
                })
                .catch((error) => {
                    console.log('error ao carregar os produtos', error);
                })
        }, 6000);
    }, []);


    useEffect(() => {
        if (filter) {
            const filtrados = produtosParaFiltrar.filter((produto) => produto.category === filter);
            setProdutos(filtrados);
        } else {
            setProdutos(produtosParaFiltrar);
        }
    }, [filter, produtosParaFiltrar]);


    return (
        <section className='container'>
            {loading ? (
                <LoadingIndicador />
            ) : (
                <>
                    <TagTitulo titulo={'JGR Collection'} subtitulo={'2024'} />
                    <div className='container__content'>
                        <ItemList produtos={produtos} />
                    </div>
                </>
            )}
        </section>

    );
}

export default ItemListContainer;
