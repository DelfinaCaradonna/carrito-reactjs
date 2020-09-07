import React, {useState} from 'react'

export function Producto({nombre, precio, evtTotal, imagen, evtBorrar}){
    
    const [cant, setCant] = useState(0)

    const handleComprar=()=>{
        //alert('Compraste un Iphone 8')
        setCant(cant+1)
        evtTotal(precio)
    }

    const handleBorrar=()=>{
        setCant(cant-1)
        evtBorrar(precio)
    }

/*     const handleSelect=()=>{
        evtMostar(nombre)
    } */

    return (
        <div>
            <div className="contenedor">
                <div>
                    <img src={imagen} alt=""/> 
                </div>
                <div className="contenido">
                    <h2>{nombre}</h2> 
                    <button onClick={handleComprar} className="comprar">Agregar</button>
                    {/* <button onClick={handleSelect}>Seleccionar</button> */}
                </div>
                <div className="container">
                <h2>${precio}</h2>
                <div className="cont">  
                    <h3>Cantidad: {cant}</h3>  
                    <button onClick={handleBorrar} className="borrar">X</button>
                </div>
                </div>
            </div>
            <hr/>
        </div>
    )
}