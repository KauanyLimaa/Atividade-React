import logo from './logo.svg';
import './App.css';
import Title from './components/Title/title';
import Button from './components/Title/Button/button';
import Name from './components/Greeting/name';
import CartaoDeInformacao from './components/InfoCard/infocard';
import Descrição from './components/InfoCard/infocard';

function App() {
  return (
    <div className="App">
      <Title label={"Página Inicial"}></Title>
      <Title label={"Sobre nós"}></Title>
      <Title label={"Contatos"}></Title>
      <Button label={"Enviar"}></Button>
      <Button label={"Cancelar"}></Button>
      <Name label={"Olá"}></Name>
      <CartaoDeInformacao label={"Título"}></CartaoDeInformacao>
      <Descrição label={"Descrição"}></Descrição>
    </div>
  );
}

export default App;
<Name name="Kau"></Name>