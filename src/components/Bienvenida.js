import React from "react";

const Mensaje = (props) => {
    return(
        <div>
             <h2>Bienvenido {props.greeting} </h2>
        </div>
    );
}

export default Mensaje