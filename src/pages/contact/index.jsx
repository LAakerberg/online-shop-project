import React from 'react';
import * as S from './index.styles';
import { FormHook } from '../../hooks/contact/ContactHook';

function FormInput() {
  return (
    <>
      <S.FormContainer>
        <S.InputContainer className="p-2">
          <FormHook className="" />
        </S.InputContainer>
        <S.InfoContainer className="p-2"></S.InfoContainer>
      </S.FormContainer>
    </>
  );
}

export function Contact() {
  return (
    <>
      <div>
        <h3>Contact Form</h3>
      </div>
      <FormInput />
    </>
  );
}
