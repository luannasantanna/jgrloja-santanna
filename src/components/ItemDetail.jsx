import '../css/ItemDetail.css';
import ItemCount from "./ItemCount";
import BtnPrimary from "./BtnPrimary";
import ItemDetailDescription from "./ItemDetailDescription";
import ItemDetailSize from "./ItemDetailSize";
import { useState } from 'react';

const ItemDetail = ({ name, image, price, description = [], size = [], stock = [] }) => {

    const [contador, setContador] = useState(0);
    const [mensagemDeLimite, setMensagemDeLimite] = useState();

    function contagem(operacao) {

        if (operacao === 'add') {
            if (contador < stock.length) {
                setContador(contador + 1);
            } else {
                setMensagemDeLimite('Não é possível adicionar mais itens');
            }
        }
        else if (operacao === 'subtract') {
            if (contador > 0) {
                setContador(contador - 1);
                setMensagemDeLimite('');
            }
        }
    }

    return (
        <div className='container__item-detail'>
            <img src={image} alt="" />
            <div className='content__item-detail'>
                <h2>{name}</h2>
                <ItemDetailDescription description={description} />
                <h2>R$: {price},00</h2>
                <div className='item__qta-size-btn'>
                    <ItemCount stock={stock} mensagemDeLimite={mensagemDeLimite} contagem={contagem} contador={contador} />
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