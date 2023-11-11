import "../estilos/carrocelaval/celulacarrocelaval.css"
import { AiFillStar } from "react-icons/ai";

function Celulacarrocelaval(){
    return(<>
    
        <div className="reviewContainer">
        <div className=" circulo">

        </div>
            <div className="reviewOwner">
                <h3>Matheus Libório</h3>
                <span>Empresário</span>
            </div>
            <div><span>Bibendum neque egestas congue quisque egestas diam in arcu cursus</span></div>
            <div><AiFillStar className="estrela" /><AiFillStar className="estrela" /><AiFillStar className="estrela" /><AiFillStar className="estrela" /><AiFillStar className="estrela" /></div>

        </div>
    </>

    )
}

export default Celulacarrocelaval