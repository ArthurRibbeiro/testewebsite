import '../estilos/carrocelservicos/carrocelservicos.css'
import Celulacarrocelservicos from './celulacarrocelservicos'

function Carrocelservicos(){
    return(
        <div>
            <h2>Serviços</h2>
            <div className='galeria'>
                <Celulacarrocelservicos />
                <Celulacarrocelservicos />
                <Celulacarrocelservicos />
                <Celulacarrocelservicos />
                

            </div>
        </div>

    )
}

export default Carrocelservicos