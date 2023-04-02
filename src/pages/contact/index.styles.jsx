// Style for contact form

import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #fff;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 5px;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 5px 10px;
  background-color: beige;
`;

export const SendButton = styled(Button)`
  background-color: green;
`;
