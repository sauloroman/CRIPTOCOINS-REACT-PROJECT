import { useState, useEffect } from "react";
import styled from '@emotion/styled';

import Form from "./components/Form";
import Result from "./components/Result";
import Spinner from "./components/Spinner";

// Imagen
import imageCripto from './img/imagen-criptos.png';

// STYLED COMPONENT

const Container = styled.div`
  max-width: 90rem;
  margin: 0 auto 5rem auto;
  width: 90%;

  @media ( min-width: 992px ) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }

`;

const Image = styled.img`
  max-width: 40rem;
  width: 80%;
  margin: 10rem auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-size: 3.4rem;
  font-weight: 900;
  margin-top: 8rem;
  margin-bottom: 5rem;

  &::after {
    display: block;
    margin: 1rem auto auto;
    content: '';
    width: 10rem;
    height: .6rem;
    background-color: #66a2fe;
  }

`

const App = () => {

  const [ monedas, setMonedas ] = useState({});
  const [ cotizacion, setCotizacion] = useState({});
  const [ loading, setLoading ] = useState( false );

  useEffect( () => {
    if ( Object.keys( monedas ).length ) {
      
      const cotizarCripto = async () => {

        setLoading( true );
        setCotizacion({});

        const { moneda, criptoMoneda } = monedas;

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ criptoMoneda }&tsyms=${ moneda }`

        const resp = await fetch( url );
        const data = await resp.json();

        setCotizacion( data.DISPLAY[criptoMoneda][moneda] );

        setLoading( false )

      };
      cotizarCripto();

    }
  }, [ monedas ] )  

  return (
    <Container>
      <Image 
        src = { imageCripto }
        alt = "Logos de las diversas criptomonedas"
      />
      <div>
        <Heading>Cotiza Criptomonedas al instante</Heading>
        <Form 
          setMonedas = { setMonedas }
        />

        { loading && <Spinner />}

        { ( cotizacion.PRICE ) && <Result cotizacion = { cotizacion } /> }

      </div>
    </Container>
  )
}

export default App;