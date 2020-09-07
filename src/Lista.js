import React, {useState} from 'react'
import {Producto} from './Producto'
import {Total} from './Total'
import data from './data.json'

export const Lista = () => {

    const [total, setTotal] = useState(0)
    const [stock, setStock] = useState(data)

/*     const mostrarProducto = (nombre) => {
        alert(`Ha seleccionado ${nombre}`)
    } */

    const calcularTotal = (precio) =>{
        setTotal(total + precio)
    }

    const borrarTotal = (precio) =>{
        setTotal(total - precio)
    }

    const vaciar = () => {
        setTotal(total - total)
    }

    const productos = stock.map( producto => {
        return  <Producto 
                    imagen={producto.imagen}
                    nombre={producto.nombre}
                    precio={producto.precio} 
                    // evtMostar={mostrarProducto}
                    evtTotal={calcularTotal} 
                    evtBorrar={borrarTotal} />})
        
    return (
        <main>
            <h2>Catálogo</h2>
            {productos}
            <Total 
                total={total}
                evtVaciar={vaciar} />
        </main>
    )
}