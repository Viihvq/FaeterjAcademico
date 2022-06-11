import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IUser } from '../Login';
import api from '../services/httpCommon';
import userService from '../services/userService';
import style from './Infos.module.scss';

export function Infos(){//receber aqui as infos do usuario
  const [isDisabled, setIsDisabled] = useState(true);
  const [editTitle, setEditTitle] = useState<string>('');
  const [editData, setEditData] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [data, setData] = useState<string>('');
  const [user, setUser] = useState<IUser>();

  function getUser(id: number){
    userService.getUserById(id)
    .then((response) => setUser(response?.data))
    .catch((error) => {
      console.error("Erro! "+error);
    });    
  }
  
  useEffect(() => {
    getUser(1);
    console.log(user)

  },[])

   useEffect(() => {
    setTitle(editTitle);
  },[editTitle])

  useEffect(() => {
    setData(editData);
  },[editData])

  function ableEdit(){
    setIsDisabled(false);
  }
  
  function saveInfos(){
    setIsDisabled(true);
    //coloca patchinfos aqui
  }


  function patchInfos(){
    api
    .patch("/aluno", {
      properties: {
        disciplinas: "",
        email: "",
        nome: ""
      }
    })//.then()
  }

  return(
    <>
    <div className={style.container}>
      <div className={style.infosUser}>
        <div className={style.welcome}>
          <span>Bem-vindo(a),</span> 
          <input type="text" 
            disabled={isDisabled} 
            className={isDisabled ? style.desativado : style.ativado}
            onChange={event => setEditTitle(event.target.value)}
            value={user?.nome} 
          />  
        </div>
        <div className={style.infoBotao}>
          <span><b>Turno:</b> Noite?</span> 
          <span><b>E-mail:</b> {user?.email} </span>
          <button className={style.botao} onClick={ableEdit}>Editar</button>
        </div>
      </div>
      <div className={style.cards}>
        {
          user?.disciplinas.map((disciplina) => {
            return(
              <div className={style.card}>
                <span className={style.titulo}>{disciplina?.disciplinas}</span>
                <span className={style.data}> {disciplina?.periodo} período</span>
                <span className={style.data}>Professor {disciplina?.professor}</span>
                <span className={style.data}>Peso {disciplina.peso}</span>
                <span className={style.data}>Turno {disciplina.turno}</span>
                {/* <span >ANOTAÇÕES</span>
                <div className={style.anotacoes}>
                  <span>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</span>
                </div> */}
                {/* <button>Editar anotações</button> */}
              </div>

            )
          })
        }

        {/* <div className={style.card}>
          <input 
            type="text" 
            disabled={isDisabled} 
            className={isDisabled ? style.desativado : style.ativado}
            onChange={event => setEditTitle(event.target.value)}
            value={"SISTEMAS OPERACIONAIS 2"}
            // value={title}
            />
          <input 
            type="text" 
            disabled={isDisabled} 
            className={isDisabled ? style.desativado : style.ativado}
            onChange={event => setEditData(event.target.value)}
            value={"13/06/2022"}
            // value={data}
            />
          <span >ANOTAÇÕES</span>
          <div className={style.anotacoes}>          
          </div>
          <button  className={style.botao}>Editar anotações</button>
          <button  className={style.botao}>Salvar alterações</button>
        </div> */}
      </div> 
    </div>
    </>
  );
}