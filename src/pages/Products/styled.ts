import styled from 'styled-components';
import arrowDown from '../../assets/images/arrow-down.svg';

export const MainContainer = styled.div`
  width: 100%;
  text-align: left;
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 430px;

  &::after {
    content: url(${arrowDown});
    position: absolute;
    right: 30px;
    top: 23px;
  }
`;

export const CategorySelect = styled.select`
  position: relative;
  width: 426px;
  height: 70px;
  border: 1px solid ${(props) => props.theme.mainBgColor};
  font-family: 'Libre Franklin', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  padding-left: 25px;
  padding-right: 30px;
  margin-bottom: 80px;
  color: ${(props) => props.theme.mainBgColor};
  appearance: none;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
