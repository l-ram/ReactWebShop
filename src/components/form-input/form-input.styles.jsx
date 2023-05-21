import styled, { css } from 'styled-components';

const subColour = 'grey';
const mainColour = 'black';

export const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColour};
`

export const FormInputLabel = styled.label`
  color: ${subColour};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  backgroundColor: white;
  color: ${subColour};
  fontSize: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100 %;
  border: none;
  borderRadius: 0;
  borderBottom: 1px solid ${subColour};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`

export const Group = styled.div`
  position: relative;
  margin: 45px 0;
  input[type = 'password'] {
  letterSpacing: 0.3em;
}
`