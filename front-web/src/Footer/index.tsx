import './styles.css';
import { ReactComponent as LinkedinIcon } from '../images/Linkedin.svg';
import {ReactComponent as GitIcon} from '../images/Git.svg';

function Footer(){
    return(
           <footer className="main-footer">
               App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
               <div className="footer-incons">
                   <a href="https://www.linkedin.com/in/arthur-rodrigues-de-asevêdo-9aa261191/" target="_new">
                    <LinkedinIcon/>
                   </a>
                   <a href="https://github.com/arthur-asev" target="_new">
                    <GitIcon/>
                   </a>
               </div>
           </footer>
          

    )
    
}
export default Footer;