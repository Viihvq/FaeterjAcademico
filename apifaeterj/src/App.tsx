import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './styles/Global.module.scss';
import { Login } from "./components/Login";
import { Infos } from "./components/Infos";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="posts" element={(<div><h2>Hello World!</h2></div>)}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="academico" element={<Login/>}></Route>
          <Route path="academico/infos" element={<Infos/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
