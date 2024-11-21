import { useEffect, useState } from "react";
import TagTitulo from "./TagTitulo";
import ItemList from "../components/ItemList";
import JGRCollection from "../service/JGRCollection.mock";
import { useParams } from "react-router-dom";
import CircularWithValueLabel from "../components/Loading.tsx";

const ItemListContainer = () => {
    const [produtos, setProdutos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { filter } = useParams();

    const produtosFiltrados = (categoria) => {
        return JGRCollection.filter((produto) =>
            produto.category === categoria
        );
    };

    useEffect(() => {
        const promesaProdutos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(JGRCollection);
            }, 8000);
        });

        promesaProdutos
            .then((response) => {
                setProdutos(response);
                setLoading(false);
            })
            .catch((error) => {
                console.error('erro ao carregar produtos', error);
            });
    }, []);

    useEffect(() => {
        if (filter) {
            setProdutos(produtosFiltrados(filter));
        } else {
            setProdutos(JGRCollection);
        }
    }, [filter]);


    return (
        <section className='container'>
            {loading ? (
                <CircularWithValueLabel value={8000} />
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