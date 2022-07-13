import styled from "@emotion/styled"

const Container = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 4rem 0;
`;

const Texto = styled.p`
  font-size: 1.4rem;
  margin-bottom: 8px;

  span {
    font-weight: 700;
  }
`;

const Precio = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  text-transform: uppercase;

  span {
    font-weight: 700;
  }
`
const Image = styled.img`
  width: 12rem;
  display: block;
`;

const Result = ({ cotizacion }) => {

  console.log( cotizacion );

  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE, FROMSYMBOL } = cotizacion;

  console.log( IMAGEURL )

  return (
    <Container>
      <Image src={`https://cryptocompare.com${IMAGEURL}`} alt="Imagen crypto" />
      <div>
      <Precio>El precio es de:<span>{` ${FROMSYMBOL} ${PRICE}`}</span></Precio>
      <Texto>Precio más alto del día: <span>{ ` ${FROMSYMBOL} ${HIGHDAY}` }</span></Texto>
      <Texto>Precio más bajo del día: <span>{ ` ${FROMSYMBOL} ${LOWDAY}` }</span></Texto>
      <Texto>Variación últimas 24 horas: <span>{ CHANGEPCT24HOUR }</span></Texto>
      <Texto>Última Actualización: <span>{ LASTUPDATE }</span></Texto>
      </div>
    </Container>
  )
}

export default Result
