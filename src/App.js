import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import logo from  "./img1/img/LOGO.png";
import Index from './Componentes/index';
import Destino from './Componentes/destino';
import Promocao from './Componentes/promocao';
import Header from './Componentes/header';
import Contato from './Componentes/contato';




const App= () => {
  return (
    <BrowserRouter>  
    <Header/>
  
    <Routes>
      <Route path="/" exact element={<Index/>}></Route>
      <Route path="/destinos" element={<Destino/>}></Route>
      <Route path="/promocao" element={<Promocao/>}></Route>
      <Route path="/contato" element={<Contato/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
