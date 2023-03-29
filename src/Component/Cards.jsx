import React from "react";
import "../Style/cards.css"


export const Card = ({titulo, texto, img, texto2}) => {

    return (
        <div className="contenedor">
            <p className="titulo"><strong> {titulo} </strong></p>
            <p className="texto"> {texto} </p>
            <p className="texto"> {texto2} </p>
           <div className={img} />
        </div>
    );
}