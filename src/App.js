import'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';

import './App.css';
import Navbar from './Components/navbar';
import logoImage from '../src/assets/logo.png'
import TVShowsHeader from './Components/TvShowsHeader';
import FormCard from './Components/film';
import Avangers from './Components/avangers';
import FastAndFuiors from './Components/fastAndFurios';
import Footer from './Components/footer';
import MovieSearch from './Components/Moviesearch';



function App() {
  return (
    <div className='App bg-dark'>
    <header>
    <Navbar logo={logoImage} />
    </header>
    
        <TVShowsHeader /> {/* Inserisci il componente TVShowsHeader */}
        {/* Altri contenuti della sezione main possono essere aggiunti qui */}
        <FormCard />
        <Avangers />
        <FastAndFuiors />
     
        <Footer />
     
        </div>
  
   

  );
}

export default App;
