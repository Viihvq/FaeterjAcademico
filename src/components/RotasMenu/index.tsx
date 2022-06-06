import { Link } from 'react-router-dom';
import style from './RotasMenu.module.scss';

interface IMenu{
    title: string,
    link: string,
}

export function RostasMenu(rota: IMenu){
  return(
    <>
      <nav className={style.container}>
        <Link to={rota.link}>
          {rota.title}
        </Link>
      </nav>
    </>
  );
}