import style from './Login.module.scss';
import dragao from '../../assets/img/dragao.png'
import { useState } from 'react';
import api from '../services/httpCommon';
import userService from '../services/userService';
import { useNavigate } from 'react-router-dom';
import {ILogin} from '../../interfaces/ILogin';

export function Login(){

  const history = useNavigate();
  const [login, setLogin] = useState<ILogin>();  

  var data = {
    email: login?.email,
    senha: login?.senha
  };

  //Dispara uma requisição e verifica se o usuario existe, caso exista retorna o token (caso nao exista ele lança uma excepetiob)
  async function auth() {
    try {
      var { headers}  = await api.post(`/login`, data);
      //Pegando token Gerado pela requisição
      localStorage.setItem("token", headers.authorization);
     //Pegando dados do usuario que se autenticou
      getUsuario()

    } catch {
      alert("Aluno invalido")
    }
  }

  //Get by email, para retornar os dados do usuario que acabou de se autenticar e salvar o usuario no localStorage
  async function getUsuario() {
    try {
      var { data } = await userService.getUserByEmail(login?.email);
      const status = (await userService.getUserByEmail(login?.email)).status;
      console.log(status)
      alert(`Bem-Vindo ${data.nome}`);

      //Salvando dados do usuario no localStorage (se quiser futuramente acessar o dado estara la, ou pode criar uma Context para persistir)
      localStorage.setItem("usuario",JSON.stringify( data));
      //Redicionar para a rota apos o login
      history("/academico/infos", {state: data.email});
    } catch {
      alert("Erro ao se conectar com o servidor (heroku iniciando)");
    }
  }

  return(
    <>
    <div className={style.container}>
      <div className={style.content}>
        <span className={style.titulo}>Login</span>
        <div className={style.imagem}>
          <img src={dragao} alt="" />
        </div>
        <span>Email</span>
        <input 
          placeholder="E-mail"
          onChange={event => setLogin({email: event.target.value, senha: login?.senha})}
        />
        <span>Senha</span>
        <input 
          type="password" 
          onChange={event => setLogin({senha: event.target.value, email: login?.email})}
        />
        <button
          onClick={() => auth()}
        >
          Entrar
        </button>
        
      </div>
    </div>
    </>
  );
}