import '../css/ItemDetailDescription.css'

const ItemDetailDescription = ({ description = [] }) => {
    return (
        <ul className='container__description'>
            {description.length > 0 ? (
                description.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            ) : (
                <li></li>
            )}
        </ul>
    );
}

export default ItemDetailDescription;