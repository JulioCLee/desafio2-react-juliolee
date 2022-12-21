import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Boton from './Componentes/Boton';
import Input from './Componentes/Input';

function App() {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');

  const Buttom = () => {
    if (password === '252525'){
      return <Boton></Boton>
    }
     
  }

  return (
    <div>
      <h1>Desafío Estado de los componentes y eventos</h1>
        <Input
          nombre={nombre}
          setNombre={setNombre}
          password={password}
          setPassword={setPassword}
        ></Input>
        <Buttom></Buttom>
    </div>
    
  
  );
}

export default App;
