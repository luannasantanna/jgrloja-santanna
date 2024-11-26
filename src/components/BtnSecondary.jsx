import '../css/BtnSecondary.css';

const BtnSecondary = ({text, onClick, icon}) => {
    let iconClass = '';

    if (icon === 'arrow') {
        iconClass = 'ri-arrow-right-double-line';
    } else if (icon === 'delete') {
        iconClass = 'ri-delete-bin-line';
    }

    return (
        <button onClick={onClick} className='btn__secondary'>{text}
        {iconClass && <i className={iconClass}></i>}
        </button>
    );
}

export default BtnSecondary;