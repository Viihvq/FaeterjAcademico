import style from './Posts.module.scss';
import teste from '../../assets/img/teste.png';

interface IProps{
  title?: string;
  body?: string;
  image: string;
}

export function Posts(props: IProps){
  return(
    <>
      <div className={style.content}>
        <h1 className={style.titulo}>{props.title}</h1>
        <p className={style.corpo}> {props.body} </p>
        <img src={teste} alt="" />
      </div>
    </>
  )
}