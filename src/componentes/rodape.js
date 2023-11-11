import "./estilos/rodape.css"

import logo from '../assets/logo.png'
import { FaFacebookF, FaTwitter, FaLinkedinIn} from "react-icons/fa";
import { BiLogoInstagramAlt} from "react-icons/bi";

function Rodape(){
    return(
        <div className="rodape">
            <div className="rodapespace">
                <div className="logoRodape">
                    <img src={logo} />
                </div>
                <div className="navegar">
                    <h3>Navegar</h3>
                    <ul>
                        <li><a href="#">Link 1</a></li>
                        <li><a href="#">Link 2</a></li>
                        <li><a href="#">Link 3</a></li>
                        <li><a href="#">Link 4</a></li>
                    </ul>

                </div>
                <div className="contato">

                <h3>Contato</h3>
                <p>(27) 99999-9999</p>
                <span>Av. Turbo, 11458 - Santana,</span>
                <span>Cariacica - ES, 2978111-396</span>
                </div>
                
                <div className="social">
                <h3>Social</h3>
                    <div className="socialSpace">
                        <div className="socialbox"><FaFacebookF/></div>
                        <div className="socialbox"><FaTwitter /></div>
                        <div className="socialbox"><BiLogoInstagramAlt id="rodapeicon" /></div>
                        <div className="socialbox"><FaLinkedinIn/></div>
                    </div>
                </div>
            

            </div>
            <hr />
            <div className="inferior">
                <p>@2023 Turbo Tech. Todos os direitos reservados</p>
                <p>🚀 Acelerada pela Turbo Partners</p>
            </div>

        </div>

    )
}

export default Rodape