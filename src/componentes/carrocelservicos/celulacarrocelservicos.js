import '../estilos/carrocelservicos/celulacarrocelservicos.css'

import { CgSmileMouthOpen } from "react-icons/cg";
function Celulacarrocelservicos(){
    return(
        <div className='celula'>
                    <div className='uppermid'></div>
                    <div className='bottommid'>
                        <h4>Lorem ipsum dolor</h4>
                        <ul>
                            <div className='celulaDesc'>
                                <div>
                                    <CgSmileMouthOpen className='smileIco'/>
                                </div>
                                <div>
                                    <li>Faucibus turpis in eu mi bibendum neque egestas. Ante sit amet est placerat</li>
                                </div>
                            </div>
                            <div className='celulaDesc'>
                                
                                <div>
                                    <CgSmileMouthOpen className='smileIco'/>
                                </div>
                                <div>
                                    <li>Facilisis mauris sit amet</li>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
    )
}

export default Celulacarrocelservicos;