import '../css/TagTitulo.css'
import BtnSecondary from './BtnSecondary';

const TagTitulo = ({ titulo, subtitulo }) => {
  return (
    <div className="tag__section">
      <div>
        <p>{subtitulo}</p>
        <h3>{titulo}</h3>
      </div>
      <BtnSecondary text='Ver todos' />
    </div>
  );
}

export default TagTitulo;