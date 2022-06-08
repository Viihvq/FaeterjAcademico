import style from './Post.module.scss';
import teste from '../../assets/img/teste.png';

interface IProps{
  title: string;
  category?: string;
  body?: string;
  image?: string;
}

export function Post(props: IProps){
  return(
    <>
      <div className={style.content}>
        <div className={style.titulo}>
          <h1 >{props.title}</h1>  <span>{props.category}</span>
        </div>
        <p className={style.corpo}> {props.body} </p>
        <img src={teste} alt="" />
      </div>
    </>
  )
}