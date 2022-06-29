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
import FavoritePage from './Pages/FavoritePage';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import WatchPage from './Pages/WatchPage';
import MusicPage from './Pages/MusicPage';


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
       <Route exact path="/gadget/:id" element={<GadgetPage />}/>
       <Route exact path="/watch/:id" element={<WatchPage />}/>
       <Route exact path="/music/:id" element={<MusicPage />}/>
       <Route exact path="/basket" element={<BasketPage />}/>
       <Route exact path="/favorite" element={<FavoritePage />}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;



