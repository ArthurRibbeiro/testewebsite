import './estilos/cabecalho.css'
import { BsList } from "react-icons/bs";
import Sidebar  from "./Header/Sidebar/index.jsx"

import { useState } from 'react';

import logo from '../assets/logo.png'

import { BsFillPersonFill } from "react-icons/bs";

function Cabecalho(){
    const [sidebar, setSidebar] = useState(false);
    const ShowSiderBar= () => {
        setSidebar(!sidebar);
        console.log(sidebar);
    }

    return (
    <div className='container'>
        <div className='img'>
            <img src={logo} id="logo" />

        </div>
        <div className='divmenu' onClick={ShowSiderBar}>
            [sidebar && <Sidebar active={setSidebar}/>]
            <button>
                <BsList className='menu' />
            </button>
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