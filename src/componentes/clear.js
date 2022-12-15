import React from "react";
import '../hoja-de-estilos/BotoClear.css';

const BotonClear =(props)=>(
<div className='boton-clear' onClick={props.manejarClear}>
    { props.children }
</div>
);

export default BotonClear;