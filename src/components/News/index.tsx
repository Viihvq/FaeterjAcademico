import { useEffect, useState } from "react";
import { INews } from "../../interfaces/INews";
import { Post } from "../Post";
import api from "../services/httpCommon";
import postService from "../services/postService";

export function News(){
  const [posts, setPosts] = useState<INews[]>([]);

  async function getPosts(){
    postService.getNoticias()
    .then((response) => {
      console.log(response.status);
      setPosts(response.data)
    })
    .catch((error) => {
      console.error("Erro! "+error);
    });
  } 
  
  useEffect(() => {
    getPosts();
  }, []);

  return(
    <>
      {posts.map((post) =>{
        return(
          <div key={post.id}>
          <Post titulo={post?.titulo} 
            categoria={post.categoria} 
            conteudo={post.conteudo}
            imgNoticias={post.imgNoticias}
            data={post.data}
          />
          </div>
        )

      })}
      
    </>
  );
}