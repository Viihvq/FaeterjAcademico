import style from './Post.module.scss';
import { INews } from '../../interfaces/INews';

export function Post(props: INews){
  return(
    <>
      <div className={style.content}>
        <div className={style.titulo}>
          <h1 >{props.titulo}</h1>  <span>{props.categoria} ~ {props.data}</span>
        </div>
        <p className={style.corpo}> {props.conteudo} </p>
        <img src={props.imgNoticias} alt="" />
      </div>
    </>
  )
}