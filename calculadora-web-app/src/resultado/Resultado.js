import './Resultado.css';

function Resultado({numero}) {
	console.log(numero);
  return (
    <div className="Resultado-header">
      <h1>
      	{ numero }
      </h1>
    </div>
  );
}

export default Resultado;