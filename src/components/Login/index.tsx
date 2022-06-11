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
  matricula: number | undefined,
  senha: string | undefined,
}

export function Login(){
  const [user, setUser] = useState<IUser>();
  const [login, setLogin] = useState<login>();
  let approve = false;

  function redirect(){
    console.log('sdehfsshf')
    return(
      <Route path="" element={<Navigate to="academico/infos" replace />}></Route> //n funfa
    )
  }

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
        <span>Matrícula</span>
        <input 
          type="number"
          placeholder="Número da matrícula"
          onChange={event => setLogin({matricula: Number(event.target.value), senha: login?.senha})}
        />
        <span>Senha</span>
        <input 
          type="password" 
          onChange={event => setLogin({senha: event.target.value, matricula: login?.matricula})}
        />
        <button
          onClick={() => getUser(login)}
        >
          Entrar
        </button>
        
      </div>
    </div>
    </>
  );
}