import React from 'react';
import * as S from './index.styles';
//import { FetchData } from '../../data/api/apiFetch';

export function Home() {
  return (
    <>
      <div className="sm:w-11/12 desktop2xl:w-9/12 m-auto gap-4">
        <S.HomeContainer className="drop-shadow-lg">
          <h2>Welcome to Vision Store</h2>
          <p className="py-5">
            At Vision Store will you find almost everything you would ever want.
          </p>
          <p>Visit our product page to find more about our products.</p>
          <p className="py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros
            eros, consequat a dui vitae, ultricies consequat ipsum. Suspendisse
            laoreet pharetra tellus elementum ullamcorper. Suspendisse eget
            interdum orci. Mauris at tortor cursus eros faucibus lobortis. Proin
            dolor augue, dapibus nec rhoncus sit amet, pharetra ac lacus. Morbi
            sagittis lacus non urna mattis fringilla. Donec laoreet tristique
            ex, at varius leo porta vitae. Proin id elementum leo, nec lacinia
            ipsum. Integer eu nisl non lectus laoreet faucibus nec sed est.
            Pellentesque quis commodo sapien. Nulla at nisi tortor. Suspendisse
            imperdiet felis ut quam malesuada condimentum. Pellentesque justo
            nunc, porttitor sed porta sed, feugiat nec ipsum. Pellentesque at
            tellus velit. Praesent et ultricies eros. Nunc urna mauris, cursus
            sodales ante a, rutrum dapibus sem. Aliquam est ipsum, finibus at
            venenatis ut, fringilla ut justo. Vestibulum in posuere justo.
            Praesent at libero placerat, malesuada tellus nec, ultricies lacus.
            Fusce in suscipit arcu, quis faucibus enim. Nullam lectus odio,
            commodo vitae malesuada a, porta tristique tortor. Pellentesque ut
            fermentum urna.
          </p>
        </S.HomeContainer>
      </div>
    </>
  );
}
