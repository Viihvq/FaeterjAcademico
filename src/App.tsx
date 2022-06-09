import { Home } from "./components/Home";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './styles/Global.module.scss';
import { Login } from "./components/Login";
import { Infos } from "./components/Infos";
import { News } from "./components/News";
import { Error } from "./components/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="posts" element={<News/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="academico" element={<Login/>}></Route>
          <Route path="academico/infos" element={<Infos/>}></Route>
          <Route path="*" element={<Error/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
