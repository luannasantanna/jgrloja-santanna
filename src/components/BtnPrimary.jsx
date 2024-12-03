import '../css/BtnPrimary.css';

const BtnSecondary = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className='btn__primary'>{text}</button>
    );
}

export default BtnSecondary;