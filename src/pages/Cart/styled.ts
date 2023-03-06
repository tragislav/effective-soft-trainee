import styled from 'styled-components';

export const CartWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CartTitle = styled.div`
  width: 310px;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 47px;
`;

export const CartProducts = styled.div`
  width: 716px;
`;

export const CartPriceModule = styled.div`
  width: 369px;
  height: 305px;
  background: ${(props) => props.theme.cartPriceBg};
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: left;
  padding: 40px 24px 24px;
`;

export const CartPriceTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 16px;
  border-bottom: 1px solid ${(props) => props.theme.mainBgColor};
`;

export const CartPriceContent = styled.div`
  font-weight: 300;
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 39px;
  height: 96px;
`;

export const CartPriceBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;
