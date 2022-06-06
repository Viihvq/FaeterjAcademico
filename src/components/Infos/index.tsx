import { useEffect, useState } from 'react';
import style from './Infos.module.scss';

export function Infos(){
  const [isDisabled, setIsDisabled] = useState(true);
  const [editTitle, setEditTitle] = useState<string>('');
  const [editData, setEditData] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [data, setData] = useState<string>('');

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
  }

  return(
    <>
    <div className={style.container}>
      <div className={style.content}>
        <span className={style.titulo}>SISTEMAS OPERACIONAIS 2</span>
        <span className={style.data}>13/06/2022</span>
        <span >ANOTAÇÕES</span>
        <div className={style.anotacoes}>
          <span>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA          </span>
        </div>
        <button>Editar anotações</button>
      </div>
      <div className={style.content}>
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
        <button onClick={ableEdit}>Editar anotações</button>
        <button onClick={saveInfos}>Salvar alterações</button>
      </div>
    </div>
    </>
  );
}