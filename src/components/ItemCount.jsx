import '../css/BtnSecondary.css';
import '../css/ItemCount.css';

const ItemCount = ({ mensagemDeLimite, contagem, contador}) => {


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