import styled from 'styled-components';

export const UsersWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const UserDiv = styled.div`
  width: 567px;
  max-width: 567px;
  border: 1px solid ${(props) => props.theme.mainBgColor};
  letter-spacing: 0.03em;
  margin-bottom: 60px;

  &:nth-child(3n + 2) {
    margin: 0 25px 60px;
  }
`;

export const UserTitle = styled.h3`
  font-size: 28px;
  line-height: 36px;
  text-transform: uppercase;
  padding-top: 10px;
`;

export const UserContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 25px;
`;

export const UserText = styled.p`
  font-size: 16px;
  line-height: 24px;
`;
