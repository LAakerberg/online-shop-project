import React from 'react';
// import { FetchData } from '../../data/api/apiFetch';
import useApiData from '../../data/api/apiFetch';
import { apiUrl } from '../../data/api/apiUrl';
import * as S from './product.styled';

function DataCard() {
  const { data, isLoading, isError } = useApiData(apiUrl);
  console.log(data);
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 gap-4">
        {data.map((dataName) => (
          <S.ProductCard key={dataName.id}>
            <S.ProductImage>
              <S.ProductImg src={dataName.imageUrl}></S.ProductImg>
            </S.ProductImage>
            <S.ProductContent>
              <S.ProductTitle>
                <h3 className="text-xl">{dataName.title}</h3>
              </S.ProductTitle>
              <S.ProductDescription>
                {/* {dataName.description} */}
              </S.ProductDescription>
              <S.ProductCost>
                <S.ProductPrice>{dataName.price}</S.ProductPrice>
                <S.ProductDiscountPrice>
                  {dataName.discountedPrice < dataName.price &&
                    dataName.discountedPrice}
                </S.ProductDiscountPrice>
              </S.ProductCost>
            </S.ProductContent>
          </S.ProductCard>
        ))}
      </div>
    </>
  );
}

export default DataCard;
