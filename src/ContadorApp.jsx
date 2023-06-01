import { useState } from "react";

export const ContadorApp = () => {

    const [contador, setContador] = useState(0);

    const incrementar = () => {
        console.log('Se dio clic en el botón:');
        setContador(contador + 1);
        console.log('valor contador: ', contador);
    }

    return <>
        <h2>Componente ContadorApp</h2>
        <h3>Valor del contador: {contador}</h3>
        <button onClick={()=>{
            incrementar()
        }}>Incrementar Contador +1</button>
    </>
}
