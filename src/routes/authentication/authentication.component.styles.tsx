import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;
  @media screen and (max-width: 700px) {
  width: 100%;
  justify-content: center;
  flex-direction: column;
  }
`;