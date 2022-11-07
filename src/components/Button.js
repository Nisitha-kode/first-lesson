import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props} => (props.red ? "red" : props.blue ? "blue": null)};
  
  border-radius: 15px;
`
