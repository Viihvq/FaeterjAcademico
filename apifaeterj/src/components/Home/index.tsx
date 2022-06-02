import style from './Home.module.scss';
import teste from '../../assets/img/teste.png'


export function Home(){
  return(
    <>
      <div className={style.content}>
      <h1>SECRETARIA INFORMA!</h1>
      <p> Atenção, alunos! <br/> O último dia para trancamento da matrícula é <b>15 de junho</b>! <br/> Para requerimentos na Secretaria Acadêmica devem ser feitos através deste formulário. </p>
      <img src={teste} alt="" />
      </div>
    </>
  );
}