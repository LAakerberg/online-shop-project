import styled from 'styled-components';

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 230px;
  height: 300px;
  background-color: #fff;
  border: 1px solid black;
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 110px;
`;

export const ProductImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.div``;

export const ProductDescription = styled.div``;

export const ProductCost = styled.div`
  display: flex;
`;

export const ProductPrice = styled.div`
  flex-grow: 1;
`;

export const ProductDiscountPrice = styled.div`
  flex-grow: 1;
`;
