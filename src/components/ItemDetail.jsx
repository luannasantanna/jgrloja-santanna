import '../css/ItemDetail.css';
import ItemCount from "./ItemCount";
import BtnPrimary from "./BtnPrimary";
import ItemDetailDescription from "./ItemDetailDescription";
import ItemDetailSize from "./ItemDetailSize";
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Alert } from '@mui/material';
import { Link } from 'react-router-dom';

const ItemDetail = ({ id, name, image, price, description = [], size = [], stock = [] }) => {

    const [contador, setContador] = useState(0);
    const [mensagemDeLimite, setMensagemDeLimite] = useState();
    const [mensagemAdicionado, setMensagemAdicionado] = useState();
    const [addSize, setAddSize] = useState();
    const [mensagemAtencao, setMensagemAtencao] = useState();

    const { addToCart } = useCart();

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

    const addItemToCart = (qta) => {
         if(size.length === 0) {
            setAddSize('');
         } else if (!addSize) {
            setMensagemAtencao('Por favor, adicione um tamanho!');
            setTimeout(() => {
                setMensagemAtencao('');
            }, 4000);
            return
        }

        const item = {
            id, name, image, price, qta, stock, size: addSize
        }

        addToCart(item);

        setMensagemAdicionado('Item foi adicionado ao carrinho');

        setTimeout(() => {
            setMensagemAdicionado('');
        }, 3000);
    }

    return (
        <>
            {mensagemAtencao && (<Alert icon={false} color="warning">{mensagemAtencao}</Alert>)}
            {mensagemAdicionado && (<Alert security='success'>{mensagemAdicionado}</Alert>)}
            <div className='container__item-detail'>
                <img src={image} alt="" />
                <div className='content__item-detail'>
                    <h2>{name}</h2>
                    <ItemDetailDescription description={description} />
                    <h2>R$: {price},00</h2>
                    <div className='item__qta-size-btn'>
                        <ItemCount stock={stock} mensagemDeLimite={mensagemDeLimite} contagem={contagem} contador={contador} addItemToCart={addItemToCart} />
                        <div>
                            <ItemDetailSize size={size} addSize={addSize} setAddSize={setAddSize} />
                            <Link to={'/category'}><BtnPrimary text={'Continuar comprando'} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemDetail;