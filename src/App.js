import logo from './logo.svg';
import './App.css';
import Cabecalho from './componentes/cabecalho';
import Apresentacao from './componentes/apresentacao';
import Carrocelservicos from './componentes/carrocelservicos/carrocelservicos';
import Vitrine from './componentes/vitrine';
import Carrocelaval from './componentes/carrocelaval/carrocelaval'
import Form from './componentes/form';
import Rodape from './componentes/rodape';

function App() {
  return (
    <>
    <Cabecalho />
    <Apresentacao />
    <Carrocelservicos />
    <Vitrine />
    <Carrocelaval />
    <Form />
    <Rodape />


    
    </>
  );
}

export default App;
