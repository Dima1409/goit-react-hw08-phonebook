import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import App from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='goit-react-hw08-phonebook'>
    <Provider store={store}>
       <App />
    </Provider>
    </BrowserRouter>
    
  </React.StrictMode>
);
