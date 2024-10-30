import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import TagTitulo from './components/TagTitulo';

function App() {
  return (
    <div className="App">
      <NavBar />

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
