import styled from 'styled-components';

// Import Global base button from App.styles
import { BaseButton } from '../../App.styles';

export const ProductCard = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  min-width: 210px;
  max-width: 230px;
  height: 380px;
  background-color: #fff;
  border-radius: 10px 10px 5px 5px;
  filter: drop-shadow(1px 1px 6px rgb(0 0 0 / 0.5));
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
`;

export const ProductImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0px 0px;
`;

export const ProductContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0px 2px;
`;

export const ProductTitle = styled.div``;

export const ProductDescription = styled.div`
  display: flex;
`;

export const ProductCost = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
`;

export const ProductPrice = styled.div`
  flex-grow: 1;
  /* text-decoration: line-through; */
`;

export const ProductDiscountPrice = styled.div`
  flex-grow: 1;
  font-weight: bold;
  font-size: large;
  color: red;
`;

export const ProductButtons = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  justify-items: center;
  justify-self: center;
  align-content: center;
  align-self: center;
  bottom: 5px;
`;

export const ViewButton = styled(BaseButton)`
  border-radius: 5px;
`;
