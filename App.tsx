import * as React from 'react';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <h1>Metodo Dos</h1>
      <NombreDos/>
      <p></p>
      <Idioma/>
      <BtnDos/>
      <p/>
      <Btn/>
      <p/>

    <SaludoIdioma nom='Fer' idio='e'/>
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

//YEs importante poner el key a la lista, para q el compilador tenga un punto de referencia
const NombreDos =()=>{
  return <ul>{
    nombre.map( (nombre, index)=> <li key = {index}>{nombre}</li> )
    }</ul>
  }
  //Condificiones

  const Idioma =()=>{
    const idioma = "es";

    return <div>
      {
        idioma === "es" ? <p>HOla</p> : <p>Hello</p> 
      }
    </div>
  }

  //Botones
  const Btn = ()=>{
    return React.createElement("button",{
      onClick: ()=> alert("Hola")
    },"Enviar");
  }

  const BtnDos =()=>  <button onClick={  ()=> alert("Hola") }> Enviar </button>

  const BtnTres = (props)=>{ return null; }

  class BtnTress extends React.Component{
    render(){ console.log(this.props); return null; }
  }


  const SaludoIdioma = ({nom, idio})=>{
    console.log(idio);
    const msj = idio === "es" ? 'Hola':'Hello';
    return <p>{msj} {nom}</p>
  }
  SaludoIdioma.defaultProps ={
    idio : "es"
  }
