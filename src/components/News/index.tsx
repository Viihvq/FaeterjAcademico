import { useEffect, useState } from "react";
import { Post } from "../Post";
import api from "../services/httpCommon";

interface INews{ //teste
  id: number;
  titulo: string;
  categoria: string;
  data: string;
  imgNoticias: string;
}

export function News(){
  const [posts, setPosts] = useState<INews>();

  async function getPosts(){
    api
    .get<INews>("/noticias")
    .then((response) => setPosts(response.data))
    .catch((error) => {
      console.error("Erro! "+error);
    });
  } 
  
  useEffect(() => {
    getPosts();
    console.log(posts)
  }, []);
  console.log(posts)

  return(
    <>
      {/* {posts?.disciplinas.map((post) =>{
        return(
          <Post title={post.disciplina} body={post.professor + post.peso + posts.periodo}/>
        )

      })} */}

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