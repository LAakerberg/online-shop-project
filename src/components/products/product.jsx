import React from 'react';
// import { FetchData } from '../../data/api/apiFetch';
import useApiData from '../../data/api/apiFetch';
import { apiUrl } from '../../data/api/apiUrl';
import * as S from './product.styles';
import { Link } from 'react-router-dom';

export function DataCard() {
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
      <div>
        <h2>Products</h2>
      </div>
      <div className="sm:w-11/12 desktop2xl:w-9/12 m-auto grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 desktop1xl:grid-cols-5 desktop2xl:grid-cols-6 gap-4">
        {data.map((dataName) => {
          const discountPercentage = Math.round(
            ((dataName.price - dataName.discountedPrice) / dataName.price) * 100
          );

          return (
            <S.ProductCard key={dataName.id}>
              <S.ProductImage style={{ position: 'relative' }}>
                {dataName.discountedPrice < dataName.price && (
                  <div className="sales_container">
                    {`${discountPercentage}% OFF`}
                  </div>
                )}
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
                  {dataName.discountedPrice < dataName.price ? (
                    <>
                      <S.ProductDiscountPrice>
                        {dataName.discountedPrice}
                      </S.ProductDiscountPrice>
                      <S.ProductPrice
                        style={{ textDecoration: 'line-through' }}
                      >
                        {dataName.price}
                      </S.ProductPrice>
                    </>
                  ) : (
                    <S.ProductPrice>{dataName.price}</S.ProductPrice>
                  )}
                </S.ProductCost>
                <S.ProductButtons>
                  <Link to={`/product/details/${dataName.id}`}>
                    <S.ViewButton>View more</S.ViewButton>
                  </Link>
                </S.ProductButtons>
              </S.ProductContent>
            </S.ProductCard>
          );
        })}
      </div>
    </>
  );
}

export default DataCard;
