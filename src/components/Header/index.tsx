import style from './Header.module.scss';
import logo from '../../assets/img/logo.png';
import banner from '../../assets/img/headerImage.jpg';
import { RostasMenu } from '../RotasMenu';
import { Link } from 'react-router-dom';


export function Header(){
  return(
    <>
    <header>
      <div className={style.containerHeader}>
        <div className={style.logo}>
          <img 
            src={logo} 
            alt="logo" 
          />
        </div>
        <div className={style.rotasMenu}>
          <RostasMenu title={"HOME"} link={"/"}></RostasMenu>
          <RostasMenu title={"NOTÍCIAS"} link={"posts"}></RostasMenu>
          <RostasMenu title={"LOGIN"} link={"academico"}></RostasMenu>
        </div>
      </div>
      <div className={style.banner}>
        <img src={banner} alt="banner" />
      </div>
    </header>
    </>
  );
}