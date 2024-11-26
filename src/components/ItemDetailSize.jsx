import '../css/ItemDetailSize.css'

const ItemDetailSize = ({ size = [], addSize, setAddSize }) => {
    return (
        <ul className="container__size">
            {size.length > 0 ? (size.map((item, index) => (
                <li key={index}
                className={addSize === item ? 'tamanho--selecionado' : ''}
                onClick={() => setAddSize(item)}
                >{item}</li>
            ))) : (
                <></>
            )}
        </ul>
    )
}

export default ItemDetailSize;