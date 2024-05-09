import React from "react";

const Prueba = ({ datasheet }) => {

    return (
        <div className=" ml-2 mb-2 p-3 col-md-6 rounded bg-white">
            {/* Datos del datasheet*/}
            <strong>Dominio: </strong> {datasheet.domain.name} <br />
            <strong>Nombre: </strong> {datasheet.name} <br />
            <strong>Tipo de variación: </strong> {datasheet.varietyType.name} <br />

            <div className="triangle-container">
                <div className="triangle"></div>
                <span className="triangle-text">
                    <strong>VP:</strong>
                    <br />
                    {datasheet.variationPoint.name}
                </span>
            </div>
            {/* Acá voy a mostrar las variaciones de ese punto de variacion*/}
            {console.log('objeto datasheet', datasheet)}
            {datasheet && datasheet.variations && datasheet.variations.map((variation, index) => (
                <div className="rectangle ml-5 mt-1" key = {index}>
                    <span className="rectangle-text"> {variation.name} </span>
                </div>
            ))}

        </div>
    );
};

export default Prueba;