import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { store } from './redux/store.js'

import { Provider } from 'react-redux';
import ErrorBoundary from './components/ErrorBoundary.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
       <ErrorBoundary>
        <App />
        <ToastContainer position="top-right" autoClose={3000}  newestOnTop={true}  />
     
        </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
);