import { useEffect, useState } from 'react';
import { INews } from '../../interfaces/INews';
import { Post } from '../Post';
import postService from '../services/postService';

export function Home(){
  const [post, setPost] = useState<INews[]>([]);

  async function getPosts(){
    postService.getNoticias()
    .then((response) => {
      console.log(response.status)
      setPost(response.data)
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
      <Post titulo={post[post.length-1]?.titulo}
      conteudo={post[post.length-1]?.conteudo}
      categoria={post[post.length-1]?.categoria}
      imgNoticias={post[post.length-1]?.imgNoticias}
      data={post[post.length-1]?.data}
      />
    </>
  );
}