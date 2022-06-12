import style from './Login.module.scss';
import dragao from '../../assets/img/dragao.png'
import { useEffect, useState } from 'react';
import api from '../services/httpCommon';
import axios from 'axios';
import userService from '../services/userService';
import { RostasMenu } from '../RotasMenu';
import { Link, Navigate, Route, useLocation, useNavigate } from 'react-router-dom';
import { Infos } from '../Infos';

interface IGradeMateria{
  id: number;
  imgCalendario: string;
  imgGrade: string;
}

interface IDisciplinas{
  id: number;
  disciplinas: string;
  periodo: string;
  professor: string;
  peso: number;
  turno: string;
}

export interface IUser{
  id: number;
  nome: string;
  email: string;
  disciplinas: IDisciplinas[];
}

interface login{
  matricula: string | undefined,
  senha: string | undefined,
  
}

export function Login(){
  const history = useNavigate();
  const [user, setUser] = useState<IUser>();
  const [login, setLogin] = useState<login>();
  let approve = false;

  function redirect(){
    console.log('sdehfsshf')
    return(
      <Route path="" element={<Navigate to="academico/infos" replace />}></Route> //n funfa
    )
  }

  //Comentei pq nao sei como implementar dentro desse carinha 

  /*
  function getUser(id: login | undefined){
    userService.getUserById(id?.matricula)
    .then((response) => {
      const info = response?.data;
      if(id?.senha == info?.senha){
        setUser(response?.data)
        console.log(response)
        approve = true;
        console.log(id?.senha + info?.senha + approve)
        redirect()
      }
    })
    .catch((error) => {
      console.error("Erro! "+error);
    });    
  }
*/
  

//MONTANDO SCHEMA DO JSON 
  var data = {
    email: login?.matricula,
    senha: login?.senha
  };

  //Dispara uma requisição e verifica se o usuario existe, caso exista retorna o token (caso nao exista ele lança uma excepetiob)
  async function auth() {
    console.log("fui clicado");
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
      var { data } = await api.get(`/aluno/email?value=${login?.matricula}`);
      alert(`Bem-Vindo ${data.nome}`) 
      //Salvando dados do usuario no localStorage (se quiser futuramente acessar o dado estara la, ou pode criar uma Context para persistir)
      localStorage.setItem("usuario",JSON.stringify( data));
      //Redicionar para a rota apos o login
      history("/");
    } catch {
      alert("Erro ao se conectar com o servidor (heroku iniciando)")
    }
  }

  useEffect(() => {
    
    console.log(user)
  }, []);

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
          placeholder="Número da matrícula"
          onChange={event => setLogin({matricula: event.target.value, senha: login?.senha})}
        />
        <span>Senha</span>
        <input 
          type="password" 
          onChange={event => setLogin({senha: event.target.value, matricula: login?.matricula})}
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