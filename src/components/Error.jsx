import styled from "@emotion/styled";

const Texto = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 1.5rem;
  font-size: 1.6rem;
  text-transform: uppercase;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  text-align: center;
`;

const Error = ({ children }) => {
  return (
    <Texto>
      { children }
    </Texto>
  )
}

export default Error
