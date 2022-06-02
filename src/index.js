import {BrowserRouter} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import setAxiosConfig from './config/AxiosConfig'
import './index.css';
import App from './App';
import HomeContext from './context/HomeContext'
import AuthContext from './context/AuthContext'
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