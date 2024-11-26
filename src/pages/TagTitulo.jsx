import '../css/TagTitulo.css'
import { Link } from 'react-router-dom';
import TagCategory from '../components/TagCategory';

const TagTitulo = ({ titulo, subtitulo }) => {
  return (
    <div className="tag__section">
      <div>
        <p>{subtitulo}</p>
        <h3>{titulo}</h3>
      </div>
      <div>
        <Link to={'/category'}>
          <TagCategory text='Todos' />
        </Link>
        <Link to={'/category/Bonés'}>
          <TagCategory text={'Bonés'} />
        </Link>
        <Link to={'/category/Moletom'}>
          <TagCategory text={'Moletom'} />
        </Link>
      </div>
    </div>
  );
}

export default TagTitulo;