import '../css/BtnSecondary.css';

const BtnSecondary = ({text}) => {
    return (
        <button className='btn__secondary'>{text}
        <i className="ri-arrow-right-double-line"></i>
        </button>
    );
}

export default BtnSecondary;