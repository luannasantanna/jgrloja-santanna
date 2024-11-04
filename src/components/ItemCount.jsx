import { useState } from 'react';
import '../css/BtnSecondary.css';
import '../css/ItemCount.css';

const ItemCount = ({ stock }) => {

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
        <div className="item__count">
            <div className='mensagem__info--limite'>{mensagemDeLimite}</div>
            <div className="item__count--icons">
                <i onClick={() => contagem('add')} className="ri-add-line"></i>
                <p>{contador}</p>
                <i onClick={() => contagem('subtract')} className="ri-subtract-line"></i>
            </div>
            <button className="btn__secondary">Adicionar ao carrinho</button>
        </div>
    );
}

export default ItemCount;