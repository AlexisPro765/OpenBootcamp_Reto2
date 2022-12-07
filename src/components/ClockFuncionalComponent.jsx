import React, { Component, useState, useEffect } from 'react'

export const ClockFuncionalComponent = () => {

    const [objeto, setObjeto] = useState({
        fecha: new Date(),
        edad: 0,
        nombre: "Martín",
        apellidos: "San José"
    });


    useEffect(() => {
        const timerID = setInterval(
            () => tick(), 1000
        );

        return () => {
            clearInterval(timerID);
        };

    }, []);

    const tick = () => {
        objeto.edad += 1;
        objeto.fecha = new Date();
        setObjeto({...objeto});
    }

    return (
        <div>
            <h2>
                Hora Actual:
                {objeto.fecha.toLocaleTimeString()}
            </h2>
            <h3>{objeto.nombre} {objeto.apellidos}</h3>
            <h1>Edad: {objeto.edad}</h1>
        </div>
    );
}
export default ClockFuncionalComponent;