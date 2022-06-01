import style from './RotasMenu.module.scss';

interface IMenu{
    title: string,
    link: string,
}

export function RostasMenu(rota: IMenu){
  return(
    <>
      <nav className={style.container}>
        <a href="google.com">
          {rota.title}
        </a>
      </nav>
    </>
  );
}