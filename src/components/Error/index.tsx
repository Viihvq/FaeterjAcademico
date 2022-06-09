import style from './Error.module.scss';
import cat from '../../assets/img/sleeping.gif';

export function Error(){
  return(
    <>
    <div className={style.container}>
      <img src={cat} alt="" />
      <div className={style.text}>
        <span >
          <b>ERROR 404</b> 
        </span>
        <br/>
        <span>OPS! Parece que você tentou acessar uma página que não existe!</span>
      </div>
      
    </div>
    </>
  );
}