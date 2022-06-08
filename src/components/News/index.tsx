import { Post } from "../Post";

export function News(){
  return(
    <>
      <Post title="SECRETARIA INFORMA!" 
      body="Atenção, alunos! 
      O último dia para trancamento da matrícula é 15 de junho!
      Para requerimentos na Secretaria Acadêmica devem ser feitos através deste formulário." 
      category="Informativo"
      image=""/>
      
      <Post title="SECRETARIA!" 
      body="Atenção, alunos!" 
      image=""/> 
      
    </>
  );
}