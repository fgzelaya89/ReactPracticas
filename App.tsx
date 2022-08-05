import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Nombres />
      <h1>Metodo Dos</h1>
      <NombreDos/>
    </div>
  );
}

const nombre = ['Fer', 'Ter', 'WER']

function getNombre() {
  const elemenlista = [];
  for (var i = 0; i < nombre.length; i++) {
    elemenlista.push(<li>{nombre[i]}</li>);
  }
  return elemenlista;
}
const Nombres = () => {
  return <ul>{getNombre()}</ul>;
}

const NombreDos =()=>{
  return <ul>{
    nombre.map( nombre=> <li>{nombre}</li> )
    }</ul>
  }
