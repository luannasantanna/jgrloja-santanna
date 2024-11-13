import '../css/ItemDetailSize.css'

const ItemDetailSize = ({ size = [] }) => {
    return (
        <ul className="container__size">
            {size.length > 0 ? (size.map((item, index) => (
                <li key={index}>{item}</li>
            ))) : (
                <></>
            )}
        </ul>
    )
}

export default ItemDetailSize;