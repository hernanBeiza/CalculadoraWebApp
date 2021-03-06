import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import './Boton.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEquals, faPlus, faMinus, faTimes, faDivide } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, Button } from 'react-bootstrap';

let variante = "primary";

function Boton({label,funcion}) {

  const [activo, setActivo] = useState(false);

	const obtenerVariante = () => {
		switch(label){
			case "+":
			case "-":	
			case "X":
			case "/":
				variante = "primary";	
			break;
			default:
				variante = "dark";
			break;			
		}
		return variante;
	}

	const obtenerLeyenda = () => {
		switch(label){
			case "+":
				return (<FontAwesomeIcon icon={faPlus}/>)
			break;
			case "-":	
				return (<FontAwesomeIcon icon={faMinus}/>)
			case "X":
				return (<FontAwesomeIcon icon={faTimes}/>)
			case "/":
				return (<FontAwesomeIcon icon={faDivide}/>)
			break;
			default:
				return (label)
			break;			
		}
	}

	const obtenerEstado = () => {
		switch(label){
			case "/":
			case "%":	
			case "X":	
				return false;
			case "+/-":	
				return true;
			default:
				return false;
			break;			
		}
	}

	const presionar = () => {
		//console.log(label);
		//setActivo(true);

		switch(label){
			case "+":
				funcion("+");
			break;

			case "-":
				funcion("-");	
			break;

			case "X":
				funcion("X");
			break;

			case "/":
			case "+/-":
			case "%":
				console.log("Sin implementar aún");
			break;

			case "=":
				funcion();
			break;

			case "C":
				funcion();
			break;

			//Números
			default:
				funcion(label);
			break;
		}
	}

  return (
		<Button variant={ obtenerVariante() } disabled={obtenerEstado()} block onClick={ () => presionar() }>{obtenerLeyenda()}</Button>
  );
}


Boton.propTypes = {
  label: PropTypes.string,
  funcion: PropTypes.func
}

export default Boton;