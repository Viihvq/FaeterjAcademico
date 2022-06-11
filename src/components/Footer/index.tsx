import style from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedinIn,  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMap} from '@fortawesome/free-solid-svg-icons';

export function Footer(){
  return(
    <footer>
      <div className={style.text}>
      {/* <span className={style.text}>Avenida Getúlio Vargas, 335 - Quitandinha </span> */}
      <span >
        <FontAwesomeIcon icon={faEnvelope} className={style.icon} size="sm"/> contato@faeterj-petropolis.edu.br 
        <FontAwesomeIcon icon={faPhone} className={style.icon} size="sm"/> (24) 2235-1079
        <FontAwesomeIcon icon={faMap} className={style.icon} size="sm"/> (24) Avenida Getúlio Vargas, 335 - Quitandinha <br/>
        ©  2022 FAETERJ - Petrópolis | Todos os direitos são reservados
      </span>
      </div>
      <div>
        <a href="https://www.facebook.com/petropolis.faeterj" target="_blank">
          <FontAwesomeIcon icon={faFacebook} className={style.icon} size="lg"/>
        </a>
        <a href="https://www.linkedin.com/school/faeterjpetropolis-ist/" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} className={style.icon} size="lg"/>
        </a>
        <a href="https://www.instagram.com/faeterjpetropolis" target="_blank">
          <FontAwesomeIcon icon={faInstagram} className={style.icon} size="lg"/>
        </a> 
      </div>
    </footer>
  );
}