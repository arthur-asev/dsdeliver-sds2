import './styles.css';
import { ReactComponent as YouTubeIcon } from '../images/Youtube.svg';
import { ReactComponent as LinkedinIcon } from '../images/Linkedin.svg';
import { ReactComponent as InstagramIcon } from '../images/Instagram.svg';

function Footer(){
    return(
           <footer className="main-footer">
               App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
               <div className="footer-incons">
                   <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                    <LinkedinIcon/>
                   </a>
                   <a href="https://www.instagram.com/devsuperior.ig/" target="_new">
                   <InstagramIcon/>
                   </a>
                   <a href="https://www.youtube.com/devsuperior" target="_new">
                   <YouTubeIcon/>
                   </a>
               </div>
           </footer>
          

    )
    
}
export default Footer;