import styled from 'styled-components';

export const ProductDiv = styled.div`
  width: 100%;
  display: flex;
  min-height: 80vh;
`;

export const ImageDiv = styled.div`
  width: 50%;
  margin: auto 0;
  text-align: center;
`;

export const ProductImage = styled.img`
  width: 60%;
`;

export const ProductContent = styled.div`
  width: 50%;
  text-align: left;
`;

export const ProductNav = styled.div`
  display: flex;
  margin-bottom: 50px;
  margin-top: 20px;

  a,
  p {
    margin-right: 5px;
  }
`;

export const ProductTitle = styled.h3`
  font-weight: 800;
  font-size: 40px;
  line-height: 47px;
`;

export const ProductSubtitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  font-weight: normal;
  font-size: 24px;
  line-height: 36px;
`;

export const ProductDesc = styled.div`
  width: 100%;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  margin-top: 45px;
`;

export const AccordionWrapper = styled.div`
  width: 100%;
  margin: 50px 0;
`;
