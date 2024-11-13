import '../css/ItemDetail.css';
import ItemCount from "./ItemCount";
import BtnPrimary from "./BtnPrimary";
import ItemDetailDescription from "./ItemDetailDescription";
import ItemDetailSize from "./ItemDetailSize";

const ItemDetail = ({ name, image, price, description = [], size = [], stock = [] }) => {
    return (
        <div className='container__item-detail'>
            <img src={image} alt="" />
            <div className='content__item-detail'>
                <h2>{name}</h2>
                <ItemDetailDescription description={description} />
                <h2>R$: {price},00</h2>
                <div className='item__qta-size-btn'>
                    <ItemCount stock={stock}/>
                    <div>
                        <ItemDetailSize size={size} />
                        <BtnPrimary text={'Comprar'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;