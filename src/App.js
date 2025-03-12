import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {

  const nome = "Maria";
  return (
    <div className="App">
      <SayMyName  nome="Matheus"/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <Pessoa 
      nome="Rodrigo"
      idade="28"
     profissao="programador"
     foto="https://placehold.co/150"
     />
    </div>
  );
}

export default App;
