import styled from 'styled-components';

interface ChangedDivProps {
  width?: number;
  padTop?: number;
}

export const FooterDiv = styled.footer`
  background: ${(props) => props.theme.footerBg};
`;

export const ContainerDiv = styled.div`
  width: 100%;
  max-width: 1760px;
  margin: 0 auto;
`;

export const ChangedDiv = styled.div<ChangedDivProps>`
  width: ${({ width = 1760 }) => width}px;
  padding-top: ${({ padTop }) => padTop}px;
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 75px;
`;

export const FooterContentNav = styled.div`
  width: 470px;
  display: flex;
  justify-content: space-between;

  div a {
    display: inline-block;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.06em;
    margin-bottom: 20px;
  }
`;

export const FooterForm = styled.form`
  width: 390px;
  display: flex;
`;

export const InputForm = styled.input`
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  width: 318px;
  height: 70px;
  border: 1px solid ${(props) => props.theme.mainBgColor};
  background: transparent;
  padding: 0;
  padding-left: 25px;
`;

export const SubmitBtn = styled.button`
  border: 1px solid ${(props) => props.theme.mainBgColor};
  background: transparent;
  width: 70px;
  height: 72px;
  border-left: 0;
`;

export const IconsDiv = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
  margin-top: 25px;

  svg:nth-child(2),
  svg:nth-child(3) {
    padding-top: 1px;
  }
`;

export const FooterBottom = styled.div`
  padding-top: 55px;
  padding-bottom: 60px;
`;
