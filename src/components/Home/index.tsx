import { Posts } from '../Posts';
import style from './Home.module.scss';

export function Home(){
  return(
    <>
      <Posts title="SECRETARIA INFORMA!" 
      body="Atenção, alunos! 
      O último dia para trancamento da matrícula é 15 de junho!
      Para requerimentos na Secretaria Acadêmica devem ser feitos através deste formulário." 
      image=""/>
    </>
  );
}