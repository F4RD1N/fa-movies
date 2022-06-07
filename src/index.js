import {BrowserRouter} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import setAxiosConfig from './config/AxiosConfig'
import './index.css';
import App from './App';
import AuthContext from './context/AuthContext'
import HomeContext from './context/HomeContext'
ReactDOM.render(
     <BrowserRouter>
       <AuthContext>
        <HomeContext>
             <App />
        </HomeContext>
       </AuthContext>
      </BrowserRouter>
  ,
  document.getElementById('root')
);