import { useEffect, useState } from "react";
import TagTitulo from "../components/TagTitulo";
import ItemList from "../components/ItemList";
import JGRCollection from "../service/JGRCollection.mock";

const ItemListContainer = () => {
    const [produtos, setProdutos] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const promesaProdutos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(JGRCollection);
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
    }, []);

    if (loading) {
        return <div>Carregando ...</div>
    };

    return (
        <section className='container'>
            <TagTitulo titulo={'JGR Collection'} subtitulo={'2024'} />
            <div className='container__content'>
                <ItemList produtos={produtos} />
            </div>
        </section>

    );
}

export default ItemListContainer;