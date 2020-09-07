import React from 'react'

export const Total = ({total, evtVaciar}) => {

    const vaciarTotal =()=>{
        evtVaciar()
    }

    return (
        <div className="contTotal">
            <div className="total">
                <h4>TOTAL: ${total}</h4>
                <button onClick={vaciarTotal} className="vaciar">Vaciar</button>
            </div>
            <button className="continuar">Continuar</button>
        </div>
    )
}