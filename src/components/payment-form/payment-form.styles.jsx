
import styled from "styled-components";

export const PaymentFormContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    @media only screen and (max-width: 600px) {
    form {
      width: 80vw;
      min-width: initial;
    }
  }
`;

export const FormContainer = styled.form`
    height: 100px;
    min-width: 500px;
`;

