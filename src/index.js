import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Css
import 'css/App.css';

// JS
import 'bootstrap/dist/js/bootstrap.min.js';
import 'moment';
import 'moment/locale/es-mx';

// Context
import {AuthContextProvider} from 'context/AuthContext';
import {ToastContainer} from 'react-toastify';


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
        <ToastContainer 
        theme="dark"
        position="bottom-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
