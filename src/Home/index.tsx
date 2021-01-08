import './styles.css';
import {ReactComponent as MainImage} from '../images/main.svg'


function Home(){
    return(
           <div className="home-container">

            <div className="home-content">
            <div className="home-actions">
            <h1 className="home-title">
                Faça seu pedido <br /> que entregamos <br /> pra você!!
            </h1>
            <h3 className="home-subtitle">
                Escolha seu pedido e em poucos minutos <br />
                levaremos em sua porta
            </h3>
            <a href="orders" className="home-btn-order">fazer pedidos</a>
            </div>

            <div className="home-image"></div>
                <MainImage/>
            </div>

           </div>


    )
    
}
export default Home;