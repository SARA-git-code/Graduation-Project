import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './pages/App';



  const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');


createRoot(rootElement).render(
  <StrictMode>
    <App/>
  </StrictMode>);

