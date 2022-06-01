import style from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
 

export function Footer(){
  return(
    <footer>
      <span className={style.text}>©  2022 FAETERJ - Petrópolis | Todos os direitos são reservados</span>
      <div>
        <a href="#"><FontAwesomeIcon icon={faFacebook} className={style.icon} size="lg"/></a>
        <a href=""><FontAwesomeIcon icon={faLinkedinIn} className={style.icon} size="lg"/></a>
        <a href=""><FontAwesomeIcon icon={faInstagram} className={style.icon} size="lg"/></a>
      </div>
    </footer>
  );
}