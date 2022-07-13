import { useState, useEffect } from "react";

import styled from "@emotion/styled"

import Error from "./Error";

// Importando mi hook
import useSelectCoins from "../hooks/useSelectCoins";

import { coins } from '../data/coins';

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 1rem;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.8rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all .4s ease;
  margin-top: 3rem;

  &:hover {
    background-color: #7a7dfe;
  }
`;

const Form = ({
  setMonedas
}) => {

  const [ criptos, setCriptos ] = useState([]);
  const [ error, setError ] = useState( false );

  const [ moneda, SelectCoins ] = useSelectCoins('Elige tu moneda', coins );
  const [ criptoMoneda, SelectCriptomoneda ] = useSelectCoins('Elige tu criptomoneda', criptos );

  useEffect( () => {

    const consultarAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";

      const resp = await fetch( url );
      const { Data } = await resp.json();

      const arrayCripto = Data.map( cripto => {

        const criptoObj = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName
        }

        return criptoObj;

      });

      setCriptos( arrayCripto );
        
    }
    consultarAPI();

  }, [] );


  const handleSubmit = e => {

    e.preventDefault();

    if ( [moneda, criptoMoneda].includes('') ) {
      setError( true );
      return;
    }

    setError( false );
    setMonedas( {moneda, criptoMoneda });

  }


  return (
  
    <>
      { error && <Error>Todos los campos son obligatorios</Error>}

      <form
        onSubmit={  handleSubmit }
      >

        <SelectCoins />
        <SelectCriptomoneda />

        <InputSubmit 
          type="submit" 
          value="Cotizar" />
      </form>
    </>
  )
}

export default Form