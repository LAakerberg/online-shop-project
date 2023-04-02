import React from 'react';
import { useParams } from 'react-router-dom';
import useApiData from '../../../data/api/apiFetch';
import { apiUrl } from '../../../data/api/apiUrl';

import * as S from './fetchProduct.styles';

export function SpecificData() {
  const { id } = useParams();
  const { data, isLoading, isError } = useApiData(apiUrl + id);
  console.log(data);
  if (isLoading) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <>
      <div className="sm:w-11/12 desktop2xl:w-9/12 m-auto grid mobile:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 desktop1xl:grid-cols-5 desktop2xl:grid-cols-6 gap-4"></div>
      <S.ProductContainer className="drop-shadow-lg">
        <h2>Product</h2>
        <p>Product ID: {id}</p>
        <S.ProductCard>
          <S.ProductStaticData>
            <S.ProductTitleContainer>
              <S.ProductTitle>
                <h2>{data.title}</h2>
              </S.ProductTitle>
            </S.ProductTitleContainer>
            <S.ProductImgContainer>
              <S.ProductImg src={data.imageUrl}></S.ProductImg>
            </S.ProductImgContainer>
            <S.ProductBodyContainer>
              <S.ProductBody>
                <p>{data.description}</p>
              </S.ProductBody>
            </S.ProductBodyContainer>
          </S.ProductStaticData>
          <S.ProductDataContainer>
            <S.ProductRatingContainer>
              <S.ProductRating>Rating: {data.rating} of 5</S.ProductRating>
            </S.ProductRatingContainer>
            <S.ProductPriceContainer>
              <S.ProductPrice>
                <p>Price: {data.price}</p>
              </S.ProductPrice>
              <S.ProductPriceDiscount>
                {data.discountedPrice < data.price && data.discountedPrice}
              </S.ProductPriceDiscount>
            </S.ProductPriceContainer>
            <S.AddCartButton>Add to cart</S.AddCartButton>
            <S.ProductTagsContainer>
              <S.ProductTags>
                <div>Tags: {data.tags}</div>
              </S.ProductTags>
            </S.ProductTagsContainer>
            <S.ProductReviewsContainer>
              <S.ProductReviews>Reviews (2)</S.ProductReviews>
              <S.ProductReviewsComment>Read comments</S.ProductReviewsComment>
            </S.ProductReviewsContainer>
          </S.ProductDataContainer>
        </S.ProductCard>
      </S.ProductContainer>
    </>
  );
}
