import style from './Login.module.scss';
import dragao from '../../assets/img/dragao.png'
import { useEffect, useState } from 'react';
import api from '../services/api';

export function Login(){
  const [user, setUser] = useState([]);

  useEffect(() => {
    // api
    // .get("/")
    // .then((response) => setUser(response.data))
    // .catch((error) => {"Erro! "+error});
  }, []);

  return(
    <>
    <div className={style.container}>
      <div className={style.content}>
        <span className={style.titulo}>Login</span>
        <div className={style.imagem}>
          <img src={dragao} alt="" />
        </div>
        <span>Matrícula</span>
        <input type="text" placeholder="Número da matrícula"/>
        <span>Senha</span>
        <input type="password" />
        <button>Entrar</button>
        
      </div>
    </div>
    </>
  );
}