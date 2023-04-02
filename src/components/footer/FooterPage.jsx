import React from 'react';
import * as S from './FooterPage.styles';

export function FooterPage() {
  return (
    <>
      <footer>
        <S.FooterContainer>
          <div className="mx-2">
            <div className="w-11/12 m-auto self-center justify-center text-center">
              <p className="break-all text-white m-auto p-4">
                Copyright belongs to Vision Store ©
              </p>
            </div>
          </div>
        </S.FooterContainer>
      </footer>
    </>
  );
}
