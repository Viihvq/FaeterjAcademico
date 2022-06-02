import style from './Login.module.scss';
import dragao from '../../assets/img/dragao.png'

export function Login(){
  return(
    <>
    <div className={style.container}>
      {/* Academico */}
      <div className={style.content}>
        <span className={style.titulo}>Login</span>
        <div className={style.imagem}>
          <img src={dragao} alt="" />
        </div>
        <span>Matrícula</span>
        <input type="text" placeholder="Número da matrícula"/>
        <span>Senha</span>
        <input type="password" />
        <button>Entrar</button>
        
      </div>
    </div>
    </>
  );
}