import React from "react";
import "../Style/cards.css"


export const Card = ({titulo, texto, src}) => {

    return (
        <div className="contenedor">
            <p className="titulo"><strong> {titulo} </strong></p>
            <p className="texto"> {texto} </p>
            <img src={src}/>
        </div>
    );
}