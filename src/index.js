import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Loader from 'components/Loader/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <PersistGate loading={<Loader />} persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-08-phonebook">
        <App />
      </BrowserRouter>
    </Provider>
  </PersistGate>
);
