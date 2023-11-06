import ReactDOM from 'react-dom/client';
import App from './App';
import { onZoho } from '../../api';

onZoho(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
});
