import './App.css';
import './index.css';
import ItemListContainer from './components/ItemListContainer';
import HeroHearder from './components/HeroHeader';
import TagPromocao from './components/TagPromocao';

function App() {
  return (
    <div className="App">
      <HeroHearder />
      <TagPromocao text={'Promoção válida até 27/03/2024'} />

      <ItemListContainer />
    </div>
  );
}

export default App;
