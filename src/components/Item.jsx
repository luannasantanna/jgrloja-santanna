import "../css/Item.css";
import BtnSecondary from "./BtnSecondary";

const Item = ({ id, name, price, image }) => {
    return (
        <div className="card__item" key={id}>
            <img src={image} alt="" />
            <h5>{name}</h5>
            <p>R$: {price},00</p>
            <BtnSecondary text={'Detalhes'} />
        </div>
    );
}

export default Item;