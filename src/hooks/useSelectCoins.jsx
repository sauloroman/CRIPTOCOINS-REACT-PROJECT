import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
  display: block;
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  margin: 1.5rem 0;
`

const Select = styled.select`
  width: 100%;
  font-size: 1.6rem;
  padding: 1.4rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
`

const useSelectCoins = (label, options) => {

  const [ state, setState ] = useState('');
  
  const SelectCoins = () => (
    <>
      <Label>{ label }</Label>
      <Select
        value = { state }
        onChange = { e => setState( e.target.value )}
      >
        <option value="">Selecciona</option>
        {options.map( option => (
          <option 
          key={ option.id }
          value={option.id}
          >
            { option.nombre }
          </option>
        ))}
      </Select>
    </>
  )

  return [ state, SelectCoins ];

}

export default useSelectCoins