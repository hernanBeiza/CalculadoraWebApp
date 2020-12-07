import PropTypes from 'prop-types';

import './Visor.css';

let numero = 0;

function Visor({numero}) {
	
	console.log(numero);

  return (
    <div className="Visor-header">
      <h1>
      	{ numero }
      </h1>
    </div>
  );
}

Visor.propTypes = {
  numero: PropTypes.string
}

export default Visor;