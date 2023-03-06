import styled from 'styled-components';

export const AccordionContent = styled.div`
  width: 100%;
  border-top: 0.5px solid ${(props) => props.theme.mainBgColor};
  border-bottom: 0.5px solid ${(props) => props.theme.mainBgColor};

  &:nth-child(2) {
    border: none;
  }
`;

export const AccordionButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: transparent;
  height: 56px;
  color: ${(props) => props.theme.mainBgColor};

  div,
  svg {
    margin: auto 0;
  }
`;

export const AccordionInner = styled.button`
  width: 100%;
  background: transparent;
  color: ${(props) => props.theme.accordionTextColor};
  text-align: justify;
  padding-bottom: 32px;
`;
