import styled from 'styled-components';

export const ContainerDiv = styled.header`
  width: 100%;
  max-width: 1760px;
  margin: 0 auto;
`;

export const HeaderInner = styled.section`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.06em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 34px;
`;

export const HeaderLanguages = styled.div`
  display: flex;
  align-items: flex-end;
  width: 150px;

  button {
    margin-right: 24px;
    background: transparent;
    width: 56px;
  }
`;

export const HeaderContent = styled.div`
  width: 254px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const HeaderButtons = styled.div`
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LogoutBtn = styled.button`
  background: transparent;
`;
