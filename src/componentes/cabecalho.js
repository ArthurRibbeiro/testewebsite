import './estilos/cabecalho.css'

import logo from '../assets/logo.png'

import { BsFillPersonFill } from "react-icons/bs";

function Cabecalho(){
    return (
    <div className='container'>
        <div className='img'>
            <img src={logo} id="logo" />

        </div>
        <div className="navbarCombo">
            <div className="navbar">
                <ul>

                    <li><a href='#'>Link 1</a></li>
                    <li><a href='#'>Link 2</a></li>
                    <li><a href='#'>Link 3</a></li>
                    <li><a href='#'>Link 4</a></li>
                </ul>

            </div>
            
            <div className="buttons">
                <button id="botao1">Button</button>
                <button id="botao2"><BsFillPersonFill className='icon'/> Button</button>

            </div>

        </div>
        

    </div>
    );
}

export default Cabecalho;