import styled from 'styled-components';
import { BaseButton } from '../../../App.styles';

export const ProductContainer = styled.div`
  background-color: #fff;
  border: 1px solid grey;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 5px;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 5px;
  border: 1px solid black;
  @media (min-width: 800px) {
    flex-direction: row;
  }
`;

export const ProductImgContainer = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  @media (min-width: 600px) {
    height: 300px;
  }
  @media (min-width: 800px) {
    max-width: 400px;
    height: 400px;
  }
`;

export const ProductImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ProductTitleContainer = styled.div`
  border-bottom: 1px solid black;
  margin-right: 10px;
`;

export const ProductTitle = styled.div``;

export const ProductBodyContainer = styled.div``;

export const ProductBody = styled.div``;

export const ProductStaticData = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const ProductDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 800px) {
    border-left: 2px dotted black;
    padding: 0px 10px;
    min-width: 250px;
  }
`;

export const ProductRatingContainer = styled.div``;

export const ProductRating = styled.div``;

export const ProductPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ProductPrice = styled.div`
  padding-right: 10px;
`;

export const ProductPriceDiscount = styled.div`
  padding: 0px 10px;
  font-weight: bold;
  border: 1px solid black;
`;

export const AddCartButton = styled(BaseButton)`
  border-radius: 5px;
  width: 100%;
  margin: 5px 0px;
`;

export const ProductReviewsContainer = styled.div``;

export const ProductReviews = styled.div``;

export const ProductReviewsComment = styled.div``;

export const ProductTagsContainer = styled.div``;

export const ProductTags = styled.div``;
