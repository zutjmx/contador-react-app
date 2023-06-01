import { useState } from "react";
import PropTypes from 'prop-types';
import { faker } from '@faker-js/faker';

export const ContadorApp = ({valorInicial}) => {

    const [contador, setContador] = useState(valorInicial);

    const incrementar = () => {
        //setContador(contador + 1);
        setContador(c => c + 1); //Mediante callback
    }

    return <>
        <h2>Componente ContadorApp</h2>
        <h3>Valor del contador: {contador}</h3>
        <button onClick={()=>{
            incrementar()
        }}>Incrementar Contador +1</button>
    </>
}

ContadorApp.propTypes = {
    valorInicial: PropTypes.number.isRequired,
}

ContadorApp.defaultProps = {
    valorInicial: faker.number.int({min:1, max:10}),
}
