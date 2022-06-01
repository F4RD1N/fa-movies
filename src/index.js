import {BrowserRouter} from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import setAxiosConfig from './config/AxiosConfig'
import './index.css';
import App from './App';
import HomeContext from './context/HomeContext'
import LoginContext from './context/LoginContext'
ReactDOM.render(
     <BrowserRouter>
       <LoginContext>
         <HomeContext>
           <App />
         </HomeContext>
       </LoginContext>
     </BrowserRouter>
  ,
  document.getElementById('root')
);