import './App.css';
import './index.css';
import ItemListContainer from './components/ItemListContainer';
import TagTitulo from './components/TagTitulo';
import HeroHearder from './components/HeroHeader';

function App() {
  return (
    <div className="App">
      <HeroHearder />

      <TagTitulo titulo={'Best Sellers'} subtitulo={'2024'} />
      <section className='container'>
        <ItemListContainer itemTitulo={'Toyota Racing Development - Military Green'} itemPreco={'125,00'} />
        <ItemListContainer itemTitulo={'Toyota Racing Development - Military Green'} itemPreco={'125,00'} />
        <ItemListContainer itemTitulo={'Toyota Racing Development - Military Green'} itemPreco={'125,00'} />
        <ItemListContainer itemTitulo={'Toyota Racing Development - Military Green'} itemPreco={'125,00'} />
      </section>
    </div>
  );
}

export default App;
