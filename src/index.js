import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import OneSauce from './pages/OneSauce';
import CreateSauce from './pages/CreateSauce';
import Error from './pages/Error';
import "./style.scss"
import { UserContextProvider } from './utils/context/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/create_sauce" element={<CreateSauce/>}/>
          <Route exact path="/sauce/:id" element={<OneSauce/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </Router>    
    </UserContextProvider>
  </React.StrictMode>
);