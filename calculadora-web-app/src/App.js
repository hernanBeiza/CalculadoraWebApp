import React, { useState, useEffect } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEquals, faPlus, faMinus, faTimes, faDivide } from '@fortawesome/free-solid-svg-icons'

import { Container, Row, Col, Button } from 'react-bootstrap';
import Resultado from './resultado/Resultado';

// Variables de la app
let resultadoString = "0";
let resultado = 0;
let operacionString = "";

function App() {

  const [numeroVisor, setNumeroVisor] = useState("");


  const ingresarNumero = (numero) => {
    console.log("ingresarNumero",numero);
    //console.log(numero);
    if(resultadoString=="0"){
      resultadoString = "";
    }
    resultadoString += "" + numero;
    setNumeroVisor(resultadoString);
  }

  const operar = (operacion) => {
    console.log("operar",operacion);
    operacionString = operacion;
    switch(operacion){
      case "SUMAR":
      resultado +=parseInt(resultadoString);
      resultadoString = "0";
      break;
      case "RESTAR":
      resultado -=parseInt(resultadoString);
      resultadoString = "0";
      break;
    }
  }
  
  const calcular = () => {
    console.log("calcular");
    operar(operacionString);
    setNumeroVisor(resultado);
  }

  const borrar = () => {
    console.log("borrar");
    resultadoString = "0";
    resultado = 0;
    operacionString = "";
    setNumeroVisor(resultadoString);
  }
  
  return (
    <div className="App">
      <Container className="p-4">
        <Row>
          <Col className="resultado p-2" xs={12}>
            <Resultado numero={numeroVisor}/>
          </Col>
        </Row>        
        <Row>
          <Col className="p-2" xs={3}><Button variant="dark" block onClick = { () =>borrar() }>C</Button></Col>
          <Col className="p-2" xs={3}><Button variant="dark" block disabled>+/-</Button></Col>
          <Col className="p-2" xs={3}><Button variant="dark" block disabled>%</Button></Col>
          <Col className="p-2" xs={3}><Button variant="primary" block disabled><FontAwesomeIcon icon={faDivide}/></Button></Col>
        </Row>
        <Row>
          <Col className="p-2" xs={3}><Button variant="dark" block onClick={ () => ingresarNumero(7) }>7</Button></Col>
          <Col className="p-2" xs={3}><Button variant="dark" block onClick={ () => ingresarNumero(8) }>8</Button></Col>
          <Col className="p-2" xs={3}><Button variant="dark" block onClick={ () => ingresarNumero(9) }>9</Button></Col>
          <Col className="p-2" xs={3}><Button variant="primary" block disabled><FontAwesomeIcon icon={faTimes}/></Button></Col>
        </Row>
        <Row>
          <Col className="p-2" xs={3}><Button variant="dark" block onClick={ () => ingresarNumero(4) }>4</Button></Col>
          <Col className="p-2" xs={3}><Button variant="dark" block onClick={ () => ingresarNumero(5) }>5</Button></Col>
          <Col className="p-2" xs={3}><Button variant="dark" block onClick={ () => ingresarNumero(6) }>6</Button></Col>
          <Col className="p-2" xs={3}><Button variant="primary" block onClick={ () => operar("RESTAR") }><FontAwesomeIcon icon={faMinus}/></Button></Col>
        </Row>
        <Row>
          <Col className="p-2" xs={3}><Button variant="dark" block onClick={ () => ingresarNumero(1) }>1</Button></Col>
          <Col className="p-2" xs={3}><Button variant="dark" block onClick={ () => ingresarNumero(2) }>2</Button></Col>
          <Col className="p-2" xs={3}><Button variant="dark" block onClick={ () => ingresarNumero(3) }>3</Button></Col>
          <Col className="p-2" xs={3}><Button variant="primary" block onClick={ () => operar("SUMAR") }><FontAwesomeIcon icon={faPlus}/></Button></Col>
        </Row>
        <Row>
          <Col className="p-2" xs={9}><Button variant="dark" block onClick={ () => ingresarNumero(0) }>0</Button></Col>
          <Col className="p-2" xs={3}><Button variant="primary" block onClick={ () => calcular() }><FontAwesomeIcon icon={faEquals}/></Button></Col>
        </Row>
      </Container>    
    </div>
  );
}

export default App;
