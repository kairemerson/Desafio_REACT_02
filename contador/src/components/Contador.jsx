import { useState } from "react"
import "./contador.css"

const Contador = ()=>{
    const [contador, setContador] = useState(0)

    const manipula_contador = (number)=> {
        setContador(contador + number)
    }
    return(
        <div>
            <h1>Contador: <span>{contador}</span></h1>
            <div className="wrapper">
                <div>
                    <button onClick={()=>manipula_contador(1)}>+1</button>
                    <button onClick={()=>manipula_contador(10)}>+10</button>
                    <button onClick={()=>manipula_contador(100)}>+100</button>
                </div>
                <div>
                    <button className="decrescimo" onClick={()=>manipula_contador(-1)}>-1</button>
                    <button className="decrescimo" onClick={()=>manipula_contador(-10)}>-10</button>
                    <button className="decrescimo" onClick={()=>manipula_contador(-100)}>-100</button>
                </div>
            </div>
        </div>
    )
}

export default Contador