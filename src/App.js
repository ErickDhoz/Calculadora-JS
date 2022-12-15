
import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
const[input,setinput]=useState('');
const agregarInput = val =>{  
setinput(input + val);  
};

const calcularResultado =()=>{
  if (input){
  setinput(evaluate(input));
  }else {
    alert('Por favor ingrese valores validos.')
  }
};
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        
        <h1 className='titulo'>CALCULADORA JS</h1>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla
        input={input}
        />
        <div className='fila'>
          <Boton manejarClics={agregarInput}>1</Boton>
          <Boton manejarClics={agregarInput}>2</Boton>
          <Boton manejarClics={agregarInput}>3</Boton>
          <Boton manejarClics={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClics={agregarInput}>4</Boton>
          <Boton manejarClics={agregarInput}>5</Boton>
          <Boton manejarClics={agregarInput}>6</Boton>
          <Boton manejarClics={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClics={agregarInput}>7</Boton>
          <Boton manejarClics={agregarInput}>8</Boton>
          <Boton manejarClics={agregarInput}>9</Boton>
          <Boton manejarClics={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClics={calcularResultado}>=</Boton>
          <Boton manejarClics={agregarInput}>0</Boton>
          <Boton manejarClics={agregarInput}>.</Boton>
          <Boton manejarClics={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear
          manejarClear={()=>setinput('')}>
            Clear
            </BotonClear>

        </div>

        </div>
    </div>
  );
}

export default App;
