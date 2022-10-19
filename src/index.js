import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { CartProvider } from 'react-use-cart';

createRoot(document.getElementById('root')).render(
  <CartProvider>
    <App />
  </CartProvider>
);
