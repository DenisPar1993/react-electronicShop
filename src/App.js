import Header from './components/Header';
import Main from './Pages/Main';
import './scss/app.scss';
import Cart from './components/Cart';
import { useEffect,useState } from 'react';
import Footer from './components/Footer';
import GadgetPage from './Pages/GadgetPage';
import SideFilter from './components/SideFilter';
import Smartphones from './Pages/Smartphones';
import Pads from './Pages/Pads';
import BasketPage from './Pages/BasketPage';
import Watch from './Pages/Watch';
import Music from './Pages/Music';
import { BrowserRouter,Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
      
     <Header/>
     <Routes>
       <Route exact path="/" element={<Main />}/>
       <Route exact path="/smartphones" element={<Smartphones />}/>
       <Route exact path="/pads" element={<Pads />}/>
       <Route exact path="/watch" element={<Watch />}/>
       <Route exact path="/music" element={<Music />}/>
       <Route exact path="/gadget" element={<GadgetPage />}/>
       <Route exact path="/basket" element={<BasketPage />}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;



