import { useEffect, useState } from 'react';
import { IUser } from '../../interfaces/IUser';
import userService from '../services/userService';
import style from './Infos.module.scss';

export function Infos(){
  const [isDisabled, setIsDisabled] = useState(true);
  const [user, setUser] = useState<IUser>();
  const [data, setData] = useState<string>();

  async function getUser(){
    let local = localStorage.getItem("usuario");
     if(local != null){
       setUser(JSON.parse(local))
     }  
  }

  useEffect(() => {
    setData(user?.nome)
  },[user])


  useEffect(() => {
    getUser();
    setData(user?.nome)
    
  },[])
  
  function patchInfos(){
    const userPut =  {...user, nome: data};
    userService.putUser(userPut);
    localStorage.setItem("usuario",JSON.stringify(userPut));
  }

  function ableEdit(){
    setIsDisabled(false);
  }
  
  function saveInfos(){
    setIsDisabled(true);
    patchInfos();
  }

  return(
    <>
    <div className={style.container}>
      <div className={style.infosUser}>
        <div className={style.welcomeContent}>
          <div className={style.welcome}>
            <span>Olá,</span> 
            
              <input type="text" 
                disabled={isDisabled} 
                className={isDisabled ? style.desativado : style.ativado}
                onChange={event => setData(event.target.value)}
                value={data}
              />  
        </div>
            <button className={isDisabled ? style.botaoDesativado : style.botao } onClick={saveInfos}>Salvar</button>
            <button className={isDisabled ? style.botao : style.botaoDesativado} onClick={ableEdit}>Editar</button> 
        </div>
       
        <div className={style.infoBotao}>
          <span><b>Matricula:</b> {user?.id} </span> 
          <span><b>E-mail:</b> {user?.email} </span>
        </div>
      </div>
      <div className={style.cards}>
        {
          user?.disciplinas.map((disciplina, index) => {
            return(
              <div className={style.card} key={index}>
                <span className={style.titulo}>{disciplina?.disciplinas}</span>
                <span className={style.data}> {disciplina?.periodo} período</span>
                <span className={style.data}>Professor {disciplina?.professor}</span>
                <span className={style.data}>Peso {disciplina.peso}</span>
                <span className={style.data}>Turno {disciplina.turno}</span>
              </div>
            )
          })
        }
      </div> 
    </div>
    </>
  );
}