import * as S from './index.styles';

function FormInput() {
  return (
    <>
      <S.FormContainer>
        <S.InputContainer className="p-2">
          <div>Hello</div>
        </S.InputContainer>
        <S.InfoContainer className="p-2"></S.InfoContainer>
      </S.FormContainer>
    </>
  );
}

export function Cart() {
  return (
    <div>
      <h3>This is the cart</h3>
      <div>
        <FormInput />
      </div>
    </div>
  );
}
