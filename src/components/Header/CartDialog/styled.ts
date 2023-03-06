import styled from 'styled-components';

export const CartDialogWrapper = styled.div`
  text-align: center;
  margin: 0 10px 0 30px;
`;

export const CartDialogContent = styled.div`
  text-align: left;
`;

export const ControlDialogDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  background: transparent;
  width: 25px;
  height: 25px;
  padding: 0;
`;

export const CartDialogTitle = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid ${(props) => props.theme.mainBgColor};
  display: flex;
  justify-content: space-between;
`;

export const TitleText = styled.h3`
  font-weight: 800;
  font-size: 40px;
  line-height: 47px;
`;

export const TitleButton = styled.button`
  background: transparent;
  height: 47px;
  color: ${(props) => props.theme.mainBgColor};
`;

export const ProductsContainer = styled.div`
  height: 604px;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }
`;

export const DialogFooter = styled.div`
  margin-top: 18px;
`;

export const DialogFooterPrice = styled.div`
  display: flex;
  justify-content: space-between;
  height: 68px;
  border-top: 1px solid ${(props) => props.theme.mainBgColor};
  border-bottom: 1px solid ${(props) => props.theme.mainBgColor};
  margin-bottom: 15px;

  p {
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    padding-top: 16px;
  }
`;
