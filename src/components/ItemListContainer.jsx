import TagTitulo from "./TagTitulo";
import ItemList from "./ItemList";

const ItemListContainer = () => {
    return (

        <section className='container'>
            <TagTitulo titulo={'Best Sellers'} subtitulo={'2024'} />
            <div className='container__content'>
                <ItemList />
            </div>
        </section>

    );
}

export default ItemListContainer;