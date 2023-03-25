import styled from 'styled-components';

export const ProductCard = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  max-width: 230px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px 10px 0px 0px;
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
  position: relative;
`;

export const ProductTitle = styled.div``;

export const ProductDescription = styled.div`
  display: flex;
`;

export const ProductCost = styled.div`
  display: flex;
`;

export const ProductPrice = styled.div`
  flex-grow: 1;
`;

export const ProductDiscountPrice = styled.div`
  flex-grow: 1;
  font-weight: bold;
  font-size: large;
`;

export const ProductButtons = styled.div`
  flex: 1;
  justify-content: center;
  align-items: center;
  justify-items: center;
  justify-self: center;
  align-content: center;
  align-self: center;
  position: absolute;
  bottom: 5px;
`;

export const ViewButton = styled.button`
  bottom: 4px;
  text-decoration: none;
  max-width: 120px;
  padding: 5px 10px;
  background-color: #00c898;
  color: black;
  border: 1px solid grey;
  :hover {
    background-color: #206074;
    color: #fff;
    text-decoration: none;
    outline: none;
  }
`;
