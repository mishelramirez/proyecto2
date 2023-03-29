import React from "react";
import "../Style/cards.css"


export const Card = ({titulo, texto, img}) => {

    return (
        <div className="contenedor">
            <p className="titulo"><strong> {titulo} </strong></p>
            <p className="texto"> {texto} </p>
           <div className={img} />
        </div>
    );
}