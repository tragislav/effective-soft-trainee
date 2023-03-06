import styled from 'styled-components';

export const ProductWrapper = styled.div`
  display: flex;
  margin: 25px 0;
  width: 100%;
`;

export const ProductImage = styled.img`
  width: 160px;
  height: 160px;
  min-width: 160px;
`;

export const ProductContent = styled.div`
  margin-left: 30px;
  padding-top: 10px;
  width: 710px;
`;

export const ProductTitle = styled.p`
  font-weight: normal;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: 0.03em;
  height: 72px;
  overflow: hidden;
  text-align: left;
`;

export const ProductContentInner = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;

export const ProductPrice = styled.p`
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
`;

export const ProductManipulations = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 7px;
  width: 220px;

  div {
    display: flex;
  }
`;

export const ProductQuantity = styled.p`
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  padding: 0 5px;
`;

export const ProductButton = styled.button`
  background: transparent;
  height: 24px;
  color: ${(props) => props.theme.mainBgColor};

  &:nth-child(2) {
    margin-top: 1px;
  }
`;
