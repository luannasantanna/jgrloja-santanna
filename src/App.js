import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './index.css';
import Router from './router';
import CartProvider from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
