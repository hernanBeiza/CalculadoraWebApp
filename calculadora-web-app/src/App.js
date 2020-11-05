import React, { useState, useEffect } from 'react';
import './App.css';

/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEquals, faPlus, faMinus, faTimes, faDivide } from '@fortawesome/free-solid-svg-icons'
*/
import { Container, Row, Col, Button } from 'react-bootstrap';

import Visor from './visor/Visor';
import Boton from './boton/Boton';

// Variables de la app
let resultadoString = "0";
let resultado = 0;
let operacionString = "";
let primerIngreso = true;

function App(props) {

  const [numeroVisor, setNumeroVisor] = useState("");
  const [operacionString, setOperacionString] = useState("");

  //Ejecutar esto al iniciar
  /*
  useEffect(() => {
    setNumeroVisor(resultadoString)
  },[resultadoString]);
  */

  const ingresarNumero = (numero) => {
    console.log("ingresarNumero",numero);
    if(resultadoString=="0"){
      resultadoString = "";
    }
    resultadoString = resultadoString + "" + numero;
    setNumeroVisor(resultadoString);
  }

  const operar = (operacion) => {
    console.log("operar",operacion);
    setOperacionString(operacion);
    switch(operacion){
      case "+":
        resultado +=parseInt(resultadoString);
        resultadoString = "0";
      break;
      case "-":
      if(!primerIngreso){
        resultado -=parseInt(resultadoString);
      } else {
        resultado = parseInt(resultadoString);
      }
      resultadoString = "0";
      break;
      case "X":
      if(!primerIngreso){
        resultado *=parseInt(resultadoString);
      } else {
        resultado = parseInt(resultadoString);
      }
      resultadoString = "0";
      break;
      case "/":
      if(!primerIngreso){
        resultado /=parseInt(resultadoString);
      } else {
        resultado = parseInt(resultadoString);
      }
      resultadoString = "0";
      break;

    }
    primerIngreso = false;
  }

  const calcular = () => {
    console.log("calcular");
    operar(operacionString);
    setNumeroVisor(resultado);
  }

  const borrar = () => {
    console.log("borrar");
    primerIngreso = true;
    resultadoString = "0";
    resultado = 0;
    setOperacionString("");
    setNumeroVisor(resultadoString);
  }
  
  return (
    <div className="App">
      <Container className="p-4">
        <Row>
          <Col className="resultado p-2" xs={12}>
            <Visor numero={numeroVisor}/>
          </Col>
        </Row>        
        <Row>
          <Col className="p-2" xs={3}>
            {/*
            <Button variant="dark" block onClick = { () =>borrar() }>C</Button>
            */}
            <Boton funcion = { borrar } label="C"/>
          </Col>
          <Col className="p-2" xs={3}>
            {/*
              <Button variant="dark" block disabled>+/-</Button>
            */}
            <Boton label="+/-"/>
          </Col>
          <Col className="p-2" xs={3}>
            {/*
            <Button variant="dark" block disabled>%</Button>
            */}
            <Boton label="%"/>
          </Col>
          <Col className="p-2" xs={3}>
            {/*
            <Button variant="primary" block disabled><FontAwesomeIcon icon={faDivide}/></Button>
            */}
            <Boton funcion={ operar }label="/"/>
          </Col>
        </Row>
        <Row>
          <Col className="p-2" xs={3}>
            {/* 
              <Button variant="dark" block onClick={ () => ingresarNumero(7) }>7</Button>
            */}
            <Boton funcion={ ingresarNumero } label="7"/>
          </Col>
          <Col className="p-2" xs={3}>
            {/* 
            <Button variant="dark" block onClick={ () => ingresarNumero(8) }>8</Button>
            */}
            <Boton funcion={ ingresarNumero } label="8"/>
          </Col>
          <Col className="p-2" xs={3}>
            {/* 
            <Button variant="dark" block onClick={ () => ingresarNumero(9) }>9</Button>
            */}
            <Boton funcion={ ingresarNumero } label="9"/>
          </Col>
          <Col className="p-2" xs={3}>
            {/*
            <Button variant="primary" block disabled><FontAwesomeIcon icon={faTimes}/></Button>
            */}
            <Boton label="X" funcion={ operar }/>
            </Col>
        </Row>
        <Row>
          <Col className="p-2" xs={3}>
            {/*
            <Button variant="dark" block onClick={ () => ingresarNumero(4) }>4</Button>
            */}
            <Boton funcion={ ingresarNumero } label="4"/>
          </Col>
          <Col className="p-2" xs={3}>
            {/*
            <Button variant="dark" block onClick={ () => ingresarNumero(5) }>5</Button>
            */}
            <Boton funcion={ ingresarNumero } label="5"/>
          </Col>
          <Col className="p-2" xs={3}>
            {/*
            <Button variant="dark" block onClick={ () => ingresarNumero(6) }>6</Button>
            */}
            <Boton funcion={ ingresarNumero } label="6"/>
          </Col>
          <Col className="p-2" xs={3}>
            {/*<Button variant="primary" block onClick={ () => operar("RESTAR") }><FontAwesomeIcon icon={faMinus}/></Button>*/}
            <Boton funcion={ operar } label="-"/>
          </Col>
        </Row>
        <Row>
          <Col className="p-2" xs={3}>
            {/*<Button variant="dark" block onClick={ () => ingresarNumero(1) }>1</Button>*/}
            <Boton funcion={ ingresarNumero } label="1"/>
          </Col>
          <Col className="p-2" xs={3}>
            {/*<Button variant="dark" block onClick={ () => ingresarNumero(2) }>2</Button>*/}
            <Boton funcion={ ingresarNumero } label="2"/>
          </Col>
          <Col className="p-2" xs={3}>
            {/*<Button variant="dark" block onClick={ () => ingresarNumero(3) }>3</Button>*/}
            <Boton funcion={ ingresarNumero } label="3"/>
          </Col>
          <Col className="p-2" xs={3}>
            {/*<Button variant="primary" block onClick={ () => operar("SUMAR") }><FontAwesomeIcon icon={faPlus}/></Button>*/}
            <Boton funcion={ operar } label="+"/>
          </Col>
        </Row>
        <Row>
          <Col className="p-2" xs={9}>
            {/*
            <Button variant="dark" block onClick={ () => ingresarNumero(0) }>0</Button>
            */}
            <Boton label="0"/>
          </Col>
          <Col className="p-2" xs={3}>
            {/*
              <Button variant="primary" block onClick={ () => calcular() }><FontAwesomeIcon icon={faEquals}/></Button>
            */}
            <Boton funcion={ calcular } label="="/>
          </Col>
        </Row>
      </Container>    
    </div>
  );
}

export default App;
