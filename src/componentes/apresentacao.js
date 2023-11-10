import img1 from "../assets/img1.png"
import "./estilos/apresentacao.css"

function Apresentacao(){
    return(
        <div className="apresentacao">
            <div className="texto">
                <h1>Lorem ipsum dolor sit amet, consectetur </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>Button</button>
            </div>
            <div className="imgspace">
                <img src={img1} />
            </div>

        </div>
        
    )
}

export default Apresentacao